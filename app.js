const express = require('express');
const config = require('./config');
const loadApp = require('./lib/loaders');

async function startServer() {
    // Create a new server of express.
    const app = express();

    // Loaders (Load the app at the start)
    await loadApp(app);


    // Dit au server Web(express) decouter sur un certain port
    app.listen(config.port, err => {
        // Si ya une erreur tu sort
        if (err) {
            console.error(err);
            process.exit(1);
            return;
        }
        console.log('***********************************************');
        console.log(`  SERVER RUNNING at http://localhost:${config.port}/`);
        console.log('***********************************************');
    });}



startServer();
