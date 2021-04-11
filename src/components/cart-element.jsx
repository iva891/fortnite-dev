import React from 'react';
import {connect} from 'react-redux';
import {increaseCartItem, decreaseCartItem, removeCartItem} from '../store/action';

const CartElement = ({goods, item, increaseCartItem, decreaseCartItem, removeCartItem}) => {

  const cartItem = goods.find((elem) => elem.mainId === item.id);

  const increaseItem =() => {
    increaseCartItem(cartItem.mainId);
  };

  const decreaseItem = () => {
    if (item.quantity > 1) {
      decreaseCartItem(cartItem.mainId);
    }
  };

  const removeItem = () => {
    removeCartItem(cartItem.mainId);
  };

  return (
    <li className="collection-item avatar">
      <img src={cartItem.granted[0].images.background} alt={cartItem.displayName} className="circle" />
      <div className="title-item">
        <span className="title">{cartItem.displayName}</span>
        <p className="cart-price">{cartItem.price.regularPrice} ₽</p>
      </div>
      <div className="value-item">
        <i className={`material-icons ${item.quantity <=1 ? `dis-button grey-text text-lighten-2` : `grey-text
          text-darken-2`}`} onClick={decreaseItem}>indeterminate_check_box</i>
        <span className="value-quantity">{item.quantity}</span>
        <i className="material-icons grey-text text-darken-2" onClick={increaseItem}>add_box</i>
      </div>
      <a className="secondary-content delete-icon red-text text-darken-2" onClick={removeItem}><i
          className="material-icons">delete_forever</i></a>
    </li>
  );
};

const mapStateToProps = (state) => ({
  goods: state.goods,
  cartItems: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  increaseCartItem: (id) => dispatch(increaseCartItem(id)),
  decreaseCartItem: (id) => dispatch(decreaseCartItem(id)),
  removeCartItem: (id) => dispatch(removeCartItem(id)),
});

export {CartElement};
export default connect(mapStateToProps, mapDispatchToProps)(CartElement);