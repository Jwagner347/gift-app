import React, { Component } from 'react';
import './App.css';
import NewWishlist from './NewWishlist/NewWishlist';

class App extends Component {
  state = {
    createNewWishlist: false
  }

  createWishlistHandler = () => {
    const doesShow = this.state.createNewWishlist;
    this.setState({createNewWishlist: !doesShow})
  }

  render() {
    let newWishlist = null;
    let message = 'Create a new wishlist!';

    if (this.state.createNewWishlist) {
      message = 'Remove wishlist';
      newWishlist = (
        <div>
          <NewWishlist/>
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Wishlist App!</h1>
        </header>
        <button onClick={this.createWishlistHandler}>{message}</button>
        {newWishlist}
      </div>
    );
  }
}

export default App;
