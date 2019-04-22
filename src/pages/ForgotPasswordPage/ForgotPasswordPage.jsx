import React from 'react';
import { connect } from 'react-redux';

class ForgotPasswordPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {submitted: false};

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

    handleChange(event) {
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
    }

    render() {
        const { submitted } = this.state;
        return (
          <div id="login-page" className="row">
            <div className="col s12 z-depth-4 card-panel">
                <form name="form" className="login-form" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="input-field col s12 center">
                      <p className="center login-form-text">Password Reset</p>
                    </div>
                  </div>
                    <div className={'form-group'}>
                        <label htmlFor="firstName">Email</label>
                        <input type="text" className="form-control" name="firstName" onChange={this.handleChange} />
                        {submitted &&
                            <div className="help-block">Email is required</div>
                        }
                    </div>
                </form>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    const {  } = state;
    return {
    };
}

const connectedForgotPasswordPage = connect(mapStateToProps)(ForgotPasswordPage);
export { connectedForgotPasswordPage as ForgotPasswordPage };
