import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { history } from '../../_helpers/history';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_param: '',
            open: false
        };

        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.search = this.search.bind(this);
        this.toggleRightSideNav = this.toggleRightSideNav.bind(this);
    }

    handleSearchChange(event) {
        this.setState({search_param: event.target.value});

    }

    search(event) {
        event.preventDefault();
        history.push('/search?q='+this.state.search_param);
    }

    toggleRightSideNav() {
        if (this.state.open) {
            document.getElementById("right-side-nav").style.width = "0";
            this.setState({open: false});
        } else if (!this.state.open) {
            document.getElementById("right-side-nav").style.width = "300px";
            this.setState({open: true});
        }
    }

    render() {

     return (
       <header id="header" className="page-topbar">
         <div className="navbar-fixed">
           <nav className="navbar-color">
             <div className="nav-wrapper">
               <div className="header-search-wrapper hide-on-med-and-down sideNav-lock">
                 <i className="material-icons">search</i>
                 <form onSubmit={this.search}>
                 <input type="text" className="header-search-input z-depth-2" placeholder="Search anything"
                 value={this.state.search_param} onChange={this.handleSearchChange}/>
                 </form>
               </div>
               <ul className="right hide-on-med-and-down">
                 <li>
                  <a href="javascript:void(0);" className="dropdown-trigger" data-target="notifications-dropdown">
                    <i className="material-icons">notifications_none
                      <small className="notification-badge">5</small>
                    </i>
                  </a>
                  <ul id="notifications-dropdown" className="dropdown-content">
                    <li>
                      <h6>NOTIFICATIONS
                        <span className="new badge">5</span>
                      </h6>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="#!" className="grey-text text-darken-2">
                        <span className="material-icons icon-bg-circle cyan small">add_shopping_cart</span> A new article has been posted!</a>
                      <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">2 hours ago</time>
                    </li>
                    <li>
                      <a href="#!" className="grey-text text-darken-2">
                        <span className="material-icons icon-bg-circle red small">stars</span> Completed the task</a>
                      <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">3 days ago</time>
                    </li>
                    <li>
                      <a href="#!" className="grey-text text-darken-2">
                        <span className="material-icons icon-bg-circle teal small">settings</span> Settings updated</a>
                      <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">4 days ago</time>
                    </li>
                    <li>
                      <a href="#!" className="grey-text text-darken-2">
                        <span className="material-icons icon-bg-circle deep-orange small">today</span> Director meeting started</a>
                      <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">6 days ago</time>
                    </li>
                    <li>
                      <a href="#!" className="grey-text text-darken-2">
                        <span className="material-icons icon-bg-circle amber small">trending_up</span> Generate monthly report</a>
                      <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">1 week ago</time>
                    </li>
                  </ul>
                 </li>
                 <li>
                   <a href="javascript:void(0);" className="dropdown-trigger"
                      data-target="profile-dropdown">
                      <span className="avatar-status avatar-online">
                        <img src="/assets/admin-assets/img/default_user.png"
                             className="img center responsive"/>
                      </span>
                   </a>
                   <ul id="profile-dropdown" className="dropdown-content drop-down">
                     <li>
                       <a href="#" className="grey-text text-darken-1">
                         <i className="material-icons">face</i> Profile</a>
                     </li>
                     <li>
                       <a href="#" className="grey-text text-darken-1">
                         <i className="material-icons">settings</i> </a>
                     </li>
                     <li>
                       <a href="#" className="grey-text text-darken-1">
                         <i className="material-icons">live_help</i> Help</a>
                     </li>
                     <li className="divider"></li>
                     <li>
                       <a href="#" className="grey-text text-darken-1">
                         <i className="material-icons">lock_outline</i> Lock</a>
                     </li>
                     <li>
                       <Link className="grey-text text-darken-1" to="/login"><i
                         className="material-icons">keyboard_tab</i>Logout</Link>

                     </li>
                   </ul>
                 </li>
                 <li>
                    <a href="javascript:void(0);" data-target="slide-out" onClick={this.toggleRightSideNav} className="sidenav-trigger chat-collapse">
                      <i className="material-icons">format_indent_increase</i>
                    </a>
                 </li>
               </ul>
             </div>
           </nav>
         </div>
       </header>
     )
    }
}

export default Header;

