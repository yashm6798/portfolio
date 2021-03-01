import React from 'react';
import './workExperience.css'

const workExperience = (props) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const from_date = new Date(props.workExperience.from_date);
    const to_date = new Date(props.workExperience.to_date);
    const f_from_date = months[from_date.getMonth()] + ", " + from_date.getFullYear();
    const f_to_date = months[to_date.getMonth()] + ", " + to_date.getFullYear();
    return (
        <div className='workExperience'>
            <div className='title'>
                <h3>{props.workExperience.title}<br></br></h3>
                <p>{props.workExperience.organization} <br></br> {f_from_date} - {f_to_date}</p>
            </div>
            <div className='work-description' dangerouslySetInnerHTML={{ __html: props.workExperience.description }}></div>
        </div>
    )
}

export default workExperience;