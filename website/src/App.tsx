import { useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { ReactNoteEditor } from "react-tiptap";

const App = () => {
	const editor = useEditor({
		extensions: [StarterKit],
	});

	return (
		<div className="mx-auto w-full max-w-screen-lg my-4">
			<ReactNoteEditor editor={editor}>
				<ReactNoteEditor.Toolbar>
					<ReactNoteEditor.Undo />
					<ReactNoteEditor.Redo />
					<ReactNoteEditor.Spacer className="my-auto" size={18} mode="y" />
					<ReactNoteEditor.Bold />
					<ReactNoteEditor.Italic />
					<ReactNoteEditor.Strike />
					<ReactNoteEditor.Code />
					<ReactNoteEditor.Spacer className="my-auto" size={18} mode="y" />
					<ReactNoteEditor.Blockquote />
					<ReactNoteEditor.BulletList />
					<ReactNoteEditor.OrderedList />
					<ReactNoteEditor.CodeBlock />
					<ReactNoteEditor.Spacer className="my-auto" size={18} mode="y" />
					<ReactNoteEditor.H1 />
					<ReactNoteEditor.H2 />
					<ReactNoteEditor.H3 />
					<ReactNoteEditor.H4 />
					<ReactNoteEditor.H5 />
					<ReactNoteEditor.H6 />
					<ReactNoteEditor.Spacer className="my-auto" size={18} mode="y" />
					<ReactNoteEditor.HorizontalRule />
					<ReactNoteEditor.HardBreak />
				</ReactNoteEditor.Toolbar>
				<ReactNoteEditor.Content />
			</ReactNoteEditor>
		</div>
	);
};

export default App;
