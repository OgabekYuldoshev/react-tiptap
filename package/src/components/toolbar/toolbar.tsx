import React, { PropsWithChildren } from "react";
import styles from "./toolbar.module.scss";

export type ToolbarProps = PropsWithChildren;
export const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>(
	(props, ref) => {
		return (
			<div ref={ref} className={styles.wrapper} {...props}>
				{props.children}
			</div>
		);
	},
);

Toolbar.displayName = "ReactTipTapEditor/Toolbar";
