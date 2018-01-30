import React from 'react';

import WishlistItem from '../Wishlist/WishlistItem/WishlistItem';

const existingWishlist = (props) => {
  let wishlistItems = null;

  if (props.wishlistItems) {
    wishlistItems = props.wishlistItems.map((item, index) => {
      return <WishlistItem key={`wishlist-item-${index + 1}`} item={item} remove={() => props.removeItem(index)}/>
    })
  }

  return (
    <div>
      <h3>Get Wishlist For: </h3>
      <input
        type="text"
        value={props.wishlistName}
        onChange={(event) => props.inputNameHandler(event)} />
      <button onClick={props.getWishlist}>Get Wishlist</button>
      {wishlistItems}
    </div>
  )
}

export default existingWishlist;
