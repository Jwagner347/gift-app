import React, {Component} from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux';
import ExistingWishlist from '../../components/ExistingWishlist/ExistingWishlist';

class existingWishlist extends Component {

  constructor(props) {
    super(props);
    this.state = {name: '', wishlistItems: []};

    this.inputNameHandler = this.inputNameHandler.bind(this);
  }

  inputNameHandler(event) {
    this.setState({name: event.target.value});
  }

  removeWishlistItemHandler = (index) => {
    const wishlistItems = [...this.state.wishlistItems];
    wishlistItems.splice(index, 1);
    this.setState({wishlistItems});
  }

  getWishlistHandler = () => {
    axios.get('/wishlist/' + this.state.name)
      .then(response => {
        const wishlistItems = response.data.wishlist;
        this.setState({wishlistItems});
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {

    return (
      <Aux>
        <ExistingWishlist
          wishlistName={this.state.name}
          getWishlist={this.getWishlistHandler}
          inputNameHandler={this.inputNameHandler}
          wishlistItems={this.state.wishlistItems}
          removeItem={this.removeWishlistItemHandler}
          />
      </Aux>
    );
  }
};

export default existingWishlist;
