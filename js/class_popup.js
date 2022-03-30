class creEle {
    constructor(tag = "div") {
        this.el = document.createElement(tag);
    }
    setText(context = '') {
        const textNode = document.createTextNode(context);
        if (context === "") {
            this.el.innerText = "";
            return;
        }
        this.el.append(textNode);
    }
    setHTML(conHTML = '') {
        const HTMLNode = document.createTextNode(conHTML);
        if (conHTML === "") {
            this.el.innerHTML = "";
            return;
        }
        this.el.append(HTMLNode);
        this.el.innerHTML = conHTML;
    }
    setAttribute(attribute = {}) {
        if (typeof attribute !== "object") return;
        for (let attr in attribute) {
            if (attr === 'style') {
                this.el.style.cssText += attribute[attr];
            } else {
                this.el.setAttribute(attr, attribute[attr]);
            }
        }
    }
}

class Food_Popup {
    constructor() {
        this.sw = new creEle("div");
        this.sw.setAttribute({ class: "food_bg" });
        this.food_mid = new creEle("div");
        this.food_mid.setAttribute({ class: "food_mid" });
        this.sw.el.appendChild(this.food_mid.el);
        this.food_content = new creEle("div");
        this.food_content.setAttribute({ class: "food_content" });
        this.food_mid.el.appendChild(this.food_content.el)
        this.close = new creEle("div");
        this.close.setAttribute({ class: "popup-close" });
        this.close.setText("x")
        this.food_mid.el.appendChild(this.close.el);
        this.h4 = new creEle("h4");
        this.food_content.el.appendChild(this.h4.el);
        this.hr = new creEle("hr");
        this.food_content.el.appendChild(this.hr.el);
        this.pcontent = new creEle("p");
        this.pcontent.setAttribute({ class: "food-detail" });
        this.food_content.el.appendChild(this.pcontent.el);
        this.food_img = new creEle("img");
        this.food_img.setAttribute({ src: "", class: "food_img" });
        this.food_mid.el.appendChild(this.food_img.el);

        document.getElementById('food_id').appendChild(this.sw.el);
    }

    open(text, foodimg, pcontetn) {
        this.sw.el.classList.add("food_open");
        this.h4.setText(text);
        this.pcontent.setHTML(pcontetn);
        this.food_img.setAttribute({ src: foodimg })

        return new Promise((resolve, reject) => {
            this.close.el.addEventListener("click", () => {
                this.remove();
                resolve();
            })
        });

    }
    remove() {
        this.sw.el.classList.remove("food_open");
        this.h4.setText("");
        this.pcontent.setHTML("");
        this.food_img.setAttribute({ src: "" })
    }
}

class Trivia {
    constructor() {
        this.trivia = new creEle("div");
        this.trivia.setAttribute({ class: "food_bg" });
        this.trivia_mid = new creEle("div");
        this.trivia_mid.setAttribute({ class: "trivia_mid" });
        this.trivia.el.appendChild(this.trivia_mid.el);
        this.trivia_title = new creEle("h4");
        this.trivia_title.setAttribute({ class: "trivia_h4" });
        this.trivia_mid.el.appendChild(this.trivia_title.el);
        this.triviaclose = new creEle("div");
        this.triviaclose.setAttribute({ class: "popup-close triviaclose" });
        this.triviaclose.setText("x");
        this.triviaif = new creEle("div");
        this.triviaif.setAttribute({ class: "triviaif" });
        this.trivia_mid.el.appendChild(this.triviaif.el);
        this.trivia_mid.el.appendChild(this.triviaclose.el);
        this.iframe = new creEle("iframe");
        this.iframe.setAttribute({ src: "",title: "YouTube video player" ,width: "560",height: "315" ,frameborder: "0"  ,allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"});
        this.trivia_mid.el.appendChild(this.iframe.el);

        document.getElementById('trivia').appendChild(this.trivia.el);
    }

    trivia_open(h4text, triviacontetn) {
        this.trivia.el.classList.add("food_open");
        this.trivia_title.setText(h4text);
        this.iframe.setAttribute({ src: triviacontetn })
        return new Promise((resolve, reject) => {
            this.triviaclose.el.addEventListener("click", () => {
                this.trivia_remove();
                resolve();
            })
        });
    }
    trivia_remove() {
        this.trivia.el.classList.remove("food_open");
        this.trivia_title.setText("");
        this.iframe.setAttribute({ src: "" })
    }
}
