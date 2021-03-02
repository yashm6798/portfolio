import React from 'react';
import Educations from '../Educations/Educations'
import charlie from '../../profile_image/charlie.jpg'

import './AboutMe.css'

const aboutMe = (props) => {

    const user = props.profile.user

    return (
        <div className="aboutMeContainer">
            <div className="aboutMe">
                <div className="photo">
                    <img src={charlie} alt="Charlie and Me"></img>
                </div>
                <div className="text">
                    <div className="about_me_header">
                        <h2>About Me</h2>
                        <div dangerouslySetInnerHTML={{ __html: props.profile.detailed_bio }}></div>
                    </div>
                </div>
            </div>
            <div className="educations">
                <h2>Education</h2>
                <Educations education={props.education} />
            </div>
            <div className="contact" >
                <h2>Contact Me</h2>
                <ul>
                    {user ? <li>Email: {user.email}</li> : null}
                    <li>LinkedIn: <a href = {props.profile.contact_info}>{props.profile.contact_info}</a></li>
                </ul>
            </div>
        </div>
    )
}

export default aboutMe;