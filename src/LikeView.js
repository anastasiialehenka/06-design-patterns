export default class LikeView {
    constructor(model, container) {
        this.model = model;
        this.container = container;
        this.renderLike();
    }

    renderLike() {
        this.paragraph = this.container;
        while (this.paragraph.children.length) {
            this.paragraph.removeChild(this.paragraph.lastChild);
        }
        this.likeButton = this.createElement("button", "item__button");
        this.likeSpan = this.createElement("span", "fa-thumbs-up", "far", "item__icon");
        this.numberSpan = this.createElement("span", "item__likes");
        this.updateLike();
        this.likeButton.appendChild(this.likeSpan);
        this.paragraph.appendChild(this.likeButton);
        this.paragraph.appendChild(this.numberSpan);
    }


    createElement(tag, ...className) {
        const element = document.createElement(tag);

        className.forEach(function (value) {
            element.classList.add(value);
        });

        return element;
    }

    bindChange (handler) {
        this.likeSpan.addEventListener('click', handler);
    }

    updateLike() {
        this.numberSpan.textContent = "(" + this.model.likeAmount +" likes)";
        if (this.model.liked) {
             this.likeSpan.classList.add("liked");
         }
         else {
            this.likeSpan.classList.remove("liked");
         }
    }

}