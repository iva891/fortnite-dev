export const ActionType = {
  SET_GOODS: `shop/setGoods`,
  SET_LOADING: `shop/setLoading`,
  ADD_CART_ITEM: `goodsItem/addCartItem`,
  INCREASE_CART_ITEM: `goodsItem/increaseCartItem`,
  DECREASE_CART_ITEM: `cart/decreaseCartItem`,
  REMOVE_CART_ITEM: `cart/removeCartItem`,
  DELETE_ALL_ITEMS: `cart/deleteAllItems`,
};

export const setGoods = (payload) => ({ type: ActionType.SET_GOODS,  payload});
export const setLoading = (payload) => ({type: ActionType.SET_LOADING, payload});
export const addCartItem = (id, price) => ({type: ActionType.ADD_CART_ITEM, id, price});
export const increaseCartItem = (payload) => ({type: ActionType.INCREASE_CART_ITEM, payload});
export const decreaseCartItem = (payload) => ({type: ActionType.DECREASE_CART_ITEM, payload});
export const removeCartItem = (payload) => ({type: ActionType.REMOVE_CART_ITEM, payload});
export const deleteAllItems = () => ({type: ActionType.DELETE_ALL_ITEMS});
