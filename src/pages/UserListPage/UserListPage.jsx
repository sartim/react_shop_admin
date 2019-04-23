import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import LeftSideNavPage from '../LeftSideNavPage/LeftSideNavPage'
import Header from '../HeaderPage/HeaderPage'
import Script from "../../_helpers/script";
import { FabPage } from "../FabPage";

class UserListPage extends React.Component {

    componentDidMount() {
        // Add important scripts for layout
        Script.toggle();
        Script.collapse();
        Script.fab();

        this.props.dispatch(userActions.getUsers());
    }

    render() {
        const { users } = this.props;

        let all_users;
        if (users.items) {
            all_users = users.items.results;
        }

        return (
          <div>
            <Header />
            <FabPage />
            <div id="main">
              <div className="wrapper">
                <LeftSideNavPage />
                  <section id="content">
                    <div className="container">
                      <div className="section">
                        <div className="row">
                          <div className="col s12">
                            <div className="card">
                              <div className="card-header">
                                <div className="col s12">
                                  <h4 className="header">Users</h4>
                                </div>
                              </div>
                              <div className="card-content">
                                <div className="col s12">
                                  <table className="striped demo1">
                                    <thead>
                                      <tr>
                                        <th data-field="id">ID</th>
                                        <th data-field="name">NAME</th>
                                        <th data-field="email">EMAIL</th>
                                        <th data-field="phone">PHONE</th>
                                      </tr>
                                    </thead>
                                    { all_users &&
                                    <tbody>
                                        { all_users.map((user, index) =>
                                        <tr key={ user.id }>
                                          <td>{ user.id }</td>
                                          <td>{ user.name }</td>
                                          <td>{ user.email }</td>
                                          <td>{ user.phone_number }</td>
                                        </tr>
                                        )}
                                    </tbody>
                                    }
                                  </table>
                                </div>
                              </div>
                            </div>
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
    const { users } = state;

    return {
        users
    };
}

const connectedUserListPage = connect(mapStateToProps)(UserListPage);
export { connectedUserListPage as UserListPage };
