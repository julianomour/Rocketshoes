import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import logo from '../../assets/img/logo.svg';

const Header = () => (
  <Container>
    <Link to="/">
      <img src={logo} alt="Rocketshoes" />
    </Link>

    <Cart>
      <div>
        <strong>Meu Carrinho</strong>
        <span>3 itens</span>
      </div>
      <MdShoppingBasket color="#fff" size={36} />
    </Cart>
  </Container>
);

export default Header;
