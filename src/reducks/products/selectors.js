import { createSelector } from 'reselect';
import { usersReducer } from '../users/reducers';

const productsSelector = (state) => state.products;

export const getProducts = createSelector(
  [productsSelector],
  (state) => state.list
);

