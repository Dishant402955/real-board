import type { Metadata } from "next";
import "./globals.css";

import ConvexClientProvider from "@/providers/convex-client-provider";

import Navbar from "@/components/global/navbar";
import Sidebar from "@/components/global/sidebar";
import { AuthLoading } from "convex/react";

export const metadata: Metadata = {
	title: "Real Board",
	description: "The Only white board you need for your Brainstorming!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`antialiased w-full h-full`}>
				<ConvexClientProvider>{children}</ConvexClientProvider>
			</body>
		</html>
	);
}
