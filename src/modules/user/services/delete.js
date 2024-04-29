import { deleteById } from "../db/index.js";

const deleteData = async (id) => {
    return await deleteById(id);
}

export default deleteData;