import "./globals.css";
import { AuthProvider } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export const metadata = {
	title: "IT414 - Web Vulnerabilities",
	description:
		"This webapp was created for IT414 to check for web vulnerabilities.",
	author: "Aditya Tripathi",
	lang: "en-IN",
	keywords: ["IT414", "Web", "Vulnerabilities", "Amity University"],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`dark antialiased`}>
				<AuthProvider>
					<Navbar />
					<main className="container mx-auto px-5">{children}</main>
				</AuthProvider>
			</body>
		</html>
	);
}
