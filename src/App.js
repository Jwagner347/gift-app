import React, { Component } from 'react';
import './App.css';
import NewWishlistBuilder from './containers/NewWishlistBuilder/NewWishlistBuilder';
import ExistingWishlistBuilder from './containers/ExistingWishlistBuilder/ExistingWishlistBuilder';
import Layout from './components/Layout/Layout';

class App extends Component {
  state = {
    createNewWishlist: false,
    viewExistingWishlist: false
  }

  createWishlistHandler = () => {
    const doesShow = this.state.createNewWishlist;
    this.setState({createNewWishlist: !doesShow})
  }

  viewExistingWishlistHandler = () => {
    this.setState({viewExistingWishlist: true})
  }

  render() {
    let newWishlist = null;
    let message = 'Create a new wishlist!';

    if (this.state.createNewWishlist) {
      message = 'Remove wishlist';
      newWishlist = (
        <div>
          <NewWishlistBuilder/>
        </div>
      );
    }

    let existingWishlist = null;
    if (this.state.viewExistingWishlist) {
      existingWishlist = (
        <div>
          <ExistingWishlistBuilder/>
        </div>
      );
    }

    return (
      <div>
        <Layout>
          <button onClick={this.createWishlistHandler}>{message}</button>
          {newWishlist}
          <button onClick={this.viewExistingWishlistHandler}>View your existing wishlist</button>
          {existingWishlist}
        </Layout>
      </div>
    );
  }
}

export default App;
