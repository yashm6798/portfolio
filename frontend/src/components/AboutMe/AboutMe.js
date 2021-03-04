import React, { Component } from 'react';
import Educations from '../Educations/Educations'
import WorkExperiences from '../WorkExperiences/WorkExperiences'
import charlie from '../../profile_image/charlie.jpg'
import { SectionsContainer, Section } from 'react-fullpage';

import './AboutMe.css'

class aboutMe extends Component {

    render() {
        let options = {
            sectionClassName: 'section',
            anchors: ['About-Me', 'Education', 'Work-Experience'],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            scrollOverflow: true
        }
        const x = window.matchMedia("(min-width: 768px)")
        return (
            <div className="aboutMeContainer">
                { x.matches ? (
                    <div className="laptop">
                        <SectionsContainer className="container" {...options}>
                            <Section color="#062f4f">
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
                            </Section>

                            <Section color="#813772">
                                <div className="educations">
                                    <h2>Education</h2>
                                    <Educations education={this.props.education} />
                                </div>
                            </Section>

                            <Section color="#8b1c00">
                                <div className="workExperiences">
                                    <h2>Professional Experience</h2>
                                    <WorkExperiences workExperiences={this.props.workExperience} />
                                </div>
                            </Section>
                        </SectionsContainer>
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

