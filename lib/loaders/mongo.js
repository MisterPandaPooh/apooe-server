const mongoose = require('mongoose');
const config = require('../../config');

/**
 * Load MongoDb At the beginning of the start
 */
async function loadMongo() {
    // Connect to the db
    const c = await mongoose.connect(config.databaseURL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    });

    // Au cas ou mais magic
    return c.connection.db;
}


module.exports = loadMongo;
