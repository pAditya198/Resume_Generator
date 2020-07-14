import React, { Component } from 'react'

import '../css/project.css'

export class Projects extends Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <div className="project">
                    <input type="text" placeholder="Name" name="pro_name" />
                    <input type="text" placeholder="About" name="pro_about"/>
                    <input type="url" placeholder="Project Link" name="pro_link" />
                    <input type="url" placeholder="GitHub Link" name="pro_git_link" />
                </div>
            </div>
        )
    }
}

export default Projects
