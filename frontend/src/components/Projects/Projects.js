import React from 'react';

import Project from './Project/Project'

const projects = (props) => props.projects.map( (project) => {
        return <Project />
      } );

export default projects;