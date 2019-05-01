import React from 'react';
import { connect } from 'react-redux';
import config from 'config';
import { articleActions } from '../../_actions';
import LeftSideNavPage from '../LeftSideNavPage/LeftSideNavPage'
import Header from '../HeaderPage/HeaderPage'
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import Script from '../../_helpers/script';
import { FabPage } from "../FabPage";
import io from "socket.io-client";
import * as M from "../../../assets/admin-assets/js/materialize.min";
import {SocketProvider} from "socket.io-react";
import {BreadCrumbPage} from "../BreadCrumbPage";
import {SpinnerLoader} from "../LoaderPage/SpinnerLoader";
import RightSideNavPage from "../RightSideNavPage/RightSideNavPage";
import {userActions} from "../../_actions/user.actions";

am4core.useTheme(am4themes_animated);

let namespace = '/notification';
const socket = io.connect(`${config.apiUrl}`+namespace);
const current_user = JSON.parse(localStorage.getItem('user'));
if (location.pathname !== '/login') {

    socket.on('connect', function() {
        socket.emit('my event', {
            data: current_user.user.id
        });
        // socket.emit('join', {
        //     username: current_user.user.name,
        //     room: 'test room'
        // });
    });

    socket.on('disconnect', function () {
        console.log("disconnected");
        socket.emit('user disconnect', {
            data: 'Disconnected '+ current_user.user.name
        });
    });

    socket.on('connection response', function (data) {
        if (data.status === "connect") {
            console.log("Connected");
            if (data.id !== current_user.user.id)
                M.toast({html: data.message});
        }
        if (data.status === "disconnect") {
            console.log("Disconnected");
            if (data.id !== current_user.user.id)
                M.toast({html: data.message});
        }
    });

    socket.on('message', function(data){
        console.log(data);
        if (data.status === "Success") {
            if (data.id !== current_user.user.id)
                M.toast({html: 'Success'});
            console.log("Success")
        } else if (data.status === "Warning") {
            if (data.id !== current_user.user.id)
                M.toast({html: 'Warning'});
            console.log("Warning")
        }else if (data.status === "Error") {
            if (data.id !== current_user.user.id)
                M.toast({html: 'Error'});
            console.log("Error")
        }else if (data.status === "pending") {
            if (data.id !== current_user.user.id)
                M.toast({html: 'Pending Article'});
            console.log(data);
        }else if (data.status === "rejected") {
            if (data.id !== current_user.user.id)
                M.toast({html: 'Rejected Article'});
            console.log(data);
        }else if (data.status === "published") {
            if (data.id !== current_user.user.id)
                M.toast({html: 'Published Article'});
            console.log(data);
        }else if (data.status === "deleted") {
            if (data.id !== current_user.user.id)
                M.toast({html: 'Deleted Article'});
            console.log(data);
        }
    });
}

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            daily_orders: null
        }
    }

    componentDidMount() {
        // Add important scripts for layout
        Script.toggle();
        Script.collapse();
        Script.tabs();
        Script.fab();

        // Modify some styles on home entry
        document.body.style.display = "block";
        document.documentElement.style.display = "block";
        document.body.style.backgroundColor = "#f9f9f9";

        this.props.dispatch(userActions.getOnlineUsers());

        this.renderPublishedDataBasedChart();

        socket.on('stats message', function(data){

        }.bind(this));

        socket.on('online users', function(data) {
            if (data) {
                this.setState({online_users: data});
            }
        }.bind(this));
    }


    componentWillUnmount() {
        if(this.orders_chart)
            this.orders_chart.dispose();
    }

    componentDidUpdate(oldProps) {
        // Handle chart updates
    }

    createDataBasedChart(selector, url) {
        let chart = am4core.create(selector, am4charts.XYChart);

        chart.paddingRight = 20;

        let data = this.state.daily_orders;
        if(data) {
            chart.data = data;
        } else {
            chart.dataSource.url = url;
            chart.dataSource.parser = new am4core.JSONParser();
            chart.dataSource.parser.options.emptyAs = 0;
        }

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;

        let series = chart.series.push(new am4charts.LineSeries());
        series.dataFields.dateX = "date";
        series.dataFields.valueY = "value";
        series.tooltipText = "{valueY.value}";
        series.strokeWidth = 2;
        series.minBulletDistance = 15;

        series.tooltip.background.cornerRadius = 20;
        series.tooltip.background.strokeOpacity = 0;
        series.tooltip.pointerOrientation = "vertical";
        series.tooltip.label.minWidth = 40;
        series.tooltip.label.minHeight = 40;
        series.tooltip.label.textAlign = "middle";
        series.tooltip.label.textValign = "middle";

        let bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 4;
        bullet.circle.fill = am4core.color("#fff");

        let bullethover = bullet.states.create("hover");
        bullethover.properties.scale = 1.3;

        chart.cursor = new am4charts.XYCursor();

        chart.scrollbarY = new am4core.Scrollbar();
        chart.scrollbarY.parent = chart.leftAxesContainer;
        chart.scrollbarY.toBack();

        let scrollbarX = new am4charts.XYChartScrollbar();
        scrollbarX.series.push(series);
        chart.scrollbarX = scrollbarX;
        chart.scrollbarX.parent = chart.bottomAxesContainer;

        chart.exporting.menu = new am4core.ExportMenu();
        chart.exporting.menu.align = "right";
        chart.exporting.menu.verticalAlign = "top";

        chart.events.on("datavalidated", function () {
            dateAxis.zoom({start:0.98, end:1});
        });

        return chart;
    }

    renderPublishedDataBasedChart() {
        let chart = this.createDataBasedChart("chartdiv", `${config.apiUrl}/order/daily/count/`);
        this.order_chart = chart;
    }

    render() {
        const {
          orders_today, orders_yesterday, orders_this_month, orders_last_month, orders_this_year, orders_last_year,
          online_users
        } = this.props;

        const current_user = JSON.parse(localStorage.getItem('user'));

        let online;
        if (this.state.online_users) {
            online = this.state.online_users.results;
        } else if (online_users.items) {
            online = online_users.items.results;
        }

        return (
          <SocketProvider socket={socket}>
            <div>
            <FabPage />
            <Header />
            <div id="main">
              <div className="wrapper">
                <BreadCrumbPage />
                <LeftSideNavPage />
                <section id="content">
                  <div className="container">
                    <div id="card-stats">
                      <div className="row">
                        <div className="col s12 m6 l2">
                          <div className="card">
                            <div className="card-content light-blue white-text">
                              <p className="card-stats-title" style={{'fontSize': '12px'}}>Orders Today</p>
                              <h4 className="card-stats-number">{orders_today}</h4>
                              {/*<p className="card-stats-compare">*/}
                                {/*<i className="material-icons">keyboard_arrow_up</i> 15%*/}
                                {/*<span className="cyan text text-lighten-5">from yesterday</span>*/}
                              {/*</p>*/}
                            </div>
                          </div>
                        </div>
                        <div className="col s12 m6 l2">
                          <div className="card">
                            <div className="card-content light-blue lighten-1 white-text">
                              <p className="card-stats-title" style={{'fontSize': '12px'}}>Orders Yesterday</p>
                              <h4 className="card-stats-number">{orders_yesterday}</h4>
                              {/*<p className="card-stats-compare">*/}
                                {/*<i className="material-icons">keyboard_arrow_up</i> 15%*/}
                                {/*<span className="cyan text text-lighten-5">from yesterday</span>*/}
                              {/*</p>*/}
                            </div>
                          </div>
                        </div>
                        <div className="col s12 m6 l2">
                          <div className="card">
                            <div className="card-content light-blue white-text">
                              <p className="card-stats-title" style={{'fontSize': '12px'}}>Orders This Month</p>
                              <h4 className="card-stats-number">{orders_this_month}</h4>
                              {/*<p className="card-stats-compare">*/}
                                {/*<i className="material-icons">keyboard_arrow_up</i> 70%*/}
                                {/*<span className="red-text text-lighten-5">last month</span>*/}
                              {/*</p>*/}
                            </div>
                          </div>
                        </div>
                        <div className="col s12 m6 l2">
                          <div className="card">
                            <div className="card-content light-blue white-text">
                              <p className="card-stats-title" style={{'fontSize': '12px'}}>Orders Last Month</p>
                              <h4 className="card-stats-number">{orders_last_month}</h4>
                              {/*<p className="card-stats-compare">*/}
                                {/*<i className="material-icons">keyboard_arrow_up</i> 80%*/}
                                {/*<span className="teal-text text-lighten-5">from yesterday</span>*/}
                              {/*</p>*/}
                            </div>
                          </div>
                        </div>
                        <div className="col s12 m6 l2">
                          <div className="card">
                            <div className="card-content light-blue white-text">
                              <p className="card-stats-title" style={{'fontSize': '12px'}}>Orders This Year</p>
                              <h4 className="card-stats-number">{orders_this_year}</h4>
                              {/*<p className="card-stats-compare">*/}
                                {/*<i className="material-icons">keyboard_arrow_down</i> 3%*/}
                                {/*<span className="deep-orange-text text-lighten-5">from last month</span>*/}
                              {/*</p>*/}
                            </div>
                          </div>
                        </div>
                        <div className="col s12 m6 l2">
                          <div className="card">
                            <div className="card-content light-blue white-text">
                              <p className="card-stats-title" style={{'fontSize': '12px'}}>Orders Last Year</p>
                              <h4 className="card-stats-number">{orders_last_year}</h4>
                              {/*<p className="card-stats-compare">*/}
                                {/*<i className="material-icons">keyboard_arrow_down</i> 3%*/}
                                {/*<span className="deep-orange-text text-lighten-5">from last month</span>*/}
                              {/*</p>*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                      <div className="row" style={{ background: '#FFFFFF', padding: '0px' }}>
                        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
                      </div>
                  </div>
                </section>
                <RightSideNavPage online_users={online} current_user={current_user} />
              </div>
            </div>
          </div>
          </SocketProvider>
        );
    }
}

function mapStateToProps(state) {
    const {
      orders_today, orders_yesterday, orders_this_month, orders_last_month, orders_this_year, orders_last_year,
      online_users
    } = state;

    return {
      orders_today, orders_yesterday, orders_this_month, orders_last_month, orders_this_year, orders_last_year,
      online_users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
