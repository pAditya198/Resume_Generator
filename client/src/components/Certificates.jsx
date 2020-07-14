import React, { Component } from "react";
import "../css/certificate.css";

export class Certificates extends Component {
  render() {
    return (
      <div>
        <h1>Certificates</h1>
        <div className="certificate">
          <input type="text" placeholder="About" name="certificate_about" />
          <input type="url" placeholder="Link" name="certificate_link" />
        </div>
      </div>
    );
  }
}

export default Certificates;
