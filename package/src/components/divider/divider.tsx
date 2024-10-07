import React, { CSSProperties } from "react";

export type DividerProps = {
	orientation?: "x" | "y";
	length: number;
	className?: string;
};
export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
	(props, ref) => {
		let style: CSSProperties = {
			flexShrink: 0,
			backgroundColor: "var(--rt-border)",
		};

		if (props.orientation === "x") {
			style = { ...style, height: "1px", width: `${props.length}px` };
		} else {
			style = { ...style, width: "1px", height: `${props.length}px` };
		}

		return <div ref={ref} style={style} {...props} />;
	},
);

Divider.displayName = "ReactTipTapEditor/Divider";
