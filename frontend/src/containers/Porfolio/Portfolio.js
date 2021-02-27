import React, { Component } from 'react';
import Profile from '../../components/Profile/Profile';
import Articles from '../../components/Articles/Articles';
import WorkExperiences from '../../components/WorkExperiences/WorkExperiences';
import Projects from '../../components/Projects/Projects';
import axios from "axios";
import { Switch, Route, Link } from "react-router-dom";

class Portfolio extends Component {

    state = {
        profile: [],
        projects: [],
        articles: [],
        workExperiences: []
    }

    componentDidMount() {
        this.refreshPage();
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

    render() {
        return (
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/articles">Articles</Link>
                        </li>
                        <li>
                            <Link to="/work-experience">Work Experience</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                    </ul>

                    <hr />
                    <Switch>
                        <Route exact path="/">

                            <Profile
                                profile={this.state.profile} />

                        </Route>

                        <Route path="/articles">

                            <Articles
                                articles={this.state.articles} />

                        </Route>

                        <Route path="/work-experience">

                            <WorkExperiences
                                workExperiences={this.state.workExperiences} />

                        </Route>

                        <Route path="/projects">

                            <Projects
                                projects={this.state.projects}/>
                                
                        </Route>
                    </Switch>
                </div>
        );

    }
}

export default Portfolio;