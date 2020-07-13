import React, { Component } from "react";
import "../css/certificate.css";

export class Certificates extends Component {
  render() {
    return (
      <div>
        <h1>Certificates</h1>
        <div className="certificate">
          <input type="text" placeholder="About" />
          <input type="url" placeholder="Link" />
        </div>
      </div>
    );
  }
}

export default Certificates;
