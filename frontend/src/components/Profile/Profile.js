import React from 'react';

const profile = (props) => {
    return (
        <div className='profile'>
            <h2>Welcome to my web existence!</h2>
            <button onClick={props.viewArticles}>View my articles!</button>
            <button onClick={props.viewProjects}>View my projects!</button>
            <button onClick={props.viewWorkExperience}>View my work experience!</button>
        </div>
    )
}

export default profile;