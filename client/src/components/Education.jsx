import React, { Component } from 'react'
import "../css/education.css"

export class Education extends Component {
    render() {
        return (
            <div className="education">
                <h1>Education</h1>
                <input type="text" placeholder="Degree"/>
                <input type="text" placeholder="Institute Name"/>
            </div>
        )
    }
}

export default Education
