import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

class Category extends Component {
  state = {
    loading: true,
    icons: [],
    playlists: [],
    error: false
  };
  componentDidMount() {
    let categoryId = this.props.match.params.categoryId;
    Promise.all([
      api.categories.getDetailes(categoryId).then(res =>
        this.setState({
          icons: res.icons
        })
      ),
      api.categories.getPlaylists(categoryId).then(res =>
        this.setState({
          playlists: res.playlists.items
        })
      )
    ])
      .then(() => this.setState({ loading: false }))
      .catch(err => this.setState({ err: err }));
  }

  render() {
    if (this.state.err) {
      return <div>Error...!</div>;
    }
    if (this.state.loading) {
      return (
        <div>
          <h1>isLoading...</h1>
        </div>
      );
    }
    let icon = this.state.icons[0];
    return (
      <div>
        <img
          alt='icon'
          style={{ width: icon.width, height: icon.height }}
          src={icon.url}
        />
        <ul>
          {this.state.playlists.map(playlist => (
            <div key={playlist.id}>
              <Link to={`/playlists/${playlist.id}`}>
                {playlist.name} ({playlist.tracks.total})
              </Link>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Category;
