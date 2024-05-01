import { INTERNAL_SERVER_ERROR_MESSAGE } from '../../../constants/index.js';
import postData from '../services/post.js';

const postController = async (req, res) => {
    try {
        console.log("req.body", req.body);
        const data = await postData(req.body);
        res.status(200).send({ status: 200, data });
    } catch (err) {
        console.log("err", err);
        res.status(500).send({ status: 500, message: INTERNAL_SERVER_ERROR_MESSAGE });
    }
}

export default postController;