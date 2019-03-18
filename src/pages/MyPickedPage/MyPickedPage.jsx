import React from "react";
import { connect } from 'react-redux';
import Link from "react-router-dom/es/Link";
import Header from "../HeaderPage/HeaderPage";
import {FabPage} from "../FabPage";
import {BreadCrumbPage} from "../BreadCrumbPage";
import SideNav from "../SideNavPage/SideNavPage";
import {articleActions} from "../../_actions";
import Script from "../../_helpers/script";
import {ModalPage} from "../ModalPage";
import {PaginationPage} from "../PaginationPage";

class MyPickedPage extends React.Component {
    componentDidMount() {
        // Add important scripts for layout
        Script.toggle();
        Script.collapse();
        Script.fab();
        this.props.dispatch(articleActions.getMyPickedArticles(1));
    }

    setArticleId(article_id) {
        return () => this.setState({article_id: article_id});
    }

    editArticle(article_id) {
        const current_article = JSON.parse(localStorage.getItem('current_article'));
        if (current_article) {
            if(current_article.id === article_id) {
                this.props.dispatch(articleActions.getArticleById(article_id));
                this.props.history.push('/article/edit/'+article_id);
            } else {
                alert("you have a current article in edit mode!");
            }

        } else {
            this.props.dispatch(articleActions.getArticleById(article_id));
        }
    }

    deleteArticle(article_id) {
        this.props.dispatch(articleActions.delete(article_id));
    }


    render() {
        const { my_picked_articles } = this.props;
        let all_my_picked_articles;
        let count;
        let element;
        if (my_picked_articles.items) {
            all_my_picked_articles = my_picked_articles.items.results;
            count = my_picked_articles.items.count;
            let pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            element = <PaginationPage request_="getMyPickedArticles" next_page="2" pages={pages} count={count} />
        }
        const confirm = <button className="modal-close btn-flat" onClick={() => this.deleteArticle(this.state.article_id)}>Ok</button>;
        const cancel = <button className="modal-close btn-flat">Cancel</button>;
        const breadcrumbs = <Link to="/article/pending" className="breadcrumb">My Picked Articles</Link>;
        const pages_element = element;

        return (
            <div>
            <Header />
            <FabPage />
            <ModalPage header="Confirm" message="Are you sure you want to delete?" confirm={confirm} cancel={cancel} />
            <div id="main">
              <div className="wrapper">
                <BreadCrumbPage breadcrumbs={breadcrumbs} />
                <SideNav />
                  <section id="content">
                    <div className="container">
                      <div className="section">
                        <div className="row">
                          <div className="col s12">
                            <h4 className="header">My Picked Articles</h4>
                          </div>
                          <div className="col s12">
                            <table className="striped demo1">
                              <thead>
                                <tr>
                                  <th>TITLE</th>
                                  <th data-field="price">POSTED DATE</th>
                                  <th>ACTION</th>
                                </tr>
                              </thead>
                              { all_my_picked_articles &&
                              <tbody>
                                  { all_my_picked_articles.map((article, index) =>
                                  <tr key={ article.article_id }>
                                    <td>{ article.title }</td>
                                    <td>
                                      { article.posted_date }
                                    </td>
                                    <td>
                                      { article.published_date ?
                                        (<i className="material-icons"></i>) :
                                        (<i className="material-icons">check_box_outline_blank</i>)
                                      }
                                    </td>
                                    <td style={{display: 'flex'}}>
                                    <button className="btn" onClick={() => this.editArticle(article.article_id)}>
                                      <i className="material-icons">edit</i>
                                    </button>
                                    <button data-target="modal-popup" className="btn red modal-trigger" onClick={this.setArticleId(article.article_id)}>
                                      <i className="material-icons">delete</i>
                                    </button>
                                  </td>
                                  </tr>
                                  )}
                              </tbody>
                              }
                            </table>
                            {pages_element}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
              </div>
            </div>
          </div>
        )
    }
}

function mapStateToProps(state) {
    const { my_picked_articles } = state;

    return {
        my_picked_articles
    };
}

const connectedMyPickedPage = connect(mapStateToProps)(MyPickedPage);
export { connectedMyPickedPage as MyPickedPage };
