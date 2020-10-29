import React from "react"
import {IMain} from "../Models/Header"

const divStyle = {
    backgroundImage:'url(' + process.env.PUBLIC_URL + '/images/bg-home.jpg)'
}

function About(props: IMain) {
    return (
        <section>
            <section className="bg-home d-flex align-items-center" style={divStyle} id="home">
                <div className="bg-overlay"/>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 text-center">
                            <div className="title-heading mt- mt-sm-0">
                                <img src={process.env.PUBLIC_URL + 'images/hero.jpeg'} className="img-fluid rounded-circle" alt=""/>
                                <h1 className="heading text-primary mt-3">{props.name}</h1>
                                <h6 className="sub-title text-light title-dark">I'm a Istanbul based <span
                                    className="simple-text-rotate text-primary">{props.occupation}</span>.</h6>
                                <div className="mt-4">
                                    <a href={process.env.PUBLIC_URL + 'images/hero.jpeg'} className="btn btn-pill btn-primary">Download Resume
                                        <i data-feather="download" className="fea icon-sm"/>
                                    </a>
                                </div>
                                <div className="mt-4">
                                    <ul className="list-unstyled mb-0 mt-2 mt-sm-0 social-icon light-social-icon">
                                        {props.social.map((item, i) => {
                                            return (
                                                <li key={i} className="list-inline-item">
                                                    <a href={item.url} target="_blank" rel="noreferrer">
                                                        <i className={item.className}/>
                                                    </a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="about">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title">
                                <div className="titles">
                                    <h4 className="title title-line text-uppercase mb-4 pb-4">Work Participation</h4>
                                    <span/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="main-icon rounded-pill text-center mt-4 pt-2">
                                <i data-feather="star" className="mdi mdi-star mdi-24px"/>
                            </div>
                            <div className="timeline-page pt-2 position-relative">
                                <div className="timeline-item mt-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="duration date-label-left border rounded p-2 pl-4 pr-4 position-relative shadow text-left">
                                                01.2020 -
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div className="event event-description-right rounded p-4 border float-left text-left">
                                                <h5 className="title mb-0 text-capitalize">Software Engineer</h5>
                                                <small className="company">BluTV, Istanbul-Turkey</small>
                                                <p className="timeline-subtitle mt-3 mb-0 text-muted">
                                                    OTT streaming media platform in Turkey and MENA. For more
                                                    information: <a href="https://www.blutv.com.tr"
                                                                    target="_blank" rel="noreferrer">BluTV</a>
                                                </p>
                                                <p className="timeline-subtitle mt-3 mb-0 text-muted">
                                                    Develops and Maintains Customer Relationship Management, Content
                                                    Management, API Gateway, OAuth, Third Party Integrations, VoD
                                                    Services
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="timeline-item mt-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2">
                                            <div
                                                className="event event-description-left rounded p-4 border float-left text-right">
                                                <h5 className="title mb-0 text-capitalize">Software Developer</h5>
                                                <small className="company">eloop Digital, Denizli - Turkey</small>
                                                <p className="timeline-subtitle mt-3 mb-0 text-muted">It is a digital
                                                    agency that produces design and software projects for companies to
                                                    develop their digital assets. </p>
                                                <p className="timeline-subtitle mt-3 mb-0 text-muted">Web projects for
                                                    Corporates</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                            <div
                                                className="duration duration-right rounded border p-2 pl-4 pr-4 position-relative shadow text-left">05.2019
                                                - 09.2019
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="timeline-item mt-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div
                                                className="duration date-label-left border rounded p-2 pl-4 pr-4 position-relative shadow text-left">2018
                                                - 2019
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6">
                                            <div
                                                className="event event-description-right rounded p-4 border float-left text-left">
                                                <h5 className="title mb-0 text-capitalize">Head of IT Society</h5>
                                                <small className="company">Pamukkale University, Denizli-Turkey</small>
                                                <p className="timeline-subtitle mt-3 mb-0 text-muted">
                                                    We organized basic programming, algorithm, HTML, CSS, C# training
                                                    for community members.
                                                </p>
                                                <p className="timeline-subtitle mt-3 mb-0 text-muted">
                                                    We organized trainings related to the lessons for our friends who
                                                    have the exam
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pt-5 pb-0 mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title">
                                <div className="titles">
                                    <h4 className="title title-line text-uppercase mb-4 pb-4">Contact Me</h4>
                                    <span/>
                                </div>
                                <p className="text-muted mx-auto para-desc mb-0">I am currently available for freelance
                                    projects. I am very excited to work with you. You can contact me at any time.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mt-4 pt-2">
                            <div className="contact-detail text-center">
                                <div className="icon">
                                    <i data-feather="mail" className="fea icon-md"/>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title text-uppercase">Email</h5>
                                    <p className="text-muted">You can contact me at any time.</p>
                                    <a href="mailto:mehmetacar683@gmail.com"
                                       className="text-primary">mehmet.acar.dev@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mt-4 pt-2">
                            <div className="contact-detail text-center">
                                <div className="icon">
                                    <i data-feather="map-pin" className="fea icon-md"/>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title text-uppercase">Location</h5>
                                    <p className="text-muted">
                                        Besiktas, Istanbul, Turkey
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default About