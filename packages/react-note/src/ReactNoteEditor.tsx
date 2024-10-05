import type { Editor } from "@tiptap/react";
import { Bold } from "lucide-react";
import type React from "react";
import type { PropsWithChildren } from "react";
import Content from "./components/Content";
import Toolbar from "./components/Toolbar";
import { ReactNoteContext } from "./context";
import * as actions from "./lib/actions";
import { cn } from "./lib/utils";
import Spacer from "./components/Spacer";

export type ReactNoteEditorProps = PropsWithChildren<{
	editor: Editor | null;
	className?: string;
}>;

interface ReactNoteEditorFactory extends React.FC<ReactNoteEditorProps> {
	Content: typeof Content;
	Toolbar: typeof Toolbar;
	Spacer: typeof Spacer;

	Bold: typeof actions.Bold;
	Code: typeof actions.Code;
	Italic: typeof actions.Italic;
	Strike: typeof actions.Strike;
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
				{children}
			</div>
		</ReactNoteContext.Provider>
	);
};

ReactNoteEditor.displayName = "ReactNoteEditor";
ReactNoteEditor.Content = Content;
ReactNoteEditor.Toolbar = Toolbar;
ReactNoteEditor.Spacer = Spacer;
ReactNoteEditor.Bold = actions.Bold;
ReactNoteEditor.Code = actions.Code;
ReactNoteEditor.Italic = actions.Italic;
ReactNoteEditor.Strike = actions.Strike;

export default ReactNoteEditor;
