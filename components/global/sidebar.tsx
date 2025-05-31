import { OrganizationList, OrganizationSwitcher } from "@clerk/nextjs";
import React from "react";

const Sidebar = () => {
	return (
		<div className="bg-neutral-700/30 w-[16%] h-full fixed py-10">
			<OrganizationSwitcher hidePersonal />
		</div>
	);
};

export default Sidebar;
