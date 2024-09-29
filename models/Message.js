import mongoose, { Schema, model, models } from "mongoose";

const MessageSchema = new Schema({
	username: { type: String, required: true },
	message: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

export default models.Message || model("Message", MessageSchema);
