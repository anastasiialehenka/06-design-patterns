import PopUpView from './PopUpView';
import LikeController from "./LikeController";
import BlockController from "./BlockController";

export default class PopUpController {
    constructor(model, blockControllers) {
        this.model = model;
        this.blockControllers = blockControllers;
        this.view = new PopUpView(this.model);
        this.view.bindClose(this.handleClose.bind(this));
        this.view.bindPrev(this.handlePrev.bind(this));
        this.view.bindNext(this.handleNext.bind(this));
    }

    handleClose() {
        this.view.closePopUp();
    }

    handlePrev() {
        const result = this.view.showPrev();
        if (result) {
            const currentImageBlock = this.blockControllers[this.view.item.id];
            const fn = currentImageBlock.likeController.handleChange.bind(currentImageBlock.likeController);
            this.blockController = new BlockController(this.view.item, this.model, this.view.itemBlock, fn);
        }
    }

    handleNext() {
        const result = this.view.showNext();
        if (result) {
            const currentImageBlock = this.blockControllers[this.view.item.id];
            const fn = currentImageBlock.likeController.handleChange.bind(currentImageBlock.likeController);
            this.blockController = new BlockController(this.view.item, this.model, this.view.itemBlock, fn);
        }
    }
}