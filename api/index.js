const {Router} = require('express');
const {initApplyRoutes} = require('./apply/apply.routes');
const {initPlacesRoutes} = require('./place/place.routes');
/**
 * Init all Api routes
 * @return {*}
 */
const loadAllApiRoutes = () => {
    const globalRouter = new Router();

    initApplyRoutes(globalRouter);
    initPlacesRoutes(globalRouter);
    // InitUserRoutes(...);

    return globalRouter;
}

module.exports = loadAllApiRoutes;
