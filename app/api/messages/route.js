import Message from "../../../models/Message";
import connectDB from "../../../config/db";

export const GET = async (req, res) => {
	await connectDB();
	const messages = await Message.find();
	return new Response(JSON.stringify(messages), { status: 200 });
};

export const POST = async (req, res) => {
	const { username, message } = await req.json();

	const newMessage = new Message({ username, message });
	await newMessage.save();

	return new Response("Message created", { status: 201 });
};
