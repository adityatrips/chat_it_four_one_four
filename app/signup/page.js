"use client";

import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const Signup = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { signup } = useAuth();

	return (
		<div className="flex flex-col min-h-[calc(100vh-6rem)] justify-center max-w-96 mx-auto">
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl text-center">
						Not a user? Get on-board 🚀
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-col gap-2">
					<Input
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
					<Input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</CardContent>
				<CardFooter className="border-t pt-6">
					<Button
						className="w-full"
						onClick={() => signup(username, password)}
					>
						Signup
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Signup;
