import React from "react";
import { cn } from "../lib/utils";

export interface SpacerProps {
	mode?: "x" | "y";
	size: number;
	className?: string;
}
const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>((props, ref) => {
	return (
		<div
			ref={ref}
			style={
				{
					"--size": `${props.size}px`,
				} as any
			}
			className={cn(
				"rn-flex-shrink-0 rn-bg-border",
				props.mode === "x"
					? "rn-h-[1px] rn-w-[var(--size)]"
					: "rn-h-[var(--size)] rn-w-[1px]",
				props.className,
			)}
		/>
	);
});

Spacer.displayName = "ReactNoteSpacer";

export default Spacer;
