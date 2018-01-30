import React from 'react';

import WishlistItem from '../WishlistItem/WishlistItem';

const wishlist = (props) => {
  let wishlistItems = null;

  if (props.wishlistItems) {
    wishlistItems = props.wishlistItems.map((item, index) => {
      return <WishlistItem key={`wishlist-item-${index + 1}`} item={item} remove={() => props.removeItem(index)}/>
    })
  }

  return (
    <div>
      <h3>Create Wishlist For: </h3>
      <input
        type="text"
        value={props.wishlistName}
        onChange={(event) => props.inputNameHandler(event)} />
      <form onSubmit={props.submit}>
        <label>
          Wishlist item:
          <input
            type="text"
            value={props.inputValue}
            onChange={(event) => props.handleChange(event)} />
        </label>
        <input type="submit" value="Add Item" />
      </form>
      {wishlistItems}
    </div>
  )
}

export default wishlist;
