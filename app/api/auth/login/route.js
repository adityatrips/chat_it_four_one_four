import connectDB from "../../../../config/db";
import User from "../../../../models/User";
import bcrypt from "bcrypt";

export const POST = async (req, res) => {
	await connectDB();
	const { username, password } = await req.json();

	const user = await User.findOne({ username });

	if (user && (await bcrypt.compare(password, user.password))) {
		return new Response(JSON.stringify(user), { status: 200 });
	}

	return new Response("Invalid credentials", { status: 401 });
};
