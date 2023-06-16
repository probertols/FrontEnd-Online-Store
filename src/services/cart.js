export const getCart = () => JSON.parse(localStorage.getItem('cart')) || [];

export const addToCart = (products) => {
  const cart = getCart();
  const product = cart.find(({ id }) => id === products.id);
  if (product) {
    product.quantity += 1;
  }
  if (product === undefined) {
    cart.push({ ...products, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const subtractFromCart = (products) => {
  const cart = getCart();
  const product = cart.find(({ id }) => id === products.id);
  product.quantity -= 1;
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const removeFromCart = (products) => {
  const cart = getCart();
  const product = cart.filter(({ id }) => id !== products.id);
  localStorage.setItem('cart', JSON.stringify(product));
};
