import React from 'react';
import './workExperience.css'

const workExperience = (props) => {
    const months = ["JAN", "FEB", "MAR","APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const from_date = new Date(props.workExperience.from_date);
    const to_date = new Date(props.workExperience.to_date);
    const f_from_date = months[from_date.getMonth()] + ", " + from_date.getFullYear();
    const f_to_date = months[to_date.getMonth()] + ", " + to_date.getFullYear();
    return (
        <div className='workExperience'>
            <table className='workExperienceDetails'>
                <thead>
                    <tr>
                        <th id='work_title'>{props.workExperience.title}, {props.workExperience.organization}</th>
                        <th id='work_duration'>{f_from_date} - {f_to_date}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="2" id='work_description' dangerouslySetInnerHTML = {{ __html: props.workExperience.description }}></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default workExperience;