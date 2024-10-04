import type { Editor } from "@tiptap/react";
import { Bold } from "lucide-react";
import type React from "react";
import type { PropsWithChildren } from "react";
import Content from "./components/Content";
import Toolbar from "./components/Toolbar";
import { ReactNoteContext } from "./context";
import { BoldA } from "./lib/actions";
import { cn } from "./lib/utils";

export type ReactNoteEditorProps = PropsWithChildren<{
  editor: Editor | null;
  className?: string;
}>;

interface ReactNoteEditorFactory extends React.FC<ReactNoteEditorProps> {
  Content: typeof Content;
  Toolbar: typeof Toolbar;
}

const ReactNoteEditor: ReactNoteEditorFactory = ({
  editor,
  children,
  className,
}) => {
  if (!editor) {
    return null;
  }

  return (
    <ReactNoteContext.Provider value={{ editor }}>
      <div
        className={cn("react-note rn-w-full rn-border rn-rounded", className)}
      >
        <BoldA />
        {children}
      </div>
    </ReactNoteContext.Provider>
  );
};

ReactNoteEditor.displayName = "ReactNoteEditor";
ReactNoteEditor.Content = Content;
ReactNoteEditor.Toolbar = Toolbar;

export default ReactNoteEditor;
