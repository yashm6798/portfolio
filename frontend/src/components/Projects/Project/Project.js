import React from 'react';
import './Project.css'

const project = (props) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const from_date = new Date(props.project.from_date);
    const to_date = new Date(props.project.to_date);
    const f_from_date = months[from_date.getMonth()] + ", " + from_date.getFullYear();
    const f_to_date = months[to_date.getMonth()] + ", " + to_date.getFullYear();
    
    return (
        <div className='project'>
            <h3 className="project-title">{props.project.title }</h3>
            <p className="project-text">{props.project.organization}<br></br>{f_from_date} - {f_to_date}</p>
            <div className="project-description" dangerouslySetInnerHTML={{ __html: props.project.description }}></div>
        </div>
    )
}

export default project;