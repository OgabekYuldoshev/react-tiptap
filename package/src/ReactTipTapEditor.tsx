import { Editor } from "@tiptap/core";
import clsx from "clsx";
import * as React from "react";
import { PropsWithChildren } from "react";
import styles from "./ReactTipTapEditor.module.scss";
import { Content } from "./components/content";
import { Divider } from "./components/divider";
import { Toolbar } from "./components/toolbar";
import { ReactTipTapEditorContext } from "./context";
import * as actions from "./lib/actions";

export type ReactTipTapEditorProps = PropsWithChildren<{
	editor: Editor | null;
	className?: string;
}>;

export type ReactTipTapEditorFactory = React.FC<ReactTipTapEditorProps> & {
	Content: typeof Content;
	Toolbar: typeof Toolbar;
	Divider: typeof Divider;
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

export const ReactTipTapEditor: ReactTipTapEditorFactory = ({
	editor,
	children,
	className,
}) => {
	if (!editor) {
		return null;
	}

	return (
		<ReactTipTapEditorContext.Provider value={{ editor }}>
			<div className={clsx(styles.wrapper, className)}>{children}</div>
		</ReactTipTapEditorContext.Provider>
	);
};

ReactTipTapEditor.displayName = "ReactTipTapEditor";
ReactTipTapEditor.Content = Content;
ReactTipTapEditor.Toolbar = Toolbar;
ReactTipTapEditor.Divider = Divider;
ReactTipTapEditor.Undo = actions.Undo;
ReactTipTapEditor.Redo = actions.Redo;
ReactTipTapEditor.Bold = actions.Bold;
ReactTipTapEditor.Code = actions.Code;
ReactTipTapEditor.Italic = actions.Italic;
ReactTipTapEditor.Strike = actions.Strike;
ReactTipTapEditor.HorizontalRule = actions.HorizontalRule;
ReactTipTapEditor.HardBreak = actions.HardBreak;
ReactTipTapEditor.Blockquote = actions.Blockquote;
ReactTipTapEditor.BulletList = actions.BulletList;
ReactTipTapEditor.OrderedList = actions.OrderedList;
ReactTipTapEditor.CodeBlock = actions.CodeBlock;
ReactTipTapEditor.H1 = actions.H1;
ReactTipTapEditor.H2 = actions.H2;
ReactTipTapEditor.H3 = actions.H3;
ReactTipTapEditor.H4 = actions.H4;
ReactTipTapEditor.H5 = actions.H5;
ReactTipTapEditor.H6 = actions.H6;
