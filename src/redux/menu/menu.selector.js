import { createSelector } from 'reselect';

const selectMenu = state => state.menu;

export const selectActiveMenuItem = createSelector(
    [selectMenu],
    menu => menu.activeItem
);
