import React, { Component } from 'react'

import "../css/skill.css"

export class Skills extends Component {
    render() {
        return (
            <div >
                <h1>Skills</h1>
                <div className="skill">
                    <input type="text" placeholder="Programming Language" name="pro_lang"/>
                    <input type="text" placeholder="Web Technology" name="web_tech"/>
                    <input type="text" placeholder="Database" name="db"/>
                    <input type="text" placeholder="Source Control" name="source"/>
                    <input type="text" placeholder="Language" name="lang"/>
                </div>
                <h1>Soft Skills</h1>
                <div className="soft-skill">
                    <input type="text" placeholder="soft-skills" name="soft_skills"/>
                </div>
            </div>
        )
    }
}

export default Skills
