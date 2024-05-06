import Model from "../models/index.js";

const getAll = async () => await Model.find();

const addData = (data) =>
    new Model(data).save().then((data) => data.toObject());

const deleteById = async (id) => await Model.findByIdAndDelete(id);

const updateById = async (id, data) => await Model.findByIdAndUpdate(id, data);


export {
    getAll,
    addData,
    deleteById,
    updateById
}