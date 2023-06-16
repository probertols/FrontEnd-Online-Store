import { Component } from 'react';
import { getCart, addToCart, subtractFromCart, removeFromCart } from '../services/cart';

export default class ShoppingCart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    this.setState({
      cart: getCart(),
    });
  }

  handleAddToCart = (item) => {
    addToCart(item);
    this.setState({
      cart: getCart(),
    });
  };

  handleSubtractFromCart = (item) => {
    if (item.quantity === 1) {
      return null;
    }
    subtractFromCart(item);
    this.setState({
      cart: getCart(),
    });
  };

  handleRemoveFromCart = (item) => {
    removeFromCart(item);
    this.setState({
      cart: getCart(),
    });
  };

  render() {
    const { cart } = this.state;
    return (
      <main>
        {cart.length === 0 && (
          <span data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </span>
        )}
        {cart.map((item) => (
          <div key={ item.id }>
            <h3
              data-testid="shopping-cart-product-name"
            >
              {item.title}
            </h3>
            <p
              data-testid="shopping-cart-product-quantity"
            >
              {item.quantity}
            </p>
            <button
              data-testid="product-increase-quantity"
              onClick={ () => this.handleAddToCart(item) }
            >
              {' '}
              Adicionar
              {' '}
            </button>
            <button
              onClick={ () => this.handleSubtractFromCart(item) }
              data-testid="product-decrease-quantity"
            >
              {' '}
              Diminuir
              {' '}
            </button>
            <button
              onClick={ () => this.handleRemoveFromCart(item) }
              data-testid="remove-product"
            >
              {' '}
              Remover
              {' '}
            </button>
          </div>
        ))}
      </main>
    );
  }
}
