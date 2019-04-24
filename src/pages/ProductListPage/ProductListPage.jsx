import React from 'react';
import { connect } from 'react-redux';
import LeftSideNavPage from '../LeftSideNavPage/LeftSideNavPage'
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
        const { products } = this.props;
        let element;
        const confirm = <button className="modal-close btn-flat" onClick={() => this.deleteArticle(this.state.id)}>Ok</button>;
        const cancel = <button className="modal-close btn-flat">Cancel</button>;
        const breadcrumbs = <Link to="/product/list" className="breadcrumb">Product List</Link>;
        let all_products;
        if (products.items) {
            all_products = products.items.results;
            console.log(all_products);
        }
        return (
          <div>
            <Header />
            <FabPage />
            <ModalPage header="Confirm" message="Are you sure you want to delete?" confirm={confirm} cancel={cancel} />
            <div id="main">
              <div className="wrapper">
                <BreadCrumbPage breadcrumbs={breadcrumbs} />
                <LeftSideNavPage />
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
                            { all_products &&
                            <tbody>
                            { all_products.map((product, index) =>
                              <tr key={ product.id }>
                                <td>{ product.id }</td>
                                <td>{ product.name }</td>
                                <td>{ product.category }</td>
                                <td>{ product.items }</td>
                                <td>{ product.created_date }</td>
                                <td>
                                  <button className="btn">Manage</button>
                                </td>
                              </tr>
                            )}
                            </tbody>
                            }
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
    const { products } = state;

    return { products };
}

const connectedProductListPage = connect(mapStateToProps)(ProductListPage);
export { connectedProductListPage as ProductListPage };
