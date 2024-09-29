"use client";

import { createContext, useContext, useState } from "react";
import axios from "axios";
import { PropTypes } from "prop-types";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const router = useRouter();

	const login = async (username, password) => {
		try {
			const response = await axios.post(`/api/auth/login`, {
				username,
				password,
			});
			setIsAuthenticated(true);
			window.localStorage.setItem("username", response.data.username);
			if (response.status === 200) {
				router.push("/chat");
			}
		} catch (error) {
			console.error("Login failed:", error);
		}
	};

	const signup = async (username, password) => {
		try {
			await axios.post(`/api/auth/register`, {
				username,
				password,
			});
			await login(username, password);
		} catch (error) {
			console.error("Signup failed:", error);
		}
	};

	const logout = () => {
		setIsAuthenticated(false);

		router.push("/");
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
