import React from "react";
import Script from "../../_helpers/script";

export class ModalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        Script.modal();
    }

    render() {
        const header = this.props.header;
        const message = this.props.message;
        const confirm = this.props.confirm;
        const cancel = this.props.cancel;
        return (
          <div id="modal-popup" className="modal">
            <div className="modal-content">
              <h4>{header}</h4>
              <p>{message}</p>
            </div>
            <div className="modal-footer">
              {cancel} {confirm}
            </div>
           </div>
        )
    }
}
