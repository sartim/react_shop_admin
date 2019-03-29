import React from "react";
import Script from "../../_helpers/script";
import {HorizontalLoader} from "../LoaderPage/HorizontalLoader";

class RightSideNavPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Load sidenav scripts
        Script.maximizeSideNav();
        Script.tabs();
    }

    render() {
        let online_users = this.props.online_users;
        let current_user = this.props.current_user;
        let results;
        if (online_users) {
            results = (
                <div>
                    {online_users &&
                        <div>
                            { online_users.map((user, index) =>
                                <div key={user.id}>
                                {user.id !== current_user.user.id &&
                                <a href="#!" className="collection-item avatar border-none">
                                    <img src="/assets/img/default_user.png"
                                         className="circle red accent-2"/>
                                    <span className="line-height-0">{user.name} </span>
                                    <span className="medium-small right blue-grey-text text-lighten-3"></span>
                                    <p className="medium-small blue-grey-text text-lighten-3">Online </p>
                                </a>
                                }
                                </div>
                            )}
                        </div>
                    }
                </div>
            )

        } else {
            results = (<HorizontalLoader />)
        }

        return (
            <div id="right-side-nav" className="sidenav">
                <div className="row">
                    <div className="col s12">
                      <ul className="tabs">
                        <li className="tab col s4"><a className="active" href="#test1"><i className="material-icons">graphic_eq</i></a></li>
                        <li className="tab col s4"><a href="#test2"><i className="material-icons">face</i></a></li>
                        <li className="tab col s4"><a href="#test3"><i className="material-icons">settings</i></a></li>
                      </ul>
                    </div>
                    <div id="test1" className="col s12">
                        <div id="activity" className="col s12 active">
                          <h6 className="mt-5 mb-3 ml-3">RECENT ACTIVITY</h6>
                          <div className="activity">
                            <div className="col s3 mt-2 center-align recent-activity-list-icon">
                              <i className="material-icons white-text icon-bg-color deep-purple lighten-2">add_shopping_cart</i>
                            </div>
                            <div className="col s9 recent-activity-list-text">
                              <a href="#" className="deep-purple-text medium-small">just now</a>
                              <p className="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Jim Doe Purchased new equipments for zonal office.</p>
                            </div>
                            <div className="recent-activity-list chat-out-list row mb-0">
                              <div className="col s3 mt-2 center-align recent-activity-list-icon">
                                <i className="material-icons white-text icon-bg-color cyan lighten-2">airplanemode_active</i>
                              </div>
                              <div className="col s9 recent-activity-list-text">
                                <a href="#" className="cyan-text medium-small">Yesterday</a>
                                <p className="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Your Next flight for USA will be on 15th August 2015.</p>
                              </div>
                            </div>
                            <div className="recent-activity-list chat-out-list row mb-0">
                              <div className="col s3 mt-2 center-align recent-activity-list-icon medium-small">
                                <i className="material-icons white-text icon-bg-color green lighten-2">settings_voice</i>
                              </div>
                              <div className="col s9 recent-activity-list-text">
                                <a href="#" className="green-text medium-small">5 Days Ago</a>
                                <p className="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Natalya Parker Send you a voice mail for next conference.</p>
                              </div>
                            </div>
                            <div className="recent-activity-list chat-out-list row mb-0">
                              <div className="col s3 mt-2 center-align recent-activity-list-icon">
                                <i className="material-icons white-text icon-bg-color amber lighten-2">store</i>
                              </div>
                              <div className="col s9 recent-activity-list-text">
                                <a href="#" className="amber-text medium-small">1 Week Ago</a>
                                <p className="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Jessy Jay open a new store at S.G Road.</p>
                              </div>
                            </div>
                            <div className="recent-activity-list row">
                              <div className="col s3 mt-2 center-align recent-activity-list-icon">
                                <i className="material-icons white-text icon-bg-color deep-orange lighten-2">settings_voice</i>
                              </div>
                              <div className="col s9 recent-activity-list-text">
                                <a href="#" className="deep-orange-text medium-small">2 Week Ago</a>
                                <p className="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">voice mail for conference.</p>
                              </div>
                            </div>
                            <div className="recent-activity-list chat-out-list row mb-0">
                              <div className="col s3 mt-2 center-align recent-activity-list-icon medium-small">
                                <i className="material-icons white-text icon-bg-color brown lighten-2">settings_voice</i>
                              </div>
                              <div className="col s9 recent-activity-list-text">
                                <a href="#" className="brown-text medium-small">1 Month Ago</a>
                                <p className="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Natalya Parker Send you a voice mail for next conference.</p>
                              </div>
                            </div>
                            <div className="recent-activity-list chat-out-list row mb-0">
                              <div className="col s3 mt-2 center-align recent-activity-list-icon">
                                <i className="material-icons white-text icon-bg-color deep-purple lighten-2">store</i>
                              </div>
                              <div className="col s9 recent-activity-list-text">
                                <a href="#" className="deep-purple-text medium-small">3 Month Ago</a>
                                <p className="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">Jessy Jay open a new store at S.G Road.</p>
                              </div>
                            </div>
                            <div className="recent-activity-list row">
                              <div className="col s3 mt-2 center-align recent-activity-list-icon">
                                <i className="material-icons white-text icon-bg-color grey lighten-2">settings_voice</i>
                              </div>
                              <div className="col s9 recent-activity-list-text">
                                <a href="#" className="grey-text medium-small">1 Year Ago</a>
                                <p className="mt-0 mb-2 fixed-line-height font-weight-300 medium-small">voice mail for conference.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div id="test2" className="col s12">
                        <div id="chatapp" className="col s12 active">
                          <div className="collection border-none">
                              {results}
                          </div>
                        </div>
                    </div>
                    <div id="test3" className="col s12">
                        <div id="settings" className="col s12 active">
                          <h6 className="mt-5 mb-3 ml-3">GENERAL SETTINGS</h6>
                          <ul className="collection border-none">
                            <li className="collection-item border-none">
                              <div className="m-0">
                                <span className="font-weight-600">Notifications</span>
                                <div className="switch right">
                                  <label>
                                    <input checked="" type="checkbox" />
                                    <span className="lever"></span>
                                  </label>
                                </div>
                              </div>
                              <p>Use checkboxes when looking for yes or no answers.</p>
                            </li>
                            <li className="collection-item border-none">
                              <div className="m-0">
                                <span className="font-weight-600">Show recent activity</span>
                                <div className="switch right">
                                  <label>
                                    <input checked="" type="checkbox" />
                                    <span className="lever"></span>
                                  </label>
                                </div>
                              </div>
                              <p>The for attribute is necessary to bind our custom checkbox with the input.</p>
                            </li>
                            <li className="collection-item border-none">
                              <div className="m-0">
                                <span className="font-weight-600">Notifications</span>
                                <div className="switch right">
                                  <label>
                                    <input type="checkbox" />
                                    <span className="lever"></span>
                                  </label>
                                </div>
                              </div>
                              <p>Use checkboxes when looking for yes or no answers.</p>
                            </li>
                            <li className="collection-item border-none">
                              <div className="m-0">
                                <span className="font-weight-600">Show recent activity</span>
                                <div className="switch right">
                                  <label>
                                    <input type="checkbox" />
                                    <span className="lever"></span>
                                  </label>
                                </div>
                              </div>
                              <p>The for attribute is necessary to bind our custom checkbox with the input.</p>
                            </li>
                            <li className="collection-item border-none">
                              <div className="m-0">
                                <span className="font-weight-600">Show your emails</span>
                                <div className="switch right">
                                  <label>
                                    <input type="checkbox" />
                                    <span className="lever"></span>
                                  </label>
                                </div>
                              </div>
                              <p>Use checkboxes when looking for yes or no answers.</p>
                            </li>
                            <li className="collection-item border-none">
                              <div className="m-0">
                                <span className="font-weight-600">Show Task statistics</span>
                                <div className="switch right">
                                  <label>
                                    <input type="checkbox" />
                                    <span className="lever"></span>
                                  </label>
                                </div>
                              </div>
                              <p>The for attribute is necessary to bind our custom checkbox with the input.</p>
                            </li>
                          </ul>
                        </div>
                    </div>
                  </div>
            </div>
        )
    }
}

export default RightSideNavPage;
