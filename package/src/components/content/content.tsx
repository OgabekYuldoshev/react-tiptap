import { EditorContent, EditorContentProps } from "@tiptap/react";
import clsx from "clsx";
import React from "react";
import { useTiptap } from "../../context";
import styles from "./content.module.scss";
export type ContentProps = Omit<EditorContentProps, "editor">;

export const Content = React.forwardRef<HTMLDivElement, ContentProps>(
	(props, ref) => {
		const { editor } = useTiptap();
		return (
			<div ref={ref} className={styles.wrapper}>
				<EditorContent
					className={clsx(styles.wrapperContent, props.className)}
					editor={editor}
					{...props}
				/>
			</div>
		);
	},
);
