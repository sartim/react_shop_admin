import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users, user, online_users } from './users.reducer';
import { alert } from './alert.reducer';
import { search_results } from "./search.reducer";
import { product, products } from "./products.reducer";
import { order } from "./orders.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  order,
  product,
  products,
  user,
  users,
  online_users,
  search_results,
  alert
});

export default rootReducer;
