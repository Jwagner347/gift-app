import React, {Component} from 'react';

class newWishlist extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '', wishlistItems: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const wishlistItems = [...this.state.wishlistItems];
    wishlistItems.push(this.state.value);
    this.setState({wishlistItems, value: ''});
    event.preventDefault();
  }

  render() {
    let wishlistItems = null;

    if (this.state.wishlistItems) {
      wishlistItems = this.state.wishlistItems.map((item) => {
        return (
          <h1>{item}</h1>
        )
      })
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Wishlist item:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {wishlistItems}
      </div>
    );
  }
};

export default newWishlist;
