(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"RECOVER_未命名_2_atlas_1", frames: [[0,0,1709,925]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib._1646640393791 = function() {
	this.initialize(ss["RECOVER_未命名_2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.補間動畫18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.text = new cjs.Text("進入VR", "bold 70px 'Trebuchet MS'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 72;
	this.text.lineWidth = 231;
	this.text.parent = this;
	this.text.setTransform(0,-41.15);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.2,-43.1,234.5,86.30000000000001);


(lib.補間動畫14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A993").s().p("AlpFpQiWiVAAjUQAAjTCWiWQCWiWDTABQDUgBCVCWQCXCWgBDTQABDUiXCVQiVCXjUAAQjTAAiWiXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.1,-51.1,102.30000000000001,102.30000000000001);


(lib.補間動畫13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F1A993").s().p("AlpFpQiWiVAAjUQAAjTCWiWQCWiWDTABQDUgBCVCWQCXCWgBDTQABDUiXCVQiVCXjUAAQjTAAiWiXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.1,-51.1,102.30000000000001,102.30000000000001);


(lib.補間動畫5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib._1646640393791();
	this.instance.setTransform(-854.5,-462.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-854.5,-462.5,1709,925);


// stage content:
(lib.RECOVER_未命名2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {VR:149};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [149];
	// timeline functions:
	this.frame_149 = function() {
		this.stop();
		this.VR.addEventListener("click",function(e){
			window.location.href='https://dalinpo.github.io/dalinpo/360/index.html';
		})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(149).call(this.frame_149).wait(1));

	// 文字
	this.instance = new lib.補間動畫18("synched",0);
	this.instance.setTransform(854.5,462.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(133).to({_off:false},0).to({alpha:1},16).wait(1));

	// 圖層_5
	this.instance_1 = new lib.補間動畫13("synched",0);
	this.instance_1.setTransform(879.1,437.25);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.補間動畫14("synched",0);
	this.instance_2.setTransform(854.2,462.8,2.8865,2.8865,0,0,0,-0.1,0.1);
	this.instance_2._off = true;

	this.VR = new lib.補間動畫14("synched",0);
	this.VR.name = "VR";
	this.VR.setTransform(854.2,462.8,2.8865,2.8865,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},110).to({state:[{t:this.instance_2}]},29).to({state:[{t:this.VR}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110).to({_off:false},0).to({_off:true,regX:-0.1,regY:0.1,scaleX:2.8865,scaleY:2.8865,x:854.2,y:462.8,alpha:1},29).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110).to({_off:false},29).to({_off:true},10).wait(1));

	// 圖層_2
	this.instance_3 = new lib.補間動畫5("synched",0);
	this.instance_3.setTransform(281.3,149.1,1.6723,1.6802,0,0,0,0.8,0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.7284,scaleY:1.6932,x:1478.3,y:143.15},19,cjs.Ease.get(1)).to({regX:0.9,regY:0.8,scaleX:1.712,scaleY:1.8099,x:1439.65,y:769.6},24,cjs.Ease.get(1)).to({regY:0.7,scaleX:1.6769,scaleY:1.7453,x:353.6,y:732.65},21,cjs.Ease.get(1)).to({regX:0.8,regY:0.8,scaleX:1.5394,scaleY:1.6358,x:394.8,y:169.75},26,cjs.Ease.get(1)).to({regX:1,regY:1,scaleX:1.8131,scaleY:2.0562,x:856.3,y:464.55},20,cjs.Ease.get(1)).to({regY:0.9,scaleX:1.0026,scaleY:1.0544,x:857.7,y:458.3},23,cjs.Ease.get(1)).to({startPosition:0},16,cjs.Ease.get(-1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-294.5,-178.6,3248.3,1783.8999999999999);
// library properties:
lib.properties = {
	id: '7F9770BEF79914449A4F95AA28584708',
	width: 1709,
	height: 925,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/RECOVER_未命名_2_atlas_1.png?1649664644782", id:"RECOVER_未命名_2_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7F9770BEF79914449A4F95AA28584708'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;