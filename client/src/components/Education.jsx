import React, { Component } from 'react'
import "../css/education.css"

export class Education extends Component {
    render() {
        return (
            <div className="education">
                <h1>Education</h1>
                <input type="text" placeholder="Degree" name="degree"/>
                <input type="text" placeholder="Institute Name" name="insti_name"/>
            </div>
        )
    }
}

export default Education
