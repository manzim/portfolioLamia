import React from 'react'

import '../../Externalcss/Externalcss.css'

import portfolioimage from '../../Assets/portfolioimage.jpg'
import { Button, Divider } from '@blueprintjs/core'

function Education() {

    const Edu = [
        {
            Degree: 'MBA Professionals',
            Institution: "Bangladesh University of Professionals",
            timeline: '2021 to Present',
            CGPA: '4.00',
        },
        {
            Degree: 'B.Sc Engineering',
            Institution: "Rajshahi University of Engineering & Technology",
            timeline: '2013 ~ 2018',
            CGPA: '3.75',
        },
        {
            Degree: 'HSC',
            Institution: "Pabna Cadet College",
            timeline: '2010 ~ 2012',
            CGPA: '5',
        },
        {
            Degree: 'SSC',
            Institution: "Pabna Cadet College",
            timeline: '2009 ~ 2010',
            CGPA: '5',
        }

    ]

    return (
        <div id="about">
            <div className="_education_ w-80-l pa2 dt center pt0 pb2 pv4-m pv5-l m pv4-m">
                <div className="db dtc-l w-40-l w-40-m w-90 db dtc-m v-mid-l v-top-m center pt3 pb3 pt0-l pb0-l pt0-l pb0-l mr3">
                    <img
                        src={portfolioimage}
                        alt="mehh"
                        className="w-100 mw6 shadow-5 br4 center"
                    />
                </div>
                <div className="db dtc-l w-10-l w-10-m w-00 db dtc-m v-mid-l v-top-m mr3"> </div>

                <div className="bp3-card db dtc-l db dtc-m v-top w-50-l w-60-m w-100 ph2 pr0-l pl3-l ph2 pr0-l pl3-m">
                    {/* <p className="lh-copy tl f5">
                        I've completed my SSC & HSC both from Pabna Cadet College in 2010 & 2012 respectively. Later I persued my B.Sc degree in Computer Sciece & Engineering from Rajshahi University of Engineering & Technology.                         
                    </p>
                    <p className="lh-copy tl f5"> Before being a CSE graduate I got offer from Rajshahi Cadet College to serve as an ICT Teacher (part time contract of 1 year). Then I got an internship opportunity eventually which I could make permanent successfully at DecipherTech as Junior Web Developer. I got hand in experiences in SDLC, Web development by WordPress, Product image editing, Manual testing, Documentation, off page SEO etc. </p> 

                    <p className="lh-copy tl f5">I would still be a team member of DecipherTech had not Covid-19 hit them. In March'20 I joined Renssoft Soln Ltd as a Front-end Developer. My previous web development experience helped me here to contribute in responsive web development projects. Not only web development but also I'd been a part of software front end feature development. Here I have got the opportunities to work with React.js framework, JavaScript, HTML, CSS3, TypeScript, basic of GraphQL-indexedDB, Tachyons, BlueprintJS, Material-UI, react-bootstrap. </p>

                    <p className="lh-copy tl f5">
                        As part of web development, I also worked with basic SEO setup, meta tags, google analytics, bing webmaster tools, google tag manager etc. Also before submitting my task I myself used to run down the basic lifecycle to ensure the feature development is as per the mock-up. Thus I've also learnt about documentation as an added value
                        In my leisure I love to surf the youtube to learn more about new techs, podcast, QA sessions of interview or skill I'm upto. I've recently started to utilize my leisure time into freelancing.
                    </p>
                    <p className="lh-copy tl f5">
                        Football is my passion for lifetime. 
                        Hence apart from playing as a FWD, I also spend significant amount of time in 
                        Fantasy Premier League (thus came inside top10 in bangladesh twice in last 6years!)
                    </p> */}
                    <p className="lh-copy tl f5"> 
                        <strong className="ttu f4 b underline lh-copy">Education:</strong>
                        <li className="f5 pl1 ml4-l ml4-m ml2"> <strong> SSC: </strong> Pabna Cadet College</li>
                        <li className="f5 pl1 ml4-l ml4-m ml2"> <strong> HSC: </strong> Pabna Cadet College</li>
                        <li className="f5 pl1 ml4-l ml4-m ml2"> <strong> Graduation: </strong> Rajshahi University of Engineering & Technology</li>
                        <li className="f5 pl1 ml4-l ml4-m ml2"> <strong> MBA: </strong> Bangladesh University of Professionals</li>
                    </p>
                    <p className="lh-copy tl f5"> 
                        <strong className="ttu f4 b underline lh-copy"> Job:</strong>
                        <li className="f5 pl1 ml4-l ml4-m ml2"> Rajshahi Cadet College</li>
                        <li className="f5 pl1 ml4-l ml4-m ml2"> DecipherTech</li>
                        <li className="f5 pl1 ml4-l ml4-m ml2"> Renssoft Solutions Ltd</li>
                    </p>
                    <p className="lh-copy tl f5"> 
                        <strong className="ttu f4 b underline lh-copy"> Hobbies/Passions:</strong>
                        <li className="f5 pl1 ml4-l ml4-m ml2"> Footballer </li>
                        <li className="f5 pl1 ml4-l ml4-m ml2"> Fantasy Premier League geek </li>
                        <li className="f5 pl1 ml4-l ml4-m ml2"> Food Photo Editing </li>
                        {/* <li className="f5 pl1 ml4-l ml4-m ml2">  </li> */}
                    </p>
                    <div className="center flex f5">
                        <span className="f5 center ">
                            <Button className="pa2 _hiremebtn_" text="hire me" intent="none" onClick={() => window.location('/#')} />
                        </span>
                        <span className="f5 center ">
                            <Button className="pa2 " text="My Resume" intent="success" onClick={() => window.location('/#')} />
                        </span>
                        <span className="f5 center ">
                            <Button className="pa2 _githubbtn_ " text="GitHub" intent="none" onClick={() => window.location('/https://github.com/manzim/')} />
                        </span>
                        <span className="f5 center ">
                            <Button className="pa2 _linkedinbtn_" text="Linkedin" intent="primary" onClick={() => window.location('/https://www.linkedin.com/in/ahmed-manzim-ridwan/')} />
                        </span>
                    </div>
                </div>
            </div>
            <div id="education" className="  pa4 center mb4">
                <hr /> <Divider />
                <h2 className="ttu b tc underline f1 white">Education</h2>
                <div className="f5 center mb3">
                    {Edu.map((edu, index) => (
                        <div key={index} className="_educard_ grow cf bp3-card br5 shadow-5 flex-l bg-black-10 flex-m items-center-l items-center-m mb2 shadow-5">
                            <div className="fl f3  w-100 w-50-m w-25-l b tc-l tc-m tl pv2">
                                {edu.Degree}
                            </div>
                            <div className="fl f5  w-100 w-50-m w-40-l b tc-l tc-m tl ">
                                {edu.Institution}
                            </div>
                            <li className="fl f5  w-100 w-50-m w-20-l tc-l tc-m tl ">
                                {edu.timeline}
                            </li>
                            <li className="fl f5  w-100 w-50-m w-20-l tc-l tc-m tl ">
                                {edu.CGPA}
                            </li>
                        </div>
                    ))
                    }
                </div>
                <hr /> <Divider />
            </div>
        </div>
    )
}

export default Education
