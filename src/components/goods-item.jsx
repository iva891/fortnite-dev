import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {addCartItem, increaseCartItem} from '../store/action';

const GoodsItem = ({item, addCartItem, increaseCartItem, cartItems}) => {

    const success = useRef();

    const showSuccess = () => {
        success.current.classList.add(`success-block-show`);
        setTimeout(() => success.current.classList.remove(`success-block-show`), 1000);
    }

    const addToCart = () => {
        if (cartItems.find(elem => elem.id === item.mainId)) {
            increaseCartItem(item.mainId);
        } else {
            addCartItem(item.mainId, item.price.regularPrice);
        }

        showSuccess();
    };

    return (
        <div className="col s12 m7">
            <div className="card">
                <div className="card-image">
                    <img src={item.granted[0].images.background} alt={item.displayName} />
                </div>
                <div className="card-content">
                    <span className="card-title">{item.displayName}</span>
                    <p>{item.granted[0].description}</p>
                    <h5 className="card-price">{item.price.regularPrice} ₽</h5>
                    <div className="success-block" ref={success}>
                        <h4>Товар добавлен в корзину</h4>
                    </div>
                </div>
                <div className="card-action valign-wrapper">
                    <a className="waves-effect waves-light btn" onClick={addToCart}>Купить</a>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    goods: state.goods,
    cartItems: state.cart,
  });
  
const mapDispatchToProps = (dispatch) => ({
    addCartItem: (id, price) => dispatch(addCartItem(id, price)),
    increaseCartItem: (id) => dispatch(increaseCartItem(id)),
});

export {GoodsItem};
export default connect(mapStateToProps, mapDispatchToProps)(GoodsItem);