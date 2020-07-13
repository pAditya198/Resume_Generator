import React, { Component } from 'react'

import "../css/experience.css"

export class Experience extends Component {
    render() {
        return (
            <div className="experience">
                <h1>Experience</h1>
                <input type="text" placeholder="Field" />
                <input type="date" placeholder="Date" />
                <input type="text" placeholder="experience" />
            </div>
        )
    }
}

export default Experience
