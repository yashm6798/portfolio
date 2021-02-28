import React from 'react';

const workExperience = (props) => {
    return (
        <div className='workExperience' dangerouslySetInnerHTML={{ __html: props.workExperience.description }}>
        </div>
    )
}

export default workExperience;