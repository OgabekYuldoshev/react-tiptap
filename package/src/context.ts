import { Editor } from "@tiptap/core";
import { createContext, useContext } from "react";

export type ReactNoteContextProps = {
	editor: Editor;
};
export const ReactTipTapEditorContext = createContext<ReactNoteContextProps>({
	editor: {} as Editor,
});

export const useTiptap = () => {
	const ctx = useContext(ReactTipTapEditorContext);

	if (!ctx) {
		throw new Error("ReactNoteContext should be inside a provider");
	}

	return ctx;
};
