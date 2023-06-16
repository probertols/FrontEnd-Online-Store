import { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoryProduct from '../components/CategoryProduct';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from './Categories';

export default class Home extends Component {
  state = {
    productsList: [],
    search: '',
    productFind: false,
  };

  querySearch = async () => {
    const { search } = this.state;
    const getSearch = await getProductsFromCategoryAndQuery(search);

    if (getSearch) {
      this.setState({
        productsList: getSearch.results,
        productFind: true,
      });
    } else {
      this.setState({
        productFind: false,
      });
    }
  };

  inputChange = (event) => {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  };

  showCheckedList = async (id) => {
    const { target } = id;
    const { value } = target;
    const { search } = this.state;
    const response = await getProductsFromCategoryAndQuery(search, value);
    this.setState({
      productsList: response.results, productFind: true,
    });
  };

  render() {
    const { productsList, search, productFind } = this.state;
    const empty = productsList.length === 0;
    //  console.log(productsList);
    return (
      <>
        <input type="text" name="" />
        <br />
        <div>
          <Link
            to="/carrinho"
            data-testid="shopping-cart-button"
          >
            Carrinho de compras
          </Link>
          {empty && (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )}
          <input
            data-testid="query-input"
            type="text"
            value={ search }
            name="search"
            onChange={ this.inputChange }
          />

          <button
            data-testid="query-button"
            type="button"
            onClick={ this.querySearch }
          >
            Buscar
          </button>
          {productFind
            ? (productsList.map((product) => (
              <CategoryProduct
                key={ product.id }
                title={ product.title }
                thumbnail={ product.thumbnail }
                price={ product.price }
                id={ product.id }
              />
            )))
            : (<p>Nenhum produto foi encontrado</p>) }

        </div>
        <Categories onClick={ this.showCheckedList } />
      </>
    );
  }
}
