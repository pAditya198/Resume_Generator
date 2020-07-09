import React, { Component } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import "./App.css";

class App extends Component {
  state = {
    name: "",
    gmail: "",
    twitter: "",
    linkdin: "",
    github: ""
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  createAndDownloadPDF = () => {
    axios
      .post("/create-pdf", this.state)
      .then(() => axios.get("fetch-pdf", { responseType: "blob" }))
      .then(res => {
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "newPdf.pdf");
      });
  };
  render() {
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={this.handleChange}
        />

        <input
          type="url"
          placeholder="Gmail"
          name="gmail"
          onChange={this.handleChange}
        />
        <input
          type="url"
          placeholder="Twitter"
          name="twitter"
          onChange={this.handleChange}
        />
        <input
          type="url"
          placeholder="Linkdin"
          name="linkdin"
          onChange={this.handleChange}
        />
        <input
          type="url"
          placeholder="Github"
          name="github"
          onChange={this.handleChange}
        />
        <button onClick={this.createAndDownloadPDF}>Download PDF</button>
      </div>
    );
  }
}

export default App;
