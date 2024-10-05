import { createAction } from "../components/ActionButton";

export const Undo = createAction({
	label: "Undo",
	icon: "Undo",
	isDisabled: (editor) => !editor?.can().undo(),
	operation: {
		name: "undo",
	},
});
export const Redo = createAction({
	label: "Redo",
	icon: "Redo",
	isDisabled: (editor) => !editor?.can().redo(),
	operation: {
		name: "redo",
	},
});

export const Bold = createAction({
	label: "Bold",
	icon: "Bold",
	active: {
		name: "bold",
	},
	operation: {
		name: "toggleBold",
	},
});

export const Italic = createAction({
	label: "Italic",
	icon: "Italic",
	active: {
		name: "italic",
	},
	operation: {
		name: "toggleItalic",
	},
});

export const Strike = createAction({
	label: "Strike",
	icon: "Strikethrough",
	active: {
		name: "strike",
	},
	operation: {
		name: "toggleStrike",
	},
});

export const Code = createAction({
	label: "Code",
	icon: "Code",
	active: {
		name: "code",
	},
	operation: {
		name: "toggleCode",
	},
});

export const HorizontalRule = createAction({
	label: "HorizontalRule",
	icon: "FlipVertical",
	operation: {
		name: "setHorizontalRule",
	},
});

export const Blockquote = createAction({
	label: "Blockquote",
	icon: "Quote",
	active: {
		name: "blockquote",
	},
	operation: {
		name: "toggleBlockquote",
	},
});

export const BulletList = createAction({
	label: "BulletList",
	icon: "List",
	active: {
		name: "bulletList",
	},
	operation: {
		name: "toggleBulletList",
	},
});

export const OrderedList = createAction({
	label: "OrderedList",
	icon: "ListOrdered",
	active: {
		name: "orderedList",
	},
	operation: {
		name: "toggleOrderedList",
	},
});

export const CodeBlock = createAction({
	label: "CodeBlock",
	icon: "ChartNoAxesGantt",
	active: {
		name: "codeBlock",
	},
	operation: {
		name: "toggleCodeBlock",
	},
});

export const HardBreak = createAction({
	label: "HardBreak",
	icon: "Scissors",
	operation: {
		name: "setHardBreak",
	},
});

export const H1 = createAction({
	label: "H1",
	icon: "Heading1",
	active: {
		name: "heading",
		attributes: {
			level: 1,
		},
	},
	operation: {
		name: "toggleHeading",
		attributes: {
			level: 1,
		},
	},
});

export const H2 = createAction({
	label: "H2",
	icon: "Heading2",
	active: {
		name: "heading",
		attributes: {
			level: 2,
		},
	},
	operation: {
		name: "toggleHeading",
		attributes: {
			level: 2,
		},
	},
});

export const H3 = createAction({
	label: "H3",
	icon: "Heading3",
	active: {
		name: "heading",
		attributes: {
			level: 3,
		},
	},
	operation: {
		name: "toggleHeading",
		attributes: {
			level: 3,
		},
	},
});

export const H4 = createAction({
	label: "H4",
	icon: "Heading4",
	active: {
		name: "heading",
		attributes: {
			level: 4,
		},
	},
	operation: {
		name: "toggleHeading",
		attributes: {
			level: 4,
		},
	},
});

export const H5 = createAction({
	label: "H5",
	icon: "Heading5",
	active: {
		name: "heading",
		attributes: {
			level: 5,
		},
	},
	operation: {
		name: "toggleHeading",
		attributes: {
			level: 5,
		},
	},
});

export const H6 = createAction({
	label: "H6",
	icon: "Heading6",
	active: {
		name: "heading",
		attributes: {
			level: 6,
		},
	},
	operation: {
		name: "toggleHeading",
		attributes: {
			level: 6,
		},
	},
});
