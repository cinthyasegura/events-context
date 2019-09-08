import React, { Component } from 'react';
import axios from 'axios';

const CategoriesContext = React.createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;

class CategoriesProvider extends Component {
  token = process.env.REACT_APP_APIKEY;

  state = { categories: [] };
  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    const url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;
    try {
      const categories = await axios.get(url);
      this.setState({ categories: categories.data.categories });
    } catch (error) {
      console.warn(error);
    }
  };

  render() {
    const { categories } = this.state;
    return (
      <CategoriesContext.Provider value={{ categories }}>
        {this.props.children}
      </CategoriesContext.Provider>
    );
  }
}

export default CategoriesProvider;
