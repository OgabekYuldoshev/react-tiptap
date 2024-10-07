import clsx from "clsx";
import React from "react";

import { Editor } from "@tiptap/core";
import { icons } from "lucide-react";
import { useTiptap } from "../../context";
import styles from "./action-button.module.scss";

export type ActionButtonProps =
	React.ButtonHTMLAttributes<HTMLButtonElement> & {
		active?: boolean;
	};

export const ActionButton = React.forwardRef<
	HTMLButtonElement,
	ActionButtonProps
>(({ active = false, ...props }, ref) => {
	return (
		<button
			ref={ref}
			type="button"
			className={clsx(
				styles.wrapper,
				active && styles["wrapper--active"],
				props.className,
			)}
			{...props}
		>
			{props.children}
		</button>
	);
});

export type CreateActionProps = {
	label: string;
	icon: keyof typeof icons;
	onActive?(editor: Editor): boolean;
	onClick?(editor: Editor): void;
	onDisabled?(editor: Editor): boolean;
};
export const createAction = ({
	label,
	icon,
	onActive,
	onClick,
	onDisabled,
}: CreateActionProps) => {
	const Action = React.forwardRef<
		HTMLButtonElement,
		Omit<ActionButtonProps, "onClick" | "active" | "disabled">
	>((props, ref) => {
		const { editor } = useTiptap();
		const Icon = icons[icon];
		return (
			<ActionButton
				ref={ref}
				aria-label={label}
				title={label}
				active={onActive?.(editor) || false}
				onClick={() => onClick?.(editor)}
				disabled={onDisabled?.(editor) || false}
				{...props}
			>
				<Icon size={18} />
			</ActionButton>
		);
	});
	Action.displayName = `ReactTipTapEditor/Action/${label}`;

	return Action;
};
