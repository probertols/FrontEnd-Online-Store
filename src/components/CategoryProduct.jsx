import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addToCart } from '../services/cart';

export default class CategoryProduct extends React.Component {
  handleClick = () => {
    addToCart(this.props);
  };

  render() {
    const { title, thumbnail, price, id } = this.props;
    return (
      <div>
        <Link
          to={ `/productDetails/${id}` }
          data-testid="product-detail-link"
        >
          Itens
          <div data-testid="product">
            <div>{title}</div>
            <img src={ thumbnail } alt={ title } />
            <div>{price}</div>
          </div>
        </Link>
        <button
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

CategoryProduct.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
}.isRequired;
