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
        <ReactNoteEditor.Toolbar>Salom</ReactNoteEditor.Toolbar>
        <ReactNoteEditor.Content />
      </ReactNoteEditor>
    </div>
  );
};

export default App;
