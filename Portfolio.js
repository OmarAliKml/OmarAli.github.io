import PortfolioModel from "./PortfolioModel.js";
import PortfolioController from "./PortfolioController.js";
import PortfolioView from "./PortfolioView.js";

document.addEventListener('DOMContentLoaded', function () {
    const model = new PortfolioModel();
    const view = new PortfolioView();
    const controller = new PortfolioController(model, view);
    controller.setup();
});
