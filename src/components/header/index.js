import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';
import { Container, Cart } from './styles';
import logo from '../../assets/img/logo.svg';

const Header = ({ cartSize }) => (
  <Container>
    <Link to="/">
      <img src={logo} alt="Rocketshoes" />
    </Link>

    <Cart to="/cart">
      <div>
        <strong>Meu Carrinho</strong>
        <span>{cartSize} itens</span>
      </div>
      <MdShoppingBasket color="#fff" size={36} />
    </Cart>
  </Container>
);

export default connect(state => ({
  cartSize: state.cart.length
}))(Header);
