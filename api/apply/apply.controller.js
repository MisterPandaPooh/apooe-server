const applyService = require('./apply.service');

/**
 * A Controller is not containg logic and just send parameter to the service
 * And Send Response
 */



const add = async (req,res,next) => {
    try {
        const apply = req.body;
        const result = await applyService.add(apply);
        return res.status(201).json(result);
    }catch (e) {
        next(e);
    }
}


const update = async (req,res,next) => {
    try {
        const apply = req.body;
        const result = await applyService.update(apply);
        return res.status(200).json(result)
    }catch (e) {
        next(e);
    }
}

const deleteById = async (req,res,next) => {
    try {
        const {id} = req.params;
        await applyService.deleteById(id);
        return res.sendStatus(200); // Convert 200 to ok && set status to 200
    }catch (e) {
        next(e);
    }
}

const getById = async (req,res,next) => {
    try {
        const {id} = req.params;
        const result = await applyService.getById(id);
        return res.status(200).json(result);
    }catch (e) {
        next(e);
    }
}


const getAll = async (req,res,next) => {
    try {
        const {q} = req.query;
        const query = q || {};
        const results = await applyService.getAll(query);
        return res.json(results).status(200);
    }catch (e) {
        next(e);
    }
}

module.exports = {
    add,
    update,
    deleteById,
    getById,
    getAll
}
