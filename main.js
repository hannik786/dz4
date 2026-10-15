class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        if (value > 0) {
            this._radius = value;
        }
    }
    get diameter() {
        return this._radius * 2;
    }
    getArea() {
        return Math.PI * this._radius * this._radius;
    }
    getLength() {
        return 2 * Math.PI * this._radius;
    }
}
let circle = new Circle(5);
console.log("Радіус:", circle.radius);
console.log("Діаметр:", circle.diameter);
console.log("Площа:", circle.getArea().toFixed(2));
console.log("Довжина:", circle.getLength().toFixed(2));
circle.radius = 10;
console.log("Новий радіус:", circle.radius);
console.log("Новий діаметр:", circle.diameter);
console.log("Нова площа:", circle.getArea().toFixed(2));

class HtmlElement {
    constructor(tagName, selfClosing = false, text = "") {
        this.tagName = tagName;
        this.selfClosing = selfClosing;
        this.text = text;
        this.attributes = [];
        this.styles = [];
        this.children = [];
    }
    setAttribute(name, value) {
        this.attributes.push({
            name: name,
            value: value
        });
    }
    setStyle(name, value) {
        this.styles.push({
            name: name,
            value: value
        });
    }
    appendChild(element) {
        this.children.push(element);
    }
    prependChild(element) {
        this.children.unshift(element);
    }
    getHtml() {
        let html = "<" + this.tagName;
        for (let attribute of this.attributes) {
            html += " " + attribute.name + '="' + attribute.value + '"';
        }
        if (this.styles.length > 0) {
            html += ' style="';
            for (let style of this.styles) {
                html += style.name + ":" + style.value + ";";
            }
            html += '"';
        }
        if (this.selfClosing) {
            return html + " />";
        }
        html += ">";
        html += this.text;
        for (let child of this.children) {
            html += child.getHtml();
        }
        html += "</" + this.tagName + ">";
        return html;
    }
}
let container = new HtmlElement("div");
container.setAttribute("class", "container");
container.setStyle("width", "500px");
container.setStyle("margin", "20px auto");
container.setStyle("padding", "20px");
container.setStyle("border", "1px solid black");
let title = new HtmlElement("h2", false, "Мій HTML-блок");
title.setStyle("color", "blue");
let paragraph = new HtmlElement(
    "p",
    false,
    "Це приклад вкладеного елемента."
);
paragraph.setStyle("font-size", "18px");
let button = new HtmlElement("button", false, "Натисни мене");
button.setAttribute("type", "button");
button.setStyle("padding", "10px");
button.setStyle("background-color", "lightblue");
container.appendChild(title);
container.appendChild(paragraph);
container.appendChild(button);
document.write(container.getHtml());
