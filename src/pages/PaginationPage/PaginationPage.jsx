import React from "react";
import { connect } from 'react-redux';
import Link from "react-router-dom/es/Link";
import {articleActions} from "../../_actions";

class PaginationPage extends React.Component {
    constructor(props) {
          super(props);
          this.state = {};
          this.selectPage = this.selectPage.bind(this);
    }

    componentWillMount() {
        this.setState({count: this.props.count});
        const pages = this.props.pages;
        const doubled = pages.map(
          (number) => <li id={number} key={number} className=""><Link to="/article/list" onClick={this.selectPage(number)}>{number}</Link></li>
        );
        this.setState({paginated_element: doubled});
        this.setState({next_page: parseInt(this.props.next_page)});
    }

    selectPage(page) {
        console.log(page);
    }

    paginatedElelement() {
        return this.state.paginated_element;
    }

    render() {
      let active  = document.getElementById('1');
      if (active) {
          active.classList.add('active');
      }
      const previousPage = () => {
          this.props.dispatch(articleActions.getAllArticles(this.state.next_page));
          const next_count = parseInt(this.state.next_page) + 1;
          this.state.next_page = next_count;
          this.setState({next_page: next_count});
      };

      const nextPage = () => {
          this.props.dispatch(articleActions.getAllArticles(this.state.next_page));
          const next_count = parseInt(this.state.next_page) + 1;
          this.state.next_page = next_count;
          this.setState({next_page: next_count});
      };

      console.log(this.state);
      return <ul className="pagination">
                <li className="disabled"><Link to="/article/list" onClick={previousPage}><i className="material-icons">chevron_left</i></Link></li>
                  {this.paginatedElelement()}
                <li className="waves-effect"><div onClick={nextPage}><i className="material-icons">chevron_right</i></div></li>
             </ul>;
    }
}

function mapStateToProps(state) {
    const { articles } = state;

    return {
        articles
    };
}

const connectedPaginationPage = connect(mapStateToProps)(PaginationPage);
export { connectedPaginationPage as PaginationPage };
