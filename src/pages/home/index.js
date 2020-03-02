import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/fad7accefe7f465a8e53ab2300c37d75_9366/Tenis_Superstar_Branco_FV2806_01_standard.jpg"
          alt="Adidas Superstar"
        />
        <strong>Tenis Superstar 2020</strong>
        <span>R$229</span>

        <button type="button">
          <div>
            <MdShoppingCart color="#fff" size={16} /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/fad7accefe7f465a8e53ab2300c37d75_9366/Tenis_Superstar_Branco_FV2806_01_standard.jpg"
          alt="Adidas Superstar"
        />
        <strong>Tenis Superstar 2020</strong>
        <span>R$229</span>

        <button type="button">
          <div>
            <MdShoppingCart color="#fff" size={16} /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/fad7accefe7f465a8e53ab2300c37d75_9366/Tenis_Superstar_Branco_FV2806_01_standard.jpg"
          alt="Adidas Superstar"
        />
        <strong>Tenis Superstar 2020</strong>
        <span>R$229</span>

        <button type="button">
          <div>
            <MdShoppingCart color="#fff" size={16} /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/fad7accefe7f465a8e53ab2300c37d75_9366/Tenis_Superstar_Branco_FV2806_01_standard.jpg"
          alt="Adidas Superstar"
        />
        <strong>Tenis Superstar 2020</strong>
        <span>R$229</span>

        <button type="button">
          <div>
            <MdShoppingCart color="#fff" size={16} /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
