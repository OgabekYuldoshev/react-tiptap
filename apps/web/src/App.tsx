import { useEditor } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { ReactNoteEditor } from "react-note";

const App = () => {
	const editor = useEditor({
		extensions: [StarterKit],
	});

	return (
		<div className="mx-auto w-full max-w-screen-lg my-4">
			<ReactNoteEditor editor={editor}>
				<ReactNoteEditor.Toolbar>
					<ReactNoteEditor.Bold />
					<ReactNoteEditor.Italic />
					<ReactNoteEditor.Strike />
					<ReactNoteEditor.Code />
					<ReactNoteEditor.Spacer className="my-auto" size={18} mode="y" />
				</ReactNoteEditor.Toolbar>
				<ReactNoteEditor.Content />
			</ReactNoteEditor>
		</div>
	);
};

export default App;
