import { addData } from "../db/index.js";

const postData = async (data) => {
    return await addData(data);
}

export default postData;