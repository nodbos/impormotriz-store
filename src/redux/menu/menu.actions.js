import MenuActionTypes from './menu.types';

export const setMenuActiveItem = name => {
    return {
        type: MenuActionTypes.SET_CURRENT_ACTIVE_MENU,
        payload: name,
    };
};
