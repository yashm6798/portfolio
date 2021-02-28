import React, { Component } from 'react';
import Profile from '../../components/Profile/Profile';
import Articles from '../../components/Articles/Articles';
import WorkExperiences from '../../components/WorkExperiences/WorkExperiences';
import Projects from '../../components/Projects/Projects';
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";
import './portfolio.css'

class Portfolio extends Component {

    state = {
        tabs: { "home": true, "projects": false, "workExperience": false, "articles": false },
        profile: [],
        projects: [],
        articles: [],
        workExperiences: []
    }

    componentDidMount() {
        this.refreshPage();
        const path = window.location.pathname
        const activeTab = path.slice(1, path.length)
        this.switchTab(activeTab)
    }

    refreshPage = () => {

        axios
            .get("/api/profile/")
            .then((res) => this.setState({ profile: res.data[0] }))
            .catch((err) => console.log(err));


        axios
            .get("/api/articles/")
            .then((res) => this.setState({ articles: res.data }))
            .catch((err) => console.log(err));


        axios
            .get("/api/work-experience/")
            .then((res) => this.setState({ workExperiences: res.data }))
            .catch((err) => console.log(err));


        axios
            .get("/api/projects/")
            .then((res) => this.setState({ projects: res.data }))
            .catch((err) => console.log(err));
    };

    switchTab = (tabName) => {
        if (tabName === "home") {
            this.setState(
                { tabs: { "home": true, "projects": false, "workExperience": false, "articles": false } });
        }
        else if (tabName === "projects") {
            this.setState(
                { tabs: { "home": false, "projects": true, "workExperience": false, "articles": false } });
        }
        else if (tabName === "workExperience") {
            this.setState(
                { tabs: { "home": false, "projects": false, "workExperience": true, "articles": false } });
        }
        else if (tabName === "articles") {
            this.setState(
                { tabs: { "home": false, "projects": false, "workExperience": false, "articles": true } });
        }
    }

    render() {
        return (
            <div className="portfolio">
                <div className="topnav">

                    <ul>
                        <li>
                            <Link className={this.state.tabs.projects ? "active" : null} onClick={() => this.switchTab('projects')} to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link className={this.state.tabs.workExperience ? "active" : null} onClick={() => this.switchTab('workExperience')} to="/workExperience">Work Experience</Link>
                        </li>
                        <li>
                            <Link className={this.state.tabs.articles ? "active" : null} onClick={() => this.switchTab('articles')} to="/articles">Articles</Link>
                        </li>
                        <li>
                            <Link className={this.state.tabs.home ? "active" : null} onClick={() => this.switchTab('home')} id="home_name" to="/">Yash Mehta</Link>
                        </li>
                    </ul>
                </div>

                <div className="page-content">
                    <Switch>
                        <Route exact path="/">

                            <Profile
                                profile={this.state.profile} />

                        </Route>

                        <Route path="/articles">

                            <div className="container">
                                <div className="container_title">
                                    <h2>My Articles</h2>
                                    <p>Here are some articles I have written about privacy. Click to read the full article. I welcome any suggestions you have for a new article.</p>
                                </div>
                                <div className="topic_container">
                                <Articles
                                    articles={this.state.articles} />
                                </div>
                            </div>

                        </Route>

                        <Route path="/workExperience">

                            <div className="container">
                                <WorkExperiences
                                    workExperiences={this.state.workExperiences} />
                            </div>

                        </Route>

                        <Route path="/projects">

                            <div className="container">
                                <Projects
                                    projects={this.state.projects} />
                            </div>

                        </Route>
                    </Switch>
                </div>
            </div>
        );

    }
}

export default Portfolio;