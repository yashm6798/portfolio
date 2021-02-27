import './App.css';
import React, { Component } from 'react';
import Profile from '../components/Profile/Profile'
import Articles from '../components/Articles/Articles'
import WorkExperiences from '../components/WorkExperiences/WorkExperiences'
import Projects from '../components/Projects/Projects'
import articles from '../components/Articles/Articles';
import workExperiences from '../components/WorkExperiences/WorkExperiences';
import projects from '../components/Projects/Projects';

class App extends Component {

  state = {
    profileView : true,
    articleView : false,
    workExperienceView : false,
    projectView : false
  }

  viewArticleHandler = () => {
    this.setState( {
      profileView : false,
      articleView : true,
      workExperienceView : false,
      projectView : false
    })
  }

  vieWorkExperienceHandler = () => {
    this.setState( {
      profileView : false,
      articleView : false,
      workExperienceView : true,
      projectView : false
    })
  }

  viewProjectHandler = () => {
    this.setState( {
      profileView : false,
      articleView : false,
      workExperienceView : false,
      projectView : true
    })
  }

  viewProfileHandler = () => {
    this.setState( {
      profileView : true,
      articleView : false,
      workExperienceView : false,
      projectView : false
    })
  }

  render(){

    let profile = null
    let articles = null
    let projects = null
    let workExperiences = null
    if (this.state.profileView){
      profile = <Profile 
              viewArticles = {this.viewArticleHandler}
              viewWorkExperience = {this.vieWorkExperienceHandler}
              viewProjects = {this.viewProjectHandler}/>
    }
    else if (this.state.articleView){
      const tempArticles = ['a', 'b']
      articles = <Articles 
              articles = {tempArticles}
              viewWorkExperience = {this.vieWorkExperienceHandler}
              viewProjects = {this.viewProjectHandler}
              viewProfile = {this.viewProfileHandler}/>
    }
    else if (this.state.workExperienceView){
      const tempWorkExperiences = ['a', 'b']
      workExperiences = <WorkExperiences 
              workExperiences = {tempWorkExperiences} 
              viewArticles = {this.viewArticleHandler}
              viewProjects = {this.viewProjectHandler}
              viewProfile = {this.viewProfileHandler}/>
    }
    else if (this.state.projectView){
      const tempProjects = ['a', 'b']
      projects = <Projects 
              projects = {tempProjects} 
              viewArticles = {this.viewArticleHandler}
              viewWorkExperience = {this.vieWorkExperienceHandler}
              viewProfile = {this.viewProfileHandler}/>
    }
    return (
      <div className="App">
        {profile}
        {articles}
        {workExperiences}
        {projects}
      </div>
    );

  }
}

export default App;
