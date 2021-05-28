import { createSelector } from "reselect";

const usersSelector = (state) => state.users;

export const getUserId = createSelector([usersSelector], (state) => state.uid);

export const getUserName = createSelector(
  [usersSelector],
  (state) => state.username
);

export const getProductsInCart = createSelector(
  [usersSelector],
  (state) => state.cart
);
<<<<<<< HEAD

export const getOrders = createSelector(
  [usersSelector],
  (state) => state.orders
);
=======
>>>>>>> 7c1d2338d0b298cb98e0be44b7824e0ba0416e1e
