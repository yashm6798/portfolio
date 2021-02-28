import React from 'react';
import './Project.css'

const project = (props) => {
    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const from_date = new Date(props.project.from_date);
    const to_date = new Date(props.project.to_date);
    const f_from_date = months[from_date.getMonth()] + ", " + from_date.getFullYear();
    const f_to_date = months[to_date.getMonth()] + ", " + to_date.getFullYear();
    return (
        <div className='project'>
            <table className='projectDetails'>
                <thead>
                    <tr>
                        <th id='project_title'>{props.project.title}, {props.project.organization}</th>
                        <th id='project_duration'>{f_from_date} - {f_to_date}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="2" id='project_description' dangerouslySetInnerHTML = {{ __html: props.project.description }}></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default project;