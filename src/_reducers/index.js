import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users, user, online_users } from './users.reducer';
import { alert } from './alert.reducer';
import {search_results} from "./search.reducer";
import {product, products} from "./products.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  product,
  products,
  user,
  users,
  online_users,
  search_results,
  alert
});

export default rootReducer;
