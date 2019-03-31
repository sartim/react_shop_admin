import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { UserListPage } from '../pages/UserListPage';
import {ProfileVieWPage} from "../pages/ProfileViewPage";
import {SettingsViewPage} from "../pages/SettingsViewPage";
import {SearchResultsPage} from "../pages/SearchResultsPage";
import {ProductListPage} from "../pages/ProductListPage";
import {OrderListPage} from "../pages/OrderListPage/ProductListPage";

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div>
                {/*{alert.message &&*/}
                    {/*<div className={`alert ${alert.type}`}>{alert.message}</div>*/}
                {/*}*/}
                <Router history={history}>
                    <div>
                        <PrivateRoute exact path="/" component={HomePage} />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <PrivateRoute path="/product/list" component={ProductListPage} />
                        <PrivateRoute path="/ORDER/list" component={OrderListPage} />
                        <PrivateRoute path="/user/list" component={UserListPage} />
                        <PrivateRoute path="/profile" component={ProfileVieWPage}/>
                        <PrivateRoute path="/settings" component={SettingsViewPage}/>
                        <PrivateRoute path="/search" component={SearchResultsPage}/>
                    </div>
                </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
export default App;
