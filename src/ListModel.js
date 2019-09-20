const faker = require('faker');

export default class ListModel {
    constructor() {
        this.itemsNumber = Math.floor(Math.random() * Math.floor(7) + 3);
        this.itemsDataList = [];
        for (let i = 0; i < this.itemsNumber; i++) {
            const item = new BlockData(i);
            this.itemsDataList.push(item);
        }
        this.itemsDataList.sort(this.sortByLikes);
        this.itemsDataList.forEach((elem, i) => {
            elem.id = i;
        });
    }

    getItemList () {
        return this.itemsDataList;
    }

    sortByLikes(item1, item2) {
        return item1.likeAmount - item2.likeAmount;
    }
}

class BlockData {
    constructor(id) {
        this.id = id;
        this.likeAmount = Math.floor(Math.random() * Math.floor(101));
        this.imageURL = faker.image.avatar();
        this.liked = false;
    }
};