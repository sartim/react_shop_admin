import {articleConstants} from '../_constants';
import { alertActions } from './';
import {articleService} from '../_services';
import * as M from "../../assets/js/materialize.min";

export const articleActions = {
    getDailyCounts,
    getPendingArticles,
    getPublishedArticles,
    getRejectedArticles,
    getDraftedArticles,
    getAllArticles,
    getArticleById,
    getArticlesPublishedToday,
    getArticlesPublishedYesterday,
    getArticlesPublishedThisMonth,
    getArticlesPublishedLastMonth,
    getArticlesPublishedThisYear,
    getArticlesPublishedLastYear,
    getMyPickedArticles,
    updateArticle,
    createDraft,
    createDraftBody,
    delete: _delete
};

function getDailyCounts(status) {
    return dispatch => {
        dispatch(request());

        articleService.getDailyCounts(status)
            .then(
                articles => dispatch(success(articles)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: articleConstants.DAILY_COUNT_REQUEST } }
    function success(article_daily_count) { return { type: articleConstants.DAILY_COUNT_SUCCESS, article_daily_count } }
    function failure(error) { return { type: articleConstants.DAILY_COUNT_FAILURE, error } }
}

function getPublishedArticles(page) {
    return dispatch => {
        dispatch(request());

        articleService.getArticles(page, 5, false)  // id 5 for published status_id
            .then(
                published_articles => {
                  dispatch(success(published_articles));
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: articleConstants.GETALL_PUBLISHED_REQUEST } }
    function success(published_articles) { return { type: articleConstants.GETALL_PUBLISHED_SUCCESS, published_articles } }
    function failure(error) { return { type: articleConstants.GETALL_PUBLISHED_FAILURE, error } }
}

function getPendingArticles(page) {
    return dispatch => {
        dispatch(request());

        articleService.getArticles(page, 2, false)  // id 5 for pending status_id
            .then(
                pending_articles => {
                  dispatch(success(pending_articles));
                  },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: articleConstants.GETALL_PENDING_REQUEST } }
    function success(pending_articles) { return { type: articleConstants.GETALL_PENDING_SUCCESS, pending_articles } }
    function failure(error) { return { type: articleConstants.GETALL_PENDING_FAILURE, error } }
}

function getRejectedArticles(page) {
    return dispatch => {
        dispatch(request());

        articleService.getArticles(page, 4, false)  // id 4 for rejected articles
            .then(
                rejected_articles => {
                    dispatch(success(rejected_articles));
                    // Store the data requested to local storage
                    // localStorage.setItem('rejected_articles', JSON.stringify(rejected_articles))
                },
                error => dispatch(failure(error.toString()))
            )
    };

    function request() { return { type: articleConstants.GETALL_REJECTED_REQUEST } }
    function success(rejected_articles) { return { type: articleConstants.GETALL_REJECTED_SUCCESS, rejected_articles }}
    function failure(error) { return { type: articleConstants.GETALL_REJECTED_FAILURE, error }}
}

function getDraftedArticles(page) {
    return dispatch => {
        dispatch(request());

        articleService.getArticles(page, 1, true)  // id 1 for drafted articles
            .then(
                drafted_articles => {
                    dispatch(success(drafted_articles));
                },
                error => dispatch(failure(error.toString()))
            )
    };

    function request() { return { type: articleConstants.GETALL_DRAFTED_REQUEST } }
    function success(drafted_articles) { return { type: articleConstants.GETALL_DRAFTED_SUCCESS, drafted_articles }}
    function failure(error) { return { type: articleConstants.GETALL_DRAFTED_FAILURE, error }}
}

function getAllArticles(page) {
    return dispatch => {
        dispatch(request());

        articleService.getArticles(page, '', false)
            .then(
                articles => {
                    dispatch(success(articles));
                    // Store the data requested to local storage
                    // localStorage.setItem('articles', JSON.stringify(articles))
                },
                error => dispatch(failure(error.toString()))
            )
    };

    function request() { return { type: articleConstants.GETALL_REQUEST } }
    function success(articles) { return { type: articleConstants.GETALL_SUCCESS, articles }}
    function failure(error) { return { type: articleConstants.GETALL_FAILURE, error }}
}

function getArticleById(article_id) {
    return dispatch => {
        dispatch(request());

        articleService.getArticleById(article_id)
            .then(
                article => {
                    dispatch(success(article));
                    localStorage.setItem('current_article', JSON.stringify(article));
                    localStorage.setItem(
                      'gjs-html',
                      '<img src="'+article.article_image+'" style="width: 100%" onerror="this.src=\'https://media.giphy.com/media/3oKIPvQWkVBKRkPYJy/giphy.gif\'" />' +
                      '<div style="padding: 15px"><h3> ' + article.title +'</h3></div>' +
                      '<div style="padding: 15px">' + article.body + '</div>');
                },
                error => dispatch(failure(error.toString()))
            )
    };

    function request() { return { type: articleConstants.ARTICLE_REQUEST } }
    function success(article) { return { type: articleConstants.ARTICLE_SUCCESS, article }}
    function failure(error) { return { type: articleConstants.ARTICLE_FAILURE, error }}
}

function getArticlesPublishedToday() {
    return dispatch => {
        dispatch(request());

        articleService.getArticleByStatusAndFilter('published', 'today')
            .then(
                published_articles_today => {
                    dispatch(success(published_articles_today));
                },
                error => dispatch(failure(error.toString()))
            )
    };

    function request() { return { type: articleConstants.GETALL_PUBLISHED_TODAY_REQUEST } }
    function success(published_articles_today) { return { type: articleConstants.GETALL_PUBLISHED_TODAY_SUCCESS, published_articles_today }}
    function failure(error) { return { type: articleConstants.GETALL_PUBLISHED_TODAY_FAILURE, error }}
}

function getArticlesPublishedYesterday() {
    return dispatch => {
        dispatch(request());

        articleService.getArticleByStatusAndFilter('published', 'yesterday')
            .then(
                published_articles_yesterday => {
                    dispatch(success(published_articles_yesterday));
                },
                error => dispatch(failure(error.toString()))
            )
    };

    function request() { return { type: articleConstants.GETALL_PUBLISHED_YESTERDAY_REQUEST } }
    function success(published_articles_yesterday) { return { type: articleConstants.GETALL_PUBLISHED_YESTERDAY_SUCCESS, published_articles_yesterday }}
    function failure(error) { return { type: articleConstants.GETALL_PUBLISHED_YESTERDAY_FAILURE, error }}
}

function getArticlesPublishedThisMonth() {
    return dispatch => {
        dispatch(request());

        articleService.getArticleByStatusAndFilter('published', 'this-month')
            .then(
                published_articles_this_month => {
                    dispatch(success(published_articles_this_month));
                },
                error => dispatch(failure(error.toString()))
            )
    };

    function request() { return { type: articleConstants.GETALL_PUBLISHED_THIS_MONTH_REQUEST } }
    function success(published_articles_this_month) { return { type: articleConstants.GETALL_PUBLISHED_THIS_MONTH_SUCCESS, published_articles_this_month }}
    function failure(error) { return { type: articleConstants.GETALL_PUBLISHED_THIS_MONTH_FAILURE, error }}
}

function getArticlesPublishedLastMonth() {
    return dispatch => {
        dispatch(request());

        articleService.getArticleByStatusAndFilter('published', 'last-month')
            .then(
                published_articles_last_month => {
                    dispatch(success(published_articles_last_month));
                },
                error => dispatch(failure(error.toString()))
            )
    };

    function request() { return { type: articleConstants.GETALL_PUBLISHED_LAST_MONTH_REQUEST } }
    function success(published_articles_last_month) { return { type: articleConstants.GETALL_PUBLISHED_LAST_MONTH_SUCCESS, published_articles_last_month }}
    function failure(error) { return { type: articleConstants.GETALL_PUBLISHED_LAST_MONTH_FAILURE, error }}
}

function getArticlesPublishedThisYear() {
    return dispatch => {
        dispatch(request());

        articleService.getArticleByStatusAndFilter('published', 'this-year')
            .then(
                published_articles_this_year => {
                    dispatch(success(published_articles_this_year));
                },
                error => dispatch(failure(error.toString()))
            )
    };

    function request() { return { type: articleConstants.GETALL_PUBLISHED_THIS_YEAR_REQUEST } }
    function success(published_articles_this_year) { return { type: articleConstants.GETALL_PUBLISHED_THIS_YEAR_SUCCESS, published_articles_this_year }}
    function failure(error) { return { type: articleConstants.GETALL_PUBLISHED_THIS_YEAR_FAILURE, error }}
}

function getArticlesPublishedLastYear() {
    return dispatch => {
        dispatch(request());

        articleService.getArticleByStatusAndFilter('published', 'last-year')
            .then(
                published_articles_last_year => {
                    dispatch(success(published_articles_last_year));
                },
                error => dispatch(failure(error.toString()))
            )
    };

    function request() { return { type: articleConstants.GETALL_PUBLISHED_LAST_YEAR_REQUEST } }
    function success(published_articles_last_year) { return { type: articleConstants.GETALL_PUBLISHED_LAST_YEAR_SUCCESS, published_articles_last_year }}
    function failure(error) { return { type: articleConstants.GETALL_PUBLISHED_LAST_YEAR_FAILURE, error }}
}

function getMyPickedArticles(page) {
    return dispatch => {
        dispatch(request());
        articleService.getMyPickedArticles(page)
            .then(
                my_picked_articles => {
                    dispatch(success(my_picked_articles));
                },
                error => dispatch(failure(error.toString()))
            )
    };
    function request() { return { type: articleConstants.GETALL_MY_PICKED_REQUEST } }
    function success(my_picked_articles) { return { type: articleConstants.GETALL_MY_PICKED_SUCCESS, my_picked_articles }}
    function failure(error) { return { type: articleConstants.GETALL_MY_PICKED_FAILURE, error }}
}

function updateArticle(data) {
    return dispatch => {
        dispatch(request());
        articleService.updateArticle(data)
            .then(
                update_article => {
                    dispatch(success(update_article));
                },
                error => dispatch(failure(error.toString()))
            )
    };
    function request() { return { type: articleConstants.UPDATE_REQUEST } }
    function success(update_article) { return { type: articleConstants.UPDATE_SUCCESS, update_article }}
    function failure(error) { return { type: articleConstants.UPDATE_FAILURE, error }}
}
function createDraft(article_create) {
    return dispatch => {
        dispatch(request(article_create));

        articleService.createDraft(article_create)
            .then(
                article_create => {
                    dispatch(success(article_create));
                    dispatch(alertActions.success('Article creation successful'));
                    this.props.history.push(`/article/${article_create.id}/editor`);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(article_create) { return { type: articleConstants.VERSION_CREATE_REQUEST, article_create } }
    function success(article_create) { return { type: articleConstants.VERSION_CREATE_SUCCESS, article_create } }
    function failure(error) { return { type: articleConstants.VERSION_CREATE_FAILURE, error } }
}

function createDraftBody(article_create_body) {
    return dispatch => {
        dispatch(request(article_create_body));

        articleService.createDraftBody(article_create_body)
            .then(
                article_create_body => {
                    dispatch(success(article_create_body));
                    dispatch(alertActions.success('Article body creation successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(article_create_body) { return { type: articleConstants.VERSION_CREATE_BODY_REQUEST, article_create_body } }
    function success(article_create_body) { return { type: articleConstants.VERSION_CREATE_BODY_SUCCESS, article_create_body } }
    function failure(error) { return { type: articleConstants.VERSION_CREATE_BODY_FAILURE, error } }
}

function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        articleService.delete(id)
            .then(
                article => {
                    dispatch(success(id));
                    M.toast({html: id+' deleted successfully!'});
                },
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: articleConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: articleConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: articleConstants.DELETE_FAILURE, id, error } }
}
