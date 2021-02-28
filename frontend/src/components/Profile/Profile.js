import React from 'react';
import './Profile.css'
import dp from '../../profile_image/dp.jpeg'

const profile = (props) => {
    const user = props.profile.user
    return (
        <div className="profile">
            <div className = "photo">
                <img src={dp} alt=""></img>
            </div>
            <div className = "text">
                <h1> { user ? "Hey, I'm ".concat(user.first_name, ".") : null} </h1>
                <div className = "bio" dangerouslySetInnerHTML={{__html: props.profile.bio}}>
                </div>
            </div>
        </div>
    )
}

export default profile;