import React from "react";

export class SpinnerLoader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.meta}>
                <div className={this.props.type}>
                  <div className="circle-clipper left">
                    <div className="circle"></div>
                  </div><div className="gap-patch">
                    <div className="circle"></div>
                  </div><div className="circle-clipper right">
                    <div className="circle"></div>
                  </div>
                </div>
            </div>
        )
    }
}
