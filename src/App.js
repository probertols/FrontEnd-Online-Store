import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <Switch>
      <Route
        path="/"
        component={ Home }
        exact
      />
      <Route
        path="/carrinho"
        component={ ShoppingCart }
        exact
      />
      <Route
        path="/productDetails/:id"
        render={ (props) => (
          <ProductDetails
            productId={ props.match.params.id }
          />
        ) }
      />
    </Switch>
  );
}

export default App;

App.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
