const initialState = {
    plans: ['test'],
    id: 0
}

export default function planReducers(state = initialState, action) {
    switch (action.type) {
        case "SET_PLANS":
            return { ...state, plans: action.payload, id: state.id + 1 }
        default:
            return state
    }
}