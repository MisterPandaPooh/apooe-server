const {Router} = require('express');
const {initApplyRoutes} = require('./apply/apply.routes');

/**
 * Init all Api routes
 * @return {*}
 */
const loadAllApiRoutes = () => {
    const globalRouter = new Router();

    initApplyRoutes(globalRouter);
    // InitUserRoutes(...);

    return globalRouter;
}

module.exports = loadAllApiRoutes;
