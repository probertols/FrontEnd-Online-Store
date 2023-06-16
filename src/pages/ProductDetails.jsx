import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../services/api';
import { addToCart } from '../services/cart';

export default class ProductDetails extends React.Component {
  state = {
    details: '',
  };

  componentDidMount() {
    this.GetProductDetails();
  }

  handleClick = (details) => {
    addToCart(details);
  };

  GetProductDetails = async () => {
    const { productId } = this.props;
    const response = await getProductById(productId);
    this.setState({
      details: response,
    });
  };

  render() {
    const { details } = this.state;
    return (
      <div>
        <div>
          <div data-testid="product-detail-name">{details.title}</div>
          <img
            src={ details.thumbnail }
            alt={ details.title }
            data-testid="product-detail-image"
          />
          <div data-testid="product-detail-price">{details.price}</div>
          <Link
            to="/carrinho"
            data-testid="shopping-cart-button"
          >
            Carrinho de compras
          </Link>
          <button
            data-testid="product-detail-add-to-cart"
            onClick={ () => this.handleClick(details) }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  productId: PropTypes.string,
}.isRequired;
