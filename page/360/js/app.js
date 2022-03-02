let camera, scene, renderer, light;

let onPointerDownMouseX = 0,
    onPointerDownMouseY = 0,
    lon = 0,
    onPointerDownLon = 0,
    lat = 0,
    onPointerDownLat = 0,
    phi = 0,
    theta = 0,
    setInfo = {},
    localData = [],
    areaList = [],
    area = "";
init();

function init() {
    const container = document.getElementById('container');

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);

    scene = new THREE.Scene();



    changeScene();

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    container.style.touchAction = 'none';
    container.addEventListener('pointerdown', onPointerDown);

    document.addEventListener('wheel', onDocumentMouseWheel);

    //

    document.addEventListener('dragover', function (event) {

        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';

    });

    document.addEventListener('dragenter', function () {

        document.body.style.opacity = 0.5;

    });

    document.addEventListener('dragleave', function () {

        document.body.style.opacity = 1;

    });

    document.addEventListener('drop', function (event) {

        event.preventDefault();

        const reader = new FileReader();
        reader.addEventListener('load', function (event) {

            material.map.image.src = event.target.result;
            material.map.needsUpdate = true;

        });
        reader.readAsDataURL(event.dataTransfer.files[0]);

        document.body.style.opacity = 1;

    });

    window.addEventListener('resize', onWindowResize);

    animate();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

function onPointerDown(event) {

    if (event.isPrimary === false) return;

    onPointerDownMouseX = event.clientX;
    onPointerDownMouseY = event.clientY;

    onPointerDownLon = lon;
    onPointerDownLat = lat;

    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp);

}

function onPointerMove(event) {

    if (event.isPrimary === false) return;

    lon = (onPointerDownMouseX - event.clientX) * 0.1 + onPointerDownLon;
    lat = (event.clientY - onPointerDownMouseY) * 0.1 + onPointerDownLat;

}

function onPointerUp() {

    if (event.isPrimary === false) return;

    document.removeEventListener('pointermove', onPointerMove);
    document.removeEventListener('pointerup', onPointerUp);

}

function onDocumentMouseWheel(event) {

    const fov = camera.fov + event.deltaY * 0.05;

    camera.fov = THREE.Math.clamp(fov, 10, 75);

    camera.updateProjectionMatrix();

}

function animate() {

    requestAnimationFrame(animate);
    update();

}

function update() {
    lat = Math.max(-85, Math.min(85, lat));
    phi = THREE.Math.degToRad(90 - lat);
    theta = THREE.Math.degToRad(lon);

    const x = Math.sin(phi) * Math.cos(theta);
    const y = Math.cos(phi);
    const z = Math.sin(phi) * Math.sin(theta);
    camera.lookAt(x, y, z);

    renderer.render(scene, camera);

}

async function changeScene() {
    localData = await getLocalData();
    areaList = localData.map(e => e.name);
    area = getQueryString("area");
    site = getQueryString("site");
    //
    let setAreData = {};
    if (area == null) {
        setAreData = localData.filter(e => e.name == localData[0].name);
    } else {
        setAreData = localData.filter(e => e.name == area);
        if (setAreData.length == 0) {
            setAreData = localData.filter(e => e.name == localData[0].name);
        }
    }
    if (site == null) {
        setAreData[0].imgs = [setAreData.imgs[0]];
    } else {
        let oldData = JSON.parse(JSON.stringify(setAreData[0].imgs));
        setAreData[0].imgs = setAreData[0].imgs.filter(e => e.name == site);
        if (setAreData[0].imgs.length == 0) {
            setAreData[0].imgs = oldData;
        }
    }
    document.querySelector("#title").innerHTML = setAreData[0].name;
    document.querySelector("#title2").innerHTML = setAreData[0].imgs[0].name;
    setInfo.img = {};
    setInfo.logo = {};
    setInfo.lookAt = {};
    setInfo.img.path = setAreData[0].imgs[0].path;
    setInfo.logo.path = setAreData[0].imgs[0].logo.path
    setInfo.logo.rotation = setAreData[0].imgs[0].logo.rotation;
    setInfo.lookAt.lat = setAreData[0].imgs[0].lookAt.lat;
    setInfo.lookAt.lon = setAreData[0].imgs[0].lookAt.lon;
    if (scene.children.length > 0) {
        scene.children = [];
    }
    //
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const texture = new THREE.TextureLoader().load(setInfo.img.path);
    const material = new THREE.MeshBasicMaterial({
        map: texture
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);


    const logoImg = new THREE.ImageUtils.loadTexture(setInfo.logo.path);
    const logoMaterial = new THREE.MeshBasicMaterial({
        map: logoImg
    });
    const bg = new THREE.MeshBasicMaterial({
        color: 'red'
    })
    const Logo = new THREE.Mesh(new THREE.CylinderGeometry(250, 250, 1, 40, 40), [bg, logoMaterial, bg]);
    Logo.overdraw = true;
    Logo.name = 'Logo';
    Logo.position.y = -400;
    Logo.rotation.set(0, setInfo.logo.rotation, 0);
    scene.add(Logo)

    lat = setInfo.lookAt.lat;
    lon = setInfo.lookAt.lon;
}

function getLocalData() {
    return fetch("./scene.json")
        .then(response => {
            return response.json();
        })
}

function getQueryString(item) {
    item = item.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + item + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};