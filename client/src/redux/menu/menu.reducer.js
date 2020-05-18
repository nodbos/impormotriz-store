import MenuActionTypes from './menu.types';

const INITIAL_STATE = {
    activeItem: null,
};

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MenuActionTypes.SET_CURRENT_ACTIVE_MENU:
            return {
                ...state,
                activeItem: action.payload,
            };
        default:
            return state;
    }
};

export default menuReducer;
