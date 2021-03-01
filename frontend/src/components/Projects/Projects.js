import React from 'react';

import Project from './Project/Project'

const projects = (props) => props.projects.map( (project) => {
        return <Project 
          project={project} 
          key={project.id}
          showModal={props.showModal}/>
      } );

export default projects;