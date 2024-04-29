import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Model = mongoose.model("User", dataSchema);

export default Model;