import React from 'react';

const profile = (props) => {
    const user = props.profile.user
    return (
        <div className='profile'>
            <h2>Welcome to my web existence!</h2>
            {user ? <p>First Name: {user.first_name}</p> : null}
            <button onClick={props.viewArticles}>View my articles!</button>
            <button onClick={props.viewProjects}>View my projects!</button>
            <button onClick={props.viewWorkExperience}>View my work experience!</button>
        </div>
    )
}

export default profile;