import React from 'react';

import classes from './WishlistItem.css';

const wishlistItem = (props) => (
  <div>
    <li className={classes.Center}>{props.item}</li>
    <button onClick={props.remove}/>
  </div>
);



export default wishlistItem;
