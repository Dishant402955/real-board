import type { Metadata } from "next";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import ConvexClientProvider from "@/providers/convex-client-provider";

import Navbar from "@/components/global/navbar";
import Sidebar from "@/components/global/sidebar";

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
			<body className={`antialiased`}>
				<ClerkProvider>
					<ConvexClientProvider>
						<div className="w-full h-full">
							<Sidebar />
							<div className="w-full h-full">
								<Navbar />
								{children}
							</div>
						</div>
					</ConvexClientProvider>
				</ClerkProvider>
			</body>
		</html>
	);
}
