import LikeView from './LikeView';
import LikeModel from './LikeModel';

export default class LikeController {
    constructor(elementData, listData, container, fn) {
        this.fn = fn;
        this.listData = listData;
        this.elementData = elementData;
        this.model = new LikeModel(elementData);
        this.view = new LikeView(this.model, container);
        this.view.bindChange(this.handleChange.bind(this));
    }

    handleChange() {
        if(this.fn) {
            this.fn();
        }
        if (this.model.liked) {
            this.model.removeLike();
            this.model.decreaseAmount();
        } else {
            this.model.addLike();
            this.model.increaseAmount();
        }
        this.listData[this.elementData.id].likeAmount = this.model.likeAmount;
        this.listData[this.elementData.id].liked = this.model.liked;
        this.view.updateLike();
    }
}