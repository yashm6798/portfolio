import React from 'react';
import './Contact.css'

const aboutMe = (props) => {

    const user = props.profile.user

    return (
        <div className="contact" >
            <h2>Contact Me</h2>
            <p>If you have any suggestions for an article topic or want to collaborate on a project, feel free to reach out to me via email or connect on LinkedIn!</p>
            <ul>
                {user ? <li>Email: {user.email}</li> : null}
                <li>LinkedIn: <a href={props.profile.contact_info}>{props.profile.contact_info}</a></li>
            </ul>
        </div>
    )
}

export default aboutMe;