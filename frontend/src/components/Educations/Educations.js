import React from 'react';
import Education from './Education/Education';

const educations = (props) => props.education.map( (education) => {
        return <Education education={education} key={education.id}/>
      } );

export default educations;