import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Header = ({cartItems}) => {
    return (
        <div className="navbar-fixed">
          <nav className=" lime darken-1 z-depth-2">
            <div className="nav-wrapper">
              <ul id="nav-mobile" className="left hide-on-med-and-down">
                <li><a href="collapsible.html">Репозиторий проекта на Github</a></li>
              </ul>
              <Link to="/" className="brand-logo center">
              <i className="material-icons">blur_on</i>
              <span>Fortnite shop</span>
              </Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/cart">
                  <div style={{display: `flex`}}>
                    <span>{cartItems.length === 0 ? `` : cartItems.length}</span>
                    <i className="material-icons">shopping_cart</i>
                  </div>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
    );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart,
});

export {Header};
export default connect(mapStateToProps)(Header);