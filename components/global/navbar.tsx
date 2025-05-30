"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import { Button } from "../ui/button";

const Navbar = () => {
	return (
		<div className="w-[82%] fixed top-4 left-[17%] bg-neutral-700/30 py-2 px-6 flex justify-between items-center rounded-lg">
			<div className="flex-1">Search</div>
			<div>
				<Authenticated>
					<UserButton />
				</Authenticated>
				<Unauthenticated>
					<SignInButton mode="modal">
						<Button>Sign in</Button>
					</SignInButton>
				</Unauthenticated>
			</div>
		</div>
	);
};

export default Navbar;
