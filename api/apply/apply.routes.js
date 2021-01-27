const {Router} = require('express');
const applyController = require('./apply.controller');

/**
 * Init All Route for the aply module
 * @param globalRouter
 */
const initApplyRoutes = (globalRouter) => {
    // Create a new router
    const applyRouter = new Router();

    //Define a prefix for all routes of the applyRouter
    globalRouter.use('/applies', applyRouter);


    // Define routes
    applyRouter.post('/', applyController.add);
    applyRouter.put('/', applyController.update);
    applyRouter.delete('/:id', applyController.deleteById);
    applyRouter.get('/:id', applyController.getById);
    applyRouter.get('/', applyController.getAll);


}

module.exports = {initApplyRoutes};
