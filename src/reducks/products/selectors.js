import { createSelector } from 'reselect';

// firebaseから取得した商品全件
const productsSelector = (state) => state.products;

export const getProducts = createSelector(
  [productsSelector],
  (state) => state.list
);


// const cartSelector = (state) => state.cart;

// export const getcart = createSelector(
//   [cartSelector],
//   (state) => state.list
// );

