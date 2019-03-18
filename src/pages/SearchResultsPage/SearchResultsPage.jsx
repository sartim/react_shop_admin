import React from "react";
import connect from "react-redux/es/connect/connect";
import {searchActions} from "../../_actions/search.actions";
import {getParameterByName} from "../../_helpers/querystring-handler";
import Link from "react-router-dom/es/Link";
import Header from "../HeaderPage/HeaderPage";
import SideNav from "../SideNavPage/SideNavPage";
import Script from "../../_helpers/script";
import {BreadCrumbPage} from "../BreadCrumbPage";
import {HorizontalLoader} from "../LoaderPage/HorizontalLoader";

class SearchResultsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.getArticleDetail = this.getArticleDetail.bind(this);
        this.getUserDetail = this.getUserDetail.bind(this);
    }

    componentDidMount() {
        // Layout scripts
        Script.toggle();
        Script.collapse();
        Script.fab();
        const search_param = getParameterByName('q');
        this.props.dispatch(searchActions.getResults(search_param))
    }

    getArticleDetail (id) {
        this.props.history.push('/article/'+id+'/detail');
    }

    getUserDetail (id) {
        this.props.history.push('/user/'+id+'/detail');
    }

    render() {
        const { search_results  } = this.props;
        let all_results;
        let count;
        let type;
        let results;
        if (search_results.items) {
            all_results = search_results.items.results;
            count = search_results.items.count;
            type = search_results.items.type;
            results = (
                <div>
                    {all_results &&
                        <div>
                        {all_results.map((result, index) =>
                            <div key={result.id}>
                                {type === 'article' ?
                                    (
                                        <div className="card horizontal">
                                            <div className="card-image">
                                                <img className="img center responsive"
                                                     src={result.article_image}
                                                     onError={
                                                         (e)=>{
                                                             e.target.onerror = null;
                                                             e.target.src="https://pixinvent.com/materialize-material-design-admin-template/images/gallary/11.png"
                                                         }
                                                     }
                                                />
                                            </div>
                                            <div className="card-stacked">
                                              <div className="card-content">
                                                <p>{result.title}</p>
                                              </div>
                                              <div className="card-action">
                                                <button className="btn btn-block right" onClick={() => this.getArticleDetail(result.id)}>View</button>
                                              </div>
                                            </div>
                                        </div>
                                    ) :
                                    (
                                        <div className="card horizontal">
                                            <div className="card-image">
                                                <img
                                                    className="img center responsive"
                                                    src={result.profile_picture}
                                                    onError={
                                                        (e)=>{
                                                            e.target.onerror = null;
                                                            e.target.src="https://pixinvent.com/materialize-material-design-admin-template/images/gallary/11.png"
                                                        }
                                                    }
                                                />
                                            </div>
                                            <div className="card-stacked">
                                              <div className="card-content">
                                                <p>{result.name}</p>
                                              </div>
                                              <div className="card-action">
                                                <button className="btn btn-block right" onClick={() => this.getUserDetail(result.id)}>View</button>
                                              </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        )}
                    </div>
                    }
                </div>
            )
        } else {
            results = (<HorizontalLoader />)
        }
        const breadcrumbs = <Link to="/article/list" className="breadcrumb">Search Results</Link>;

        return (
            <div>
                <Header />
                <div id="main">
                    <div className="wrapper">
                        <BreadCrumbPage breadcrumbs={breadcrumbs} />
                        <SideNav />
                        <section id="content">
                            <div className="container">
                                <div className="section">
                                    <div className="row">
                                        <div className="col s12">
                                            <h4 className="header">Results:</h4>
                                            {results}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { search_results } = state;
    return {
        search_results
    };
}

const connectedSearchResultsPage = connect(mapStateToProps)(SearchResultsPage);
export { connectedSearchResultsPage as SearchResultsPage };
