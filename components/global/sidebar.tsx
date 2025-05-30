import React from "react";
import OrgList from "./organization-list";

const Sidebar = () => {
	return (
		<div className="fixed w-[16%] h-full bg-neutral-500/30">
			<OrgList />
		</div>
	);
};

export default Sidebar;
