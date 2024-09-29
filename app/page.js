"use client";

import { useState } from "react";
import {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardContent,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useAuth } from "../context/AuthContext";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { login } = useAuth();

	return (
		<div className="flex flex-col min-h-[calc(100vh-6rem)] justify-center max-w-96 mx-auto">
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl text-center">
						Already a user? Welcome back! 👉🏻👈🏻
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
						onClick={() => login(username, password)}
					>
						Login
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
};

export default Login;
