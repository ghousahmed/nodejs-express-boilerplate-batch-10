import mongoose, { Schema } from "mongoose";

const dataSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: false,
        enum: ['active', 'inactive'],
        default: "active"
    },
});

const Model = mongoose.model("Category", dataSchema);

export default Model;