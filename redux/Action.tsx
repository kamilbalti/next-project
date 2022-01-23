import { SET_CARTITEM, SET_CHECK, SET_MAINDATAARR, SET_OPEN } from "./ActionType";

export const setMainDataArr = (payload : any) => ({
    type: SET_MAINDATAARR,
    payload,
});

export const setCartItem = (payload : any) => ({
    type: SET_CARTITEM,
    payload,
});
export const setOpen = (payload : any) => ({
    type: SET_OPEN,
    payload,
});
export const setCheck = (payload : any) => ({
    type: SET_CHECK,
    payload,
});