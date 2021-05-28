import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ProductsReducer } from '../products/reducers';
import { UsersReducer } from '../users/reducers';
import { ToppingReducer } from '../topping/reducers';

const store = () => {
  return createStore(
    combineReducers({
      products: ProductsReducer,
      topping: ToppingReducer,
      users: UsersReducer,
    }),
    applyMiddleware(thunk)
  );
};

export default store;
