const ApplyModel = require('./apply.model');


// Route (il definissent le path);
// Controller (Lien entre les Routes et la Logic)
// Service (Logic Pure)
// model (Shcema de donnée)

/**
 * Define Logic and function for apply
 */

/**
 * Add an Apply to db
 * @param apply An Apply object
 * @return {Promise<Document>}
 */
const add = async (apply) => {
    try {
        // Logic
        validateApply(apply);
        isCityAccepted(apply);

        const applyRecord = await ApplyModel.create(apply);
        return applyRecord;
    }
    catch (e){
        throw new Error('Unable to create an apply');
    }
}


/**
 * Update an Apply to db
 * @param apply An Apply object
 * @return {Promise<Document>}
 */
const update = async (apply) => {
    try {

        const newApply = await ApplyModel.findOneAndUpdate({_id: apply._id}, apply, {new: true}); // After updating return the new updated value
        return newApply;
    }
    catch (e){
        throw new Error('Unable to update an apply.');
    }
}

/**
 * Delete an apply by Id
 * @param apply An Apply object
 * @return {Promise<Document>}
 */
const deleteById = async (id) => {
    try {

        await ApplyModel.findOneAndDelete({_id: id});
        return true;
    }
    catch (e){
        throw new Error('Unable to delete an apply.');
    }
}


const getById =  async (id) => {
    try {
        const applyRecord = await ApplyModel.findOne({_id: id});
        return applyRecord;
    }
    catch (e){
        throw new Error('Unable to get an apply.');
    }
}


const getAll = async (query = {}) => {
    try {
        const applies = await ApplyModel.find(query); // The {} is reprensenting all (without filter)
        return applies;
    }
    catch (e){
        throw new Error('Unable to get an apply.');
    }
}

const validateApply = (apply) => {
    const {title, content} = apply; //Desctructure (extract) field from an object
    if(!title || title.length < 5 ) {
        throw new Error('Title is required and must be > than 5');
    }

    return true;
}

const isCityAccepted = (apply) => {
    return apply.city === 'jerusalem' || apply.city === 'apooe-ville';
}


module.exports = {
    add,
    update,
    deleteById,
    getById,
    getAll
}
