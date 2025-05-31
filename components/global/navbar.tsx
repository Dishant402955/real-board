"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { Button } from "../ui/button";

const Navbar = () => {
	return (
		<div className="w-[82%] fixed top-4 left-[17%] bg-neutral-700/30 py-2 px-6 flex justify-between items-center rounded-lg">
			<div className="flex-1">Search</div>
			<div>
				<Authenticated>
					<div className="h-10 w-10 flex justify-center items-center">
						<UserButton />
					</div>
				</Authenticated>
				<Unauthenticated>
					<div className="h-10 w-10 flex justify-center items-center">
						<SignInButton mode="modal">
							<Button>Sign in</Button>
						</SignInButton>
					</div>
				</Unauthenticated>
				<AuthLoading>
					<div className="h-10 w-10 flex justify-center items-center">
						<div className="h-7 w-7 rounded-full bg-neutral-600 animate-spin border-b-2 border-t-2"></div>
					</div>
				</AuthLoading>
			</div>
		</div>
	);
};

export default Navbar;
