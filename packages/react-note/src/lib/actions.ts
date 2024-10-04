import { createAction } from "../components/ActionButton";

export const BoldA = createAction({
    label: 'Bold',
    active: {
        name: 'bold'
    },
    operation: {
        name: 'toggleBold',
    }
})