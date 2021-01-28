const dotenv = require('dotenv');

// Load .env file in variable process.env[myVar]
const evFound = dotenv.config();
if (!evFound) {
    throw new Error("Couldn't find .env file");
}

// Define ENV variable in a convenient way;
const config = {
    port: Number(process.env.PORT) || 8080,
    databaseURL: process.env.DATABASE_URL,
    api: {
        prefix: '/api'
    },

    google: {
        placeApiKey: process.env.GOOGLE_API_KEY,
    }
}


// Export variable as default
module.exports = config;
