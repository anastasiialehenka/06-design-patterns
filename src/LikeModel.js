//import Observer from './Observer';

export default class LikeModel {
    constructor(elementData) {
        this.likeAmount = elementData.likeAmount;
        this.liked = elementData.liked;
    }

    addLike() {
        this.liked = true;
    }

    removeLike() {
        this.liked = false;
    }

    increaseAmount()  {
        this.likeAmount++;
    }

    decreaseAmount() {
        this.likeAmount--;
    }
}
  