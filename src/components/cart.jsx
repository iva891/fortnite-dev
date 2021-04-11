import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import CartElement from './cart-element';
import {deleteAllItems} from '../store/action';

const Cart = ({cartItems, clearCart}) => {

  let resPrice = 0;

  const sumItemsPrice = (items) => {
    items.map((item) => {
      resPrice = resPrice + (item.price * item.quantity);
    });
    return resPrice;
  };

  return (
    <main className="container">
      <div>
        <Link to="/" className="back-block teal-text">
        <i className="material-icons back-block__arrow">arrow_back</i>
        <span className="back-block__text">Назад</span>
        </Link>
      </div>
      {!cartItems.length ?
      <h3>В корзине нет товаров</h3> :
      <div>
        <ul className="collection">
          {cartItems.map((item) =>
          <CartElement key={item.id} item={item} />
          )}
        </ul>
        <p className="result-cart">Сумма заказа: <span className="result-price">{sumItemsPrice(cartItems)} ₽</span></p>
        <div className="cart-btns">
          <a className="waves-effect waves-light btn">Оформить заказ</a>
          <a className="waves-effect waves-light btn offset-s6 red darken-2" onClick={clearCart}>Очистить корзину</a>
        </div>
      </div>
      }
    </main>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(deleteAllItems()),
});

export {Cart};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);