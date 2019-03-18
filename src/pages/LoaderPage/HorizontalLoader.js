import React from "react";

export class HorizontalLoader extends React.Component {
    render() {
        return (
            <div className="progress">
              <div className="indeterminate"></div>
          </div>
        )
    }
}
