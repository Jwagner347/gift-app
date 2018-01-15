import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css'

const layout = (props) => (
  <Aux>
    <div>Toolbar, Backdrop</div>
    <h1 className={classes.AppTitle}>Welcome to Wishlist App!</h1>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;
