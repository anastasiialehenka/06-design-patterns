
export default class BlockView {
    constructor(model, container) {
         this.model = model;
         this.container = container;
         this.renderImageBlock();
    }

    renderImageBlock () {
        if (!this.container.classList.contains("root")) {
            while (this.container.children.length) {
                this.container.removeChild(this.container.lastChild);
            }
        }
        this.item = this.createElement("div", "item__container");
        this.image = this.createElement("img", "item__image");
        this.image.src = this.model.imageURL;
        this.likesContainer = this.createElement("div", "item__label");
        this.item.appendChild(this.image);
        this.item.appendChild(this.likesContainer);
        this.container.appendChild(this.item);
    }

    bindImageClick(handler) {
        this.image.addEventListener('click', handler);
    }

    createElement(tag, ...className) {
        const element = document.createElement(tag);

        className.forEach(function (value) {
            element.classList.add(value);
        });

        return element;
    }
}