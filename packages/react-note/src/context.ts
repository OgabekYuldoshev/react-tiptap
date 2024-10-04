import type { Editor } from "@tiptap/react";
import { createContext, useContext } from "react";

export type ReactNoteContextProps = {
    editor: Editor;
};
export const ReactNoteContext = createContext<ReactNoteContextProps>({
    editor: {} as Editor,
});

export const useNote = () => {
    const ctx = useContext(ReactNoteContext)

    if (!ctx) {
        throw new Error("ReactNoteContext should be inside a provider")
    }

    return ctx
}
