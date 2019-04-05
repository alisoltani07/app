import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

export class Categories extends Component {
  state = {
    isLoading: true,
    categories: [],
    error: false
  };
  componentDidMount() {
    api.categories
      .getAll()
      .then(res => {
        this.setState({
          isLoading: false,
          categories: res.categories.items
        });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <p>is loading...</p>
        </div>
      );
    }
    const curentPath = this.props.match.path;
    return (
      <ul>
        {this.state.categories.map(category => (
          <li key={category.id}>
            <Link to={`${curentPath}/${category.id}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}
export default Categories;
