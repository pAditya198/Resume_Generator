import React, { Component } from "react";
import { saveAs } from "file-saver";
import "./App.css";
import back from "./back";
import Education from "./components/Education";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";

class App extends Component {
  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  createAndDownloadPDF = async (data) => {
    return await back
      .post("/create-pdf", data)
      .then(() => back.get("fetch-pdf", { responseType: "blob" }))
      .then((res) => {
        // console.log([res.data]);
        const pdfBlob = new Blob([res.data], { type: "application/pdf" });
        saveAs(pdfBlob, "resume.pdf");
      });
  };
  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <form
          id="form"
          onSubmit={(event) => {
            event.preventDefault();
            const payload = {};
            // console.log(event.target.length)
            for (const i of event.target) {
              if (i.name !== "button") payload[i.name] = i.value;
              // payload.append()
            }
            console.log(payload);
            this.createAndDownloadPDF(payload);
          }}
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            // value={this.state.name}
            // onChange={this.handleChange}
          />

          <input
            type="email"
            placeholder="Gmail"
            name="gmail"
          />
          <input
            type="text"
            placeholder="Twitter"
            name="twitter"
          />
          <input
            type="text"
            placeholder="Linkdin"
            name="linkdin"
          />
          <input
            type="text"
            placeholder="Github"
            name="github"
          />
          <Experience />
          <Education />
          <Skills />
          <Certificates />
          <Projects />
          <button type="submit" name="button">Download PDF</button>
        </form>
      </div>
    );
  }
}

export default App;
