import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users, user, online_users } from './users.reducer';
import { categories } from './category.reducer';
import { locations } from './location.reducer';
import { published_articles, rejected_articles, my_picked_articles, update_article, articles, article, article_create,
  article_create_body, pending_articles, drafted_articles, published_articles_today, published_articles_this_month,
  published_articles_yesterday, published_articles_last_month, published_articles_this_year,
  published_articles_last_year, article_daily_count } from './articles.reducer';
import { alert } from './alert.reducer';
import {search_results} from "./search.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  user,
  users,
  online_users,
  published_articles,
  rejected_articles,
  pending_articles,
  drafted_articles,
  published_articles_today,
  published_articles_yesterday,
  published_articles_this_month,
  published_articles_last_month,
  published_articles_this_year,
  published_articles_last_year,
  article_daily_count,
  my_picked_articles,
  update_article,
  articles,
  article,
  article_create,
  article_create_body,
  categories,
  locations,
  search_results,
  alert
});

export default rootReducer;
