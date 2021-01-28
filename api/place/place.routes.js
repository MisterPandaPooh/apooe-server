const {Router} = require('express');
const applyController = require('./place.controller');

/**
 * Init All Route for the aply module
 * @param globalRouter
 */
const initPlacesRoutes = (globalRouter) => {
    // Create a new router
    const applyRouter = new Router();

    //Define a prefix for all routes of the applyRouter
    globalRouter.use('/places', applyRouter);


    // Define routes
    applyRouter.get('/', applyController.placeAutoComplete);


}

module.exports = {initPlacesRoutes};
