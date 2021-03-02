import React from 'react';
import './Education.css'

const education = (props) => {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const from_date = new Date(props.education.from_date);
    const to_date = new Date(props.education.to_date);
    const f_from_date = months[from_date.getMonth()] + ", " + from_date.getFullYear();
    const f_to_date = months[to_date.getMonth()] + ", " + to_date.getFullYear();
    const gpa_string = "GPA: " + props.education.gpa;
    return (
        <div className='education'>
            <table className='educationDetails'>
                <thead>
                    <tr>
                        <th id='education_organization'>{props.education.university}</th>
                        <th id='education_duration'>{f_from_date} - {f_to_date}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id='education_city' >{props.education.city}</td>
                        <td id='education_gpa'> {gpa_string}</td>
                    </tr>
                </tbody>
            </table>
            <div id="education_course_container">
                Some Courses:
                <div id="education_courses" dangerouslySetInnerHTML={{ __html: props.education.courses }}></div>
            </div>

            <div className='educationDetailsMobile'>
                <div className="education_detail_mobile" id='education_organization'>{props.education.university}</div>
                <div className="education_detail_mobile" id='education_city' >{props.education.city}</div>
                <div className="education_detail_mobile" id='education_duration'>{f_from_date} - {f_to_date}</div>
                <div className="education_detail_mobile" id='education_gpa'> {gpa_string}</div>
                <div id="education_course_container_mobile">
                    Some Courses:
                <div id="education_courses" dangerouslySetInnerHTML={{ __html: props.education.courses }}></div>
                </div>
            </div>
        </div>
    )
}

export default education;