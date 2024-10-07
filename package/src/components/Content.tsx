import { EditorContent } from "@tiptap/react";
import * as React from "react";
import { useTiptap } from "../context";

const Content = () => {
	const { editor } = useTiptap();
	return (
		<div className="rn-px-4 rn-py-2">
			<EditorContent editor={editor} />
		</div>
	);
};

export default Content;
