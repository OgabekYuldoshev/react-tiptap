import "react-tiptap/base.css";
import { useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { ReactTipTapEditor } from "react-tiptap";

const App = () => {
	const editor = useEditor({
		extensions: [StarterKit],
	});

	return (
		<div className="mx-auto w-full max-w-screen-lg my-4">
			<ReactTipTapEditor editor={editor}>
				<ReactTipTapEditor.Toolbar>
					<ReactTipTapEditor.Undo />
					<ReactTipTapEditor.Redo />
					<ReactTipTapEditor.Divider length={18} orientation="y" />
					<ReactTipTapEditor.Bold />
					<ReactTipTapEditor.Italic />
					<ReactTipTapEditor.Strike />
					<ReactTipTapEditor.Code />
					<ReactTipTapEditor.Divider length={18} orientation="y" />
					<ReactTipTapEditor.Blockquote />
					<ReactTipTapEditor.BulletList />
					<ReactTipTapEditor.OrderedList />
					<ReactTipTapEditor.CodeBlock />
					<ReactTipTapEditor.Divider length={18} orientation="y" />
					<ReactTipTapEditor.H1 />
					<ReactTipTapEditor.H2 />
					<ReactTipTapEditor.H3 />
					<ReactTipTapEditor.H4 />
					<ReactTipTapEditor.H5 />
					<ReactTipTapEditor.H6 />
					<ReactTipTapEditor.Divider length={18} orientation="y" />
					<ReactTipTapEditor.HorizontalRule />
					<ReactTipTapEditor.HardBreak />
				</ReactTipTapEditor.Toolbar>
				<ReactTipTapEditor.Content />
			</ReactTipTapEditor>
		</div>
	);
};

export default App;
