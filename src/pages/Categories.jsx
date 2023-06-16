import React from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  state = {
    categoriesList: [],
  };

  componentDidMount() {
    this.handleCategories();
  }

  handleCategories = async () => {
    const categories = await getCategories();

    this.setState({
      categoriesList: categories,
    });
  };

  render() {
    const { categoriesList } = this.state;
    const { onClick } = this.props;
    return (
      <div>
        { categoriesList.length > 0 && categoriesList.map((categoria) => (
          <label
            key={ categoria.id }
            data-testid="category"
            htmlFor={ categoria.id }
          >
            {categoria.name}
            <div>
              <input
                type="radio"
                name="categories"
                id={ categoria.id }
                onClick={ onClick }
                value={ categoria.name }
              />
            </div>
          </label>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Categories;
