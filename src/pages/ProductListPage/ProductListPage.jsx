import React from 'react';
import { connect } from 'react-redux';
import SideNav from '../SideNavPage/SideNavPage'
import Header from '../HeaderPage/HeaderPage'
import Script from "../../_helpers/script";
import { FabPage } from "../FabPage";
import Link from "react-router-dom/es/Link";
import {PaginationPage} from "../PaginationPage";
import {BreadCrumbPage} from "../BreadCrumbPage";
import {ModalPage} from "../ModalPage";
import {userActions, productActions} from "../../_actions";

class ProductListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        // Add important scripts for layout
        Script.toggle();
        Script.collapse();
        Script.fab();
        this.editProduct = this.editProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);

        this.props.dispatch(productActions.getProducts());
    }

    editProduct(id) {

    }

    deleteProduct(id) {

    }

    render() {
        const { } = this.props;
        let element;
        const confirm = <button className="modal-close btn-flat" onClick={() => this.deleteArticle(this.state.id)}>Ok</button>;
        const cancel = <button className="modal-close btn-flat">Cancel</button>;
        const breadcrumbs = <Link to="/product/list" className="breadcrumb">Product List</Link>;

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
                        <div className="col s12">
                          <table className="responsive-table striped highlight">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>CATEGORY</th>
                                <th>QUANTITY</th>
                                <th>CREATED DATE</th>
                                <th>ACTION</th>
                              </tr>
                            </thead>
                            <tbody>

                            </tbody>
                          </table>
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
    const { } = state;

    return { };
}

const connectedProductListPage = connect(mapStateToProps)(ProductListPage);
export { connectedProductListPage as ProductListPage };
