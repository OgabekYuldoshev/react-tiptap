import { EditorContent, EditorContentProps } from "@tiptap/react";
import React from "react";
import { useTiptap } from "../../context";

export type ContentProps = Omit<EditorContentProps, "editor">;

export const Content = React.forwardRef<HTMLDivElement, ContentProps>(
	(props, ref) => {
		const { editor } = useTiptap();
		return (
			<div ref={ref}>
				<EditorContent editor={editor} {...props} />
			</div>
		);
	},
);
