import * as React from "react";
import { PropsWithChildren } from "react";

interface ToolbarProps extends PropsWithChildren {}

const Toolbar: React.FC<ToolbarProps> = ({ children }) => {
	return (
		<div className="rn-w-full rn-flex rn-border-b rn-px-4 rn-py-2 rn-flex-wrap rn-gap-1">
			{children}
		</div>
	);
};

Toolbar.displayName = "ReactNoteToolbar";

export default Toolbar;
