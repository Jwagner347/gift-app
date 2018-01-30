import React, {Component} from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux';
import Wishlist from '../../components/Wishlist/Wishlist';

class newWishlist extends Component {

  constructor(props) {
    super(props);
    this.state = {name: '', value: '', wishlistItems: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputNameHandler = this.inputNameHandler.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  inputNameHandler(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    if (!this.state.value) {
      event.preventDefault();
      return;
    }

    const wishlistItems = [...this.state.wishlistItems];
    wishlistItems.push(this.state.value);
    this.setState({wishlistItems, value: ''});
    event.preventDefault();
  }

  removeWishlistItemHandler = (index) => {
    const wishlistItems = [...this.state.wishlistItems];
    wishlistItems.splice(index, 1);
    this.setState({wishlistItems});
  }

  saveWishlistHandler = () => {
    const wishlist = {
    	wishlistItems: this.state.wishlistItems,
    	name: this.state.name
    }
    axios.post('/wishlist/new', wishlist)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
  }

  render() {

    return (
      <Aux>
        <Wishlist
          wishlistName={this.state.name}
          inputNameHandler={this.inputNameHandler}
          wishlistItems={this.state.wishlistItems}
          submit={this.handleSubmit}
          inputValue={this.state.value}
          handleChange={this.handleChange}
          removeItem={this.removeWishlistItemHandler}
          />
        <button onClick={this.saveWishlistHandler}>Save Wishlist</button>
      </Aux>
    );
  }
};

export default newWishlist;
