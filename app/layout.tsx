import { Suspense } from 'react';
import type { Metadata } from "next";
import { Space_Mono } from 'next/font/google';

import { NavigationEvents } from '@/hooks/NavigationEvents';
import Nav from "@/components/core/Nav";

import 'material-symbols';
import "@/styles/index.css";
import "@/styles/nprogress.css";

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
				<Suspense fallback={null}>
					<NavigationEvents />
				</Suspense>
				
				<div className="context relative">
					<Nav />
					{children}
				</div>
			</body>
		</html>
	);
}
