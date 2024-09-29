"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

const Chat = () => {
	const [messages, setMessages] = useState([]);
	const [content, setContent] = useState("");
	const [username, setUsername] = useState("");
	const { isAuthenticated } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!isAuthenticated) {
			router.push("/");
		}

		const user = window.localStorage.getItem("username");
		if (user) {
			setUsername(user);
		}

		const fetchMessages = async () => {
			try {
				const response = await axios.get(`/api/messages`);
				setMessages(response.data);
			} catch (error) {
				console.error("Error fetching messages:", error);
			}
		};

		fetchMessages();
		// eslint-disable-next-line
	}, []);

	const handleSendMessage = async (e) => {
		e.preventDefault();
		if (content) {
			try {
				const messageData = { username, message: content };
				const res = await axios.post(`/api/messages`, messageData);
				setMessages((prev) => [...prev, messageData]);
				console.log(res.data);
				setContent("");
			} catch (error) {
				console.error("Error sending message:", error);
			}
		}
	};

	return (
		<div className="flex flex-col min-h-[calc(100vh-6rem)] pb-5">
			<div className="flex-1 overflow-auto">
				{messages.map((msg, index) => (
					<div
						key={index}
						className="flex flex-col md:flex-row border rounded mb-2"
					>
						<div className="py-2 px-5 bg-secondary">{msg.username}</div>
						<div className="py-2 px-5">{msg.message}</div>
					</div>
				))}
			</div>
			<div className="flex ">
				<Input
					type="text"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					className="border p-2 w-full mr-2"
					placeholder="Type a message..."
					required
				/>
				<Button onClick={handleSendMessage}>Send</Button>
			</div>
		</div>
	);
};

export default Chat;
