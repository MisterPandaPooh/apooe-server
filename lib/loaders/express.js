const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const config = require('../../config');
const loadApiRoutes = require('../../api');
/**
 * Load Express At the beginning of the start
 * @param app ExpressAppInstance
 */
function loadExpress(app) {
    // Middleware for accepting request from everywere
    app.use(cors());

    // Securise my Api with a magic line
    app.use(helmet());

    // Permet de lire la partie body d'une requette http en json
    app.use(bodyParser.json());

    // Permet de lire les variable envoyer directment depuis un formulaire
    app.use(bodyParser.urlencoded({ extended: true }));

    // Definition des routes avec un Prefix
    app.use(config.api.prefix, loadApiRoutes());


    // Intercept les requete 404 NOT FOUND
    // Cad (quand le mec met un route erronee)
    app.use((req, res, next) => {
        const { originalUrl } = req;
        const err = {
            message: `Not Found ${originalUrl}`,
            status: 404,
        };
        next(err);
    });

    // Gloabl error handler
    app.use((err, req, res, next) => {
        // Format the Error response.
        res.status(err.status || 500);
        res.json({
            error: {
                status: err.status,
                message: err.message,
            },
        });
    });
}

module.exports = loadExpress;
