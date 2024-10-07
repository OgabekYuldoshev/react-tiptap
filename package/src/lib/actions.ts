import { createAction } from "../components/action-button";

export const Undo = createAction({
	label: "Undo",
	icon: "Undo",
	onDisabled: (editor: any) => !editor?.can().undo(),
	onClick: (editor: any) => editor.chain().undo().run()
});
export const Redo = createAction({
	label: "Redo",
	icon: "Redo",
	onDisabled: (editor: any) => !editor?.can().redo(),
	onClick: (editor: any) => editor.chain().redo().run()
});

export const Bold = createAction({
	label: "Bold",
	icon: "Bold",
	onActive: (editor) => editor.isActive("bold"),
	onClick: (editor: any) => editor.chain().focus().toggleBold().run(),
	onDisabled: (editor: any) => !editor?.can().toggleBold(),
});

export const Italic = createAction({
	label: "Italic",
	icon: "Italic",
	onActive: (editor) => editor.isActive("italic"),
	onClick: (editor: any) => editor.chain().focus().toggleItalic().run(),
	onDisabled: (editor: any) => !editor?.can().toggleItalic(),
});

export const Strike = createAction({
	label: "Strike",
	icon: "Strikethrough",
	onActive: (editor) => editor.isActive("strike"),
	onClick: (editor: any) => editor.chain().focus().toggleStrike().run(),
	onDisabled: (editor: any) => !editor?.can().toggleStrike(),
});

export const Code = createAction({
	label: "Code",
	icon: "Code",
	onActive: (editor) => editor.isActive("code"),
	onClick: (editor: any) => editor.chain().focus().toggleCode().run(),
	onDisabled: (editor: any) => !editor?.can().toggleCode(),
});

export const HorizontalRule = createAction({
	label: "HorizontalRule",
	icon: "FlipVertical",
	onClick: (editor: any) => editor.chain().focus().setHorizontalRule().run(),
	onDisabled: (editor: any) => !editor?.can().setHorizontalRule(),
});

export const Blockquote = createAction({
	label: "Blockquote",
	icon: "Quote",
	onActive: (editor) => editor.isActive("blockquote"),
	onClick: (editor: any) => editor.chain().focus().toggleBlockquote().run(),
	onDisabled: (editor: any) => !editor?.can().toggleBlockquote(),
});

export const BulletList = createAction({
	label: "BulletList",
	icon: "List",
	onActive: (editor) => editor.isActive("bulletList"),
	onClick: (editor: any) => editor.chain().focus().toggleBulletList().run(),
	onDisabled: (editor: any) => !editor?.can().toggleBulletList(),
});

export const OrderedList = createAction({
	label: "OrderedList",
	icon: "ListOrdered",
	onActive: (editor) => editor.isActive("orderedList"),
	onClick: (editor: any) => editor.chain().focus().toggleOrderedList().run(),
	onDisabled: (editor: any) => !editor?.can().toggleOrderedList(),
});

export const CodeBlock = createAction({
	label: "CodeBlock",
	icon: "ChartNoAxesGantt",
	onActive: (editor) => editor.isActive("codeBlock"),
	onClick: (editor: any) => editor.chain().focus().toggleCodeBlock().run(),
	onDisabled: (editor: any) => !editor?.can().toggleCodeBlock(),
});

export const HardBreak = createAction({
	label: "HardBreak",
	icon: "Scissors",
	onClick: (editor: any) => editor.chain().focus().setHardBreak().run(),
	onDisabled: (editor: any) => !editor?.can().setHardBreak(),
});

export const H1 = createAction({
	label: "H1",
	icon: "Heading1",
	onActive: (editor) => editor.isActive("heading", { level: 1 }),
	onClick: (editor: any) => editor.chain().focus().toggleHeading({ level: 1 }).run(),
	onDisabled: (editor: any) => !editor?.can().toggleHeading({ level: 1 })
});

export const H2 = createAction({
	label: "H2",
	icon: "Heading2",
	onActive: (editor) => editor.isActive("heading", { level: 2 }),
	onClick: (editor: any) => editor.chain().focus().toggleHeading({ level: 2 }).run(),
	onDisabled: (editor: any) => !editor?.can().toggleHeading({ level: 2 })
});

export const H3 = createAction({
	label: "H3",
	icon: "Heading3",
	onActive: (editor) => editor.isActive("heading", { level: 3 }),
	onClick: (editor: any) => editor.chain().focus().toggleHeading({ level: 3 }).run(),
	onDisabled: (editor: any) => !editor?.can().toggleHeading({ level: 3 })
});

export const H4 = createAction({
	label: "H4",
	icon: "Heading4",
	onActive: (editor) => editor.isActive("heading", { level: 4 }),
	onClick: (editor: any) => editor.chain().focus().toggleHeading({ level: 4 }).run(),
	onDisabled: (editor: any) => !editor?.can().toggleHeading({ level: 4 })
});

export const H5 = createAction({
	label: "H5",
	icon: "Heading5",
	onActive: (editor) => editor.isActive("heading", { level: 5 }),
	onClick: (editor: any) => editor.chain().focus().toggleHeading({ level: 5 }).run(),
	onDisabled: (editor: any) => !editor?.can().toggleHeading({ level: 5 })
});

export const H6 = createAction({
	label: "H6",
	icon: "Heading6",
	onActive: (editor) => editor.isActive("heading", { level: 6 }),
	onClick: (editor: any) => editor.chain().focus().toggleHeading({ level: 6 }).run(),
	onDisabled: (editor: any) => !editor?.can().toggleHeading({ level: 6 })
});
