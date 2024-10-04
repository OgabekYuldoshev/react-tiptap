import { EditorContent } from "@tiptap/react";
import { useNote } from "../context";

const Content = () => {
  const { editor } = useNote();
  return (
    <div className="rn-px-4 rn-py-2">
      <EditorContent editor={editor} />
    </div>
  );
};

export default Content;
