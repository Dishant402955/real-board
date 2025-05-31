"use client";

import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { useState } from "react";

const Sidebar = () => {
	const [currentBoards, setCurrentBoards] = useState<
		"personal" | "team" | "all"
	>("all");
	return (
		<div className="bg-neutral-700/30 w-[16%] h-full fixed py-10 flex flex-col items-center gap-y-4">
			<div>
				<h1 className="text-2xl font-semibold mb-10">Real Board</h1>
			</div>
			<div className="w-[80%] flex flex-col space-y-4 mb-10">
				<Button
					className={`w-full bg-neutral-700 ${currentBoards === "all" ? "" : "opacity-60"} `}
					onClick={() => setCurrentBoards("all")}
				>
					All Boards
				</Button>
				<Button
					className={`w-full bg-neutral-700 ${currentBoards === "personal" ? "" : "opacity-60"} `}
					onClick={() => setCurrentBoards("personal")}
				>
					Personal Boards
				</Button>
				<Button
					className={`w-full bg-neutral-700 ${currentBoards === "team" ? "" : "opacity-60"} `}
					onClick={() => setCurrentBoards("team")}
				>
					Team Boards
				</Button>
			</div>
			<div className="w-[80%] rounded-lg flex justify-center items-center px-4 py-2 bg-neutral-500">
				<OrganizationSwitcher
					hidePersonal
					appearance={{
						elements: {
							rootBox: "bg-neutral-200 rounded-lg",
						},
					}}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
