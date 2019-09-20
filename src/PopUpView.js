export default class PopUpView {
    constructor(model) {
        this.model = model;
        this.renderPopUp();
    }

    renderPopUp() {
        this.popUpWindow = this.getElement( ".popup-window");
        while (this.popUpWindow.children.length) {
            this.popUpWindow.removeChild(this.popUpWindow.lastChild);
        }
        this.closeButton = this.createElement("button", "close-button", "button");
        this.span = this.createElement("span", "close-button__span", "fas", "fa-times");
        this.closeButton.appendChild(this.span);
        this.itemBlock = this.createElement("div", "item__block");
        this.buttonBlock = this.createElement("div", "button-block");
        this.prevButton = this.createElement("button", "button", "button--prev");
        this.prevButton.textContent = "Prev";
        this.nextButton = this.createElement("button", "button", "button--next");
        this.nextButton.textContent = "Next";
        this.popUpWindow.appendChild(this.itemBlock);
        this.buttonBlock.appendChild(this.prevButton);
        this.buttonBlock.appendChild(this.nextButton);
        this.popUpWindow.appendChild(this.closeButton);
        this.popUpWindow.appendChild(this.buttonBlock);
    }

    closePopUp() {
        this.popUpWindow.classList.add("hidden");
    }

    showPopUp(item) {
        this.popUpWindow.classList.remove("hidden");
        this.item = item;
    }

    showNext() {
        const next = this.model.indexOf(this.item) + 1;
        const nextItem = this.model[next];
        if (nextItem) {
            this.item = nextItem;
            return 1;
        }
    }

    showPrev() {
        const prev = this.model.indexOf(this.item) - 1;
        const prevItem = this.model[prev];
        if (prevItem) {
            this.item = prevItem;
            return 1;
        }
    }

    bindClose (handler) {
        this.closeButton.addEventListener('click', handler);
    }

    bindNext (handler) {
        this.nextButton.addEventListener('click', handler);
    }

    bindPrev (handler) {
        this.prevButton.addEventListener('click', handler);
    }

    createElement(tag, ...className) {
        const element = document.createElement(tag);

        className.forEach(function (value) {
            element.classList.add(value);
        });

        return element;
    }

    getElement(selector) {
        return document.querySelector(selector);
    }
}