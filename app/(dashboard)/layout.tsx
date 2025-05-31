import type { Metadata } from "next";
import "../globals.css";

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
		<>
			<main className="w-full h-full">
				<div className="w-full h-full">
					<Sidebar />
					<div className="w-[full] h-full">
						<Navbar />
						{children}
					</div>
				</div>
			</main>
		</>
	);
}
