import React, { Component } from 'react'

import "../css/skill.css"

export class Skills extends Component {
    render() {
        return (
            <div >
                <h1>Skills</h1>
                <div className="skill">
                    <input type="text" placeholder="Programming Language"/>
                    <input type="text" placeholder="Web Technology"/>
                    <input type="text" placeholder="Database"/>
                    <input type="text" placeholder="Source Control"/>
                    <input type="text" placeholder="Language"/>
                </div>
                <h1>Soft Skills</h1>
                <div className="soft-skill">
                    <input type="text" placeholder="soft-skills"/>
                </div>
            </div>
        )
    }
}

export default Skills
