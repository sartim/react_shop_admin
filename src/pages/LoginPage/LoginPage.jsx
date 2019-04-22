import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../_actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            email: "",
            password: "",
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
         document.body.style.height = "100%";
         document.body.style.display = "table-cell";
         document.body.style.backgroundColor = "#0098e1";
         document.body.style.verticalAlign = "middle";
         document.documentElement.style.display = "table";
         document.documentElement.style.margin = "auto";
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { email, password, submitted } = this.state;
        return (
            <div id="login-page" className="row">
                <div className="col s12 z-depth-4 card-panel">
                  <form className="login-form" name="form" onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="input-field col s12 center">
                          <p className="center login-form-text">Login</p>
                        </div>
                      </div>
                      <div className="row margin">
                        <div className={'input-field col s12' + (submitted && !email ? ' has-error' : '')}>
                          <i className="material-icons prefix pt-2">person_outline</i>
                          <input type="text" name="email" value={email} onChange={this.handleChange}/>
                          {submitted && !email &&
                              <div className="help-block">email is required</div>
                          }
                          <label htmlFor="email">email</label>
                        </div>
                      </div>
                      <div className="row margin">
                        <div className={'input-field col s12' + (submitted && !password ? ' has-error' : '')}>
                          <i className="material-icons prefix pt-2">lock_outline</i>
                          <input type="password" name="password" value={password} onChange={this.handleChange} />
                          {submitted && !password &&
                              <div className="help-block">Password is required</div>
                          }
                          <label htmlFor="password">Password</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col s12 m12 l12 ml-2 mt-3">
                          <input type="checkbox" id="remember-me" />
                          {/*<label htmlFor="remember-me">Remember me</label>*/}
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <button className="btn col s12">Login</button>
                          {loggingIn &&
                              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                          }
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s6 m6 l6">
                          {/*<p className="margin medium-small"><Link to="/register">Register</Link></p>*/}
                        </div>
                        <div className="input-field col s6 m6 l6">
                          <p className="margin right-align medium-small"><Link to="/forgot-password">Forgot password ?</Link></p>
                        </div>
                      </div>
                  </form>
                </div>
            </div>
        );


    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
