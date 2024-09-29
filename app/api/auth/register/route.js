import connectDB from "../../../../config/db";
import User from "../../../../models/User";
import bcrypt from "bcrypt";

export const POST = async (req, res) => {
	const { username, password } = await req.json();

	await connectDB();

	const hashedPassword = await bcrypt.hash(password, 10);
	const user = new User({ username, password: hashedPassword });

	await user.save();
	return new Response("User created", { status: 201 });
};
