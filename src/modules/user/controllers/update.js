import { INTERNAL_SERVER_ERROR_MESSAGE, UPDATE_DATA_MESSAGE } from "../constants/index.js";
import updateData from "../services/update.js";

const updateController = async (req, res) => {
    try {
        const { id } = req.params;
        await updateData(id, req.body)
        res.status(200).send({ status: 200, message: UPDATE_DATA_MESSAGE });
    } catch (err) {
        res.status(500).send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
    }
}

export default updateController;