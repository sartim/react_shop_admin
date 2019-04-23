import React from 'react';
import Header from "../HeaderPage/HeaderPage";
import {FabPage} from "../FabPage";
import LeftSideNavPage from "../LeftSideNavPage/LeftSideNavPage";

class SettingsViewPage extends React.Component {

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
                <LeftSideNavPage />
                <section id="content">
                  <div className="container">

                    <h1> Settings </h1>
                  </div>
                </section>
              </div>
            </div>
            <FabPage />
          </div>
        );
    }
}

export { SettingsViewPage };
