import React, { Component } from 'react';
import Educations from '../Educations/Educations'
import WorkExperiences from '../WorkExperiences/WorkExperiences'
import charlie from '../../profile_image/charlie.jpg'

import './AboutMe.css'

class aboutMe extends Component {

    render() {
        const x = window.matchMedia("(min-width: 768px)")
        return (
            <div className="aboutMeContainer">
                { x.matches ? (
                    <div className="laptop">
                        <div className="aboutMe">
                            <div className="photo">
                                <img src={charlie} alt="Charlie and Me"></img>
                            </div>
                            <div className="text">
                                <div className="about_me_header">
                                    <h2>About Me</h2>
                                    <div dangerouslySetInnerHTML={{ __html: this.props.profile.detailed_bio }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="educations">
                            <h2>Education</h2>
                            <Educations education={this.props.education} />
                        </div>

                        <div className="workExperiences">
                            <h2>Professional Experience</h2>
                            <WorkExperiences workExperiences={this.props.workExperience} />
                        </div>
                    </div>
                ) : (
                        <div className="mobile">
                            <div className="aboutMe">
                                <div className="photo">
                                    <img src={charlie} alt="Charlie and Me"></img>
                                </div>
                                <div className="text">
                                    <div className="about_me_header">
                                        <h2>About Me</h2>
                                        <div dangerouslySetInnerHTML={{ __html: this.props.profile.detailed_bio }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="educations">
                                <h2>Education</h2>
                                <Educations education={this.props.education} />
                            </div>

                            <div className="workExperiences">
                                <h2>Professional Experience</h2>
                                <WorkExperiences workExperiences={this.props.workExperience} />
                            </div>
                        </div>)}
            </div>
        )
    }
}

export default aboutMe;

