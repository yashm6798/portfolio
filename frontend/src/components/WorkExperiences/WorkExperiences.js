import React from 'react';
import WorkExperience from './WorkExperience/WorkExperience'

const workExperiences = (props) => props.workExperiences.map( (workExperience) => {
        return <WorkExperience workExperience = {workExperience} key={workExperience.id}/>
      } );

export default workExperiences;