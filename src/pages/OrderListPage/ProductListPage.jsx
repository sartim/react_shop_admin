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

class OrderListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        // Add important scripts for layout
        Script.toggle();
        Script.collapse();
        Script.fab();
        this.editOrder = this.editOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    editOrder(id) {

    }

    deleteOrder(id) {

    }

    render() {
        const { } = this.props;
        const confirm = <button className="modal-close btn-flat" onClick={() => this.deleteOrder(this.state.id)}>Ok</button>;
        const cancel = <button className="modal-close btn-flat">Cancel</button>;
        const breadcrumbs = <Link to="/order/list" className="breadcrumb">Order List</Link>;

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
                                <th>ITEM</th>
                                <th>CATEGORY</th>
                                <th>STATUS</th>
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

const connectedOrderListPage = connect(mapStateToProps)(OrderListPage);
export { connectedOrderListPage as OrderListPage };
