import BlockView from './BlockView';
import BlockModel from './BlockModel';
import LikeController from './LikeController';

export default class BlockController {
    constructor(elementData, listData, container, fn) {
        this.model = new BlockModel(elementData);
        this.view = new BlockView(this.model, container);
        this.view.bindImageClick(this.notifyListController.bind(this));
        this.likeController = new LikeController(elementData, listData, this.view.likesContainer, fn);
     }

     notifyListController(){
        this.notifyPopUpController(this.likeController.handleChange.bind(this.likeController));
     }
}