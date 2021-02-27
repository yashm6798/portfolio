import './App.css';
import React, { Component } from 'react';
import Profile from '../components/Profile/Profile'
import Articles from '../components/Articles/Articles'
import WorkExperiences from '../components/WorkExperiences/WorkExperiences'
import Projects from '../components/Projects/Projects'
import axios from "axios";

class App extends Component {

  state = {
    profileView : true,
    articleView : false,
    workExperienceView : false,
    projectView : false,
    profile : [],
    projects : [],
    articles : [],
    workExperiences : []
  }

  componentDidMount() {
    this.refreshPage();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.articleView !== this.state.articleView || prevState.workExperienceView !== this.state.workExperienceView || prevState.projectView !== this.state.projectView || prevState.profileView !== this.state.profileView){
      this.refreshPage()
    }
  }

  refreshPage = () => {

    if (this.state.profileView) {
      axios
        .get("/api/profile/")
        .then((res) => this.setState({ profile: res.data[0] }))
        .catch((err) => console.log(err));
    }

    else if (this.state.articleView) {
      axios
        .get("/api/articles/")
        .then((res) => this.setState({ articles: res.data }))
        .catch((err) => console.log(err));
    }

    else if (this.state.workExperienceView) {
      axios
        .get("/api/work-experience/")
        .then((res) => this.setState({ workExperiences: res.data }))
        .catch((err) => console.log(err));
    }

    else if (this.state.projectView) {
      axios
        .get("/api/projects/")
        .then((res) => this.setState({ projects: res.data }))
        .catch((err) => console.log(err));
    }
  };

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
              viewProjects = {this.viewProjectHandler}
              profile = {this.state.profile}/>
    }
    else if (this.state.articleView){
      articles = <Articles 
              articles = {this.state.articles}
              viewWorkExperience = {this.vieWorkExperienceHandler}
              viewProjects = {this.viewProjectHandler}
              viewProfile = {this.viewProfileHandler}/>
    }
    else if (this.state.workExperienceView){
      workExperiences = <WorkExperiences 
              workExperiences = {this.state.workExperiences} 
              viewArticles = {this.viewArticleHandler}
              viewProjects = {this.viewProjectHandler}
              viewProfile = {this.viewProfileHandler}/>
    }
    else if (this.state.projectView){
      projects = <Projects 
              projects = {this.state.projects} 
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