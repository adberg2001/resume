const initialState = {
    menu: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MENU_OPEN":
            return {
                ...state,
                menu: !state.menu

            };
        default:
            return state;
    }
}

export default reducer