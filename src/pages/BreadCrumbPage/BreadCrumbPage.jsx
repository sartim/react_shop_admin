import React from 'react';
import { Link } from 'react-router-dom';

export class BreadCrumbPage extends React.Component {

    render() {
        const breadcrumbs = this.props.breadcrumbs;
        return (
            <nav style={{height: '100px'}}>
              <div className="nav-wrapper" style={{ 'padding': '20px'}}>
                <div className="col s12">
                  <Link to="/" className="breadcrumb">Dashboard</Link>
                  {breadcrumbs}
                </div>
              </div>
            </nav>
        );
    }
}
