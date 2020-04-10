import React, { Component } from "react";
import { saveAs } from "file-saver";
import "./App.css";
import back from "./back";

class App extends Component {
  state = {
    name: "",
    gmail: "",
    twitter: "",
    linkdin: "",
    github: "",
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  createAndDownloadPDF = async () => {
    return await back
      .post("/create-pdf", this.state)
      .then(() => back.get("fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        console.log([res.data]);
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });

        saveAs(pdfBlob, "ResumePdf.pdf");
      });
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
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
