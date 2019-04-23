import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Script from "../../_helpers/script";

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {account: ''}
    }

    componentDidMount() {
        // Load sidenav scripts
        Script.maximizeSideNav();

        let account = JSON.parse(localStorage.getItem('user'));
        this.setState({account: account})
    }

    render() {
        let account = this.state.account;

        let user_name;
        if (account) {
            user_name = account.user.username;
        }

        return (
          <aside id="left-sidebar-nav" className="nav-expanded nav-lock nav-collapsible">
            <div className="brand-sidebar">
              <h1 className="logo-wrapper">
                <a href="#" className="brand-logo darken-1">
                  <img src="/assets/img/shop.png" alt="ADMIN"/>
                  <span className="logo-text hide-on-med-and-down">ADMIN</span>
                </a>
                <a href="#" className="navbar-toggler" onClick={Script.minimizeSideNav}>
                  <i className="material-icons">radio_button_checked</i>
                </a>
              </h1>
            </div>
            <ul id="slide-out" className="side-nav fixed leftside-navigation">
              <li className="side-user-info">
                <Link to="/profile">
                  <img src="/assets/admin-assets/img/default_user.png"
                       className="side-user-img responsive" />
                  <span className="side-user-name">{user_name}</span>
                </Link>
              </li>
              <li className="no-padding">
                <ul className="collapsible" data-collapsible="accordion">
                  <li className="bold">
                    <a className="collapsible-header waves-effect waves-cyan">
                      <i className="material-icons">dashboard</i>
                      <span className="nav-text">Dashboard</span>
                    </a>
                    <div className="collapsible-body">
                      <ul>
                        <li className="active">
                          <Link to="/">
                            <i className="material-icons">keyboard_arrow_right</i>
                              <span>Orders</span>
                            </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="bold">
                    <a className="collapsible-header  waves-effect waves-cyan">
                      <i className="material-icons">view_comfy</i>
                      <span className="nav-text">Orders</span>
                    </a>
                    <div className="collapsible-body">
                      <ul>
                        <li>
                          <Link to="/order/pending">
                            <i className="material-icons">keyboard_arrow_right</i>
                            <span>Pending</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/order/in-progress">
                            <i className="material-icons">keyboard_arrow_right</i>
                            <span>In progress</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/order/delivered">
                            <i className="material-icons">keyboard_arrow_right</i>
                            <span>Delivered</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/order/all">
                            <i className="material-icons">keyboard_arrow_right</i>
                            <span>All</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="bold">
                    <a className="collapsible-header  waves-effect waves-cyan">
                      <i className="material-icons">view_comfy</i>
                      <span className="nav-text">Products</span>
                    </a>
                    <div className="collapsible-body">
                      <ul>
                        <li>
                          <Link to="/product/list">
                            <i className="material-icons">keyboard_arrow_right</i>
                            <span>List</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product/report">
                            <i className="material-icons">keyboard_arrow_right</i>
                            <span>Report</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="bold">
                    <a className="collapsible-header  waves-effect waves-cyan">
                      <i className="material-icons">account_box</i>
                      <span className="nav-text">User</span>
                    </a>
                    <div className="collapsible-body">
                      <ul>
                        <li>
                          <Link to="/user/list">
                            <i className="material-icons">keyboard_arrow_right</i>
                            <span>User List</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/user/role">
                            <i className="material-icons">keyboard_arrow_right</i>
                            <span>User Roles</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="li-hover">
                <p className="ultra-small margin more-text">MORE</p>
              </li>
              <li>
                <Link to="/profile">
                  <i className="material-icons">account_circle</i>
                  <span className="nav-text">Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/settings">
                  <i className="material-icons">settings</i>
                  <span className="nav-text">Settings</span>
                </Link>
              </li>
            </ul>
            <a href="#" data-target="slide-out" onClick={Script.toggleLeftSideNav} className="sidenav-trigger sidebar-collapse btn-floating btn-medium hide-on-large-only gradient-45deg-light-blue-cyan gradient-shadow"><i className="material-icons">menu</i></a>
          </aside>
        )
    }
}

export default SideNav;
