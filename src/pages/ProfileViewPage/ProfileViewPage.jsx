import React from 'react';
import Header from "../HeaderPage/HeaderPage";
import {FabPage} from "../FabPage";
import SideNav from "../SideNavPage/SideNavPage";
import Script from "../../_helpers/script";

class ProfileVieWPage extends React.Component {

     componentDidMount() {
         Script.toggle();
         Script.collapse();
     }

    render() {
        return (
            <div>
            <Header />
            <div id="main">
              <div className="wrapper">
                <nav style={{height: '100px'}}>
                  <div className="nav-wrapper" style={{ 'padding': '20px'}}>
                    <div className="col s12">
                      <a href="/" className="breadcrumb">Dashboard</a>
                    </div>
                  </div>
                </nav>
                <SideNav />
                <section id="content">
                  <div className="container">

                    <h1> Profile </h1>
                  </div>
                </section>
              </div>
            </div>
            <FabPage />
          </div>
        );
    }
}

export { ProfileVieWPage };
