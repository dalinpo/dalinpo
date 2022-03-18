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
        this.food_content.el.appendChild(this.pcontent.el);
        this.food_img = new creEle("img");
        this.food_img.setAttribute({ src: "", class: "food_img" });
        this.food_mid.el.appendChild(this.food_img.el);

        document.getElementById('food_id').appendChild(this.sw.el);
    }

    open(text, foodimg, pcontetn) {
        this.sw.el.classList.add("food_open");
        this.h4.setText(text);
        this.pcontent.setText(pcontetn)
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
        this.pcontent.setText("");
        this.food_img.setAttribute({ src: "" })
    }
}
