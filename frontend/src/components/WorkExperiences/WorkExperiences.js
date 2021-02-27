import React from 'react';

import WorkExperience from './WorkExperience/WorkExperience'

const workExperiences = (props) => props.workExperiences.map( (workExperience) => {
        return <WorkExperience />
      } );

export default workExperiences;