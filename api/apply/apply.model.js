const mongoose = require('mongoose');

/**
 * Define the Database model
 *
 * _id field is auto added
 *
 */
const applySchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String},
    city: {type: String, required: true}
})


module.exports = mongoose.model('Apply', applySchema);
