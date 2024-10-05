import type { Editor } from "@tiptap/react";
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

export type ReactNoteEditorFactory = React.FC<ReactNoteEditorProps> & {
	Content: typeof Content;
	Toolbar: typeof Toolbar;
	Spacer: typeof Spacer;
	Undo: typeof actions.Undo;
	Redo: typeof actions.Redo;
	Bold: typeof actions.Bold;
	Code: typeof actions.Code;
	Italic: typeof actions.Italic;
	Strike: typeof actions.Strike;
	HorizontalRule: typeof actions.HorizontalRule;
	HardBreak: typeof actions.HardBreak;
	Blockquote: typeof actions.Blockquote;
	BulletList: typeof actions.BulletList;
	OrderedList: typeof actions.OrderedList;
	CodeBlock: typeof actions.CodeBlock;
	H1: typeof actions.H1;
	H2: typeof actions.H2;
	H3: typeof actions.H3;
	H4: typeof actions.H4;
	H5: typeof actions.H5;
	H6: typeof actions.H6;
};

export const ReactNoteEditor: ReactNoteEditorFactory = ({
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
ReactNoteEditor.Undo = actions.Undo;
ReactNoteEditor.Redo = actions.Redo;
ReactNoteEditor.Bold = actions.Bold;
ReactNoteEditor.Code = actions.Code;
ReactNoteEditor.Italic = actions.Italic;
ReactNoteEditor.Strike = actions.Strike;
ReactNoteEditor.HorizontalRule = actions.HorizontalRule;
ReactNoteEditor.HardBreak = actions.HardBreak;
ReactNoteEditor.Blockquote = actions.Blockquote;
ReactNoteEditor.BulletList = actions.BulletList;
ReactNoteEditor.OrderedList = actions.OrderedList;
ReactNoteEditor.CodeBlock = actions.CodeBlock;
ReactNoteEditor.H1 = actions.H1;
ReactNoteEditor.H2 = actions.H2;
ReactNoteEditor.H3 = actions.H3;
ReactNoteEditor.H4 = actions.H4;
ReactNoteEditor.H5 = actions.H5;
ReactNoteEditor.H6 = actions.H6;
