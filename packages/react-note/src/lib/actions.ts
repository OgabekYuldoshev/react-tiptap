import { createAction } from "../components/ActionButton";

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
