import type { Metadata } from "next";
import { Space_Mono } from 'next/font/google';

import Nav from "@/components/core/Nav";
import "@/styles/index.css";

const spaceMono = Space_Mono({
	weight: "400",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Cinedise Studio",
	description: "A creative studio based on Mumbai, India.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={spaceMono.className}>
				{/* nav */}
				<Nav />

				{/* content */}
				<div className="context">
					{children}
				</div>
			</body>
		</html>
	);
}
