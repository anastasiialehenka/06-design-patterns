import BlockController from './BlockController';
import PopUpController from "./PopUpController";
import LikeController from "./LikeController";
import ListModel from "./ListModel";

export default class ListController {
    constructor() {
        this.model = new ListModel();
        this.dataList = this.model.getItemList();
        this.root = document.querySelector(".root");
        this.blockControllers = [];
        this.dataList.forEach(function(element) {
            this.blockController = new BlockController(element, this.dataList, this.root);
            this.blockController.notifyPopUpController = this.notifyPopUpController.bind(this, element);
            this.blockControllers.push(this.blockController);
        }.bind(this));
        this.popUpController = new PopUpController(this.dataList, this.blockControllers);
        this.popUpWindow = this.popUpController.view.getElement( ".item__block");
    }

     notifyPopUpController(element, funcDuplicate) {
         this.popUpController.view.showPopUp(element);
         this.popUpController.blockImageControllers = this.blockControllers;
         this.blockController = new BlockController(element, this.dataList, this.popUpWindow, funcDuplicate);
     }
}