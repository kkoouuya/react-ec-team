import { createSelector } from 'reselect';
import { usersReducer } from '../users/reducers';

// firebaseから取得した商品全件
const productsSelector = (state) => state.products;

export const getProducts = createSelector(
  [productsSelector],
  (state) => state.list
);

