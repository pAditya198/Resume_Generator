import React, { Component } from 'react'

import '../css/project.css'

export class Projects extends Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <div className="project">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="About" />
                    <input type="url" placeholder="Project Link" />
                    <input type="url" placeholder="GitHub Link" />
                </div>
            </div>
        )
    }
}

export default Projects
