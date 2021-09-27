import React from 'react'

import Tilt from "react-tilt";

import '../../Externalcss/Externalcss.css'

import psdk from '../../Assets/expereince/psdk.png'
import rcc from '../../Assets/expereince/rcc.png'
import company2 from '../../Assets/expereince/deciphertech.svg'
import { Divider } from '@blueprintjs/core'

function Expereince() {

    const companyXP = [
        {
            imgSrc: psdk,
            jobTitle: "Software Developer",
            companyName: "RensSoft Soln Ltd",
            jodDesignation: "Front-end Developer",
            technology: "React JS, JS, Tachyons, BluePrintJS, TypeScript, basic IndexedDB, HTML, CSS3, basic GraphQL",
            duration: "March 2020 ~ June 2021",
            developed1: "Multiple features of device responsive website & Software.",
            developed2: "Front end of Doctorkoi Website, making sure of all device responsive as per the mock-up.",
            developed3: "Application small bug fixes, new feature enhancement.",
            developed4: "Manual testing & documentation before submitting work"
        },
        {
            imgSrc: company2,
            jobTitle: "Jr. Web Developer",
            companyName: "DecipherTech",
            jodDesignation: "Front-end Web Developer",
            technology: "HTML, CSS3, WordPress, JS(basic)",
            duration: "March 2019 ~ March 2020",
            developed1: "Complete front end of website from scratch.",
            developed2: "Importing & enhancing the theme as per requirements.",
            developed3: "Design social media graphical contents.",
            developed4: "Testing the website workflow & bug documentation",
        },
        {
            imgSrc: rcc,
            jobTitle: "Teacher",
            companyName: "Rajshahi Cadet College",
            jodDesignation: "Part Time ICT Lecturer",
            technology: "",
            duration: "January 2018 ~ December 2018",
            developed4: "ICT Curriculum of class 7-12",
            developed5: "Lab sessionals teaching practically",

        }
    ]

    return (
        <section id="exp">
            <div className="cf tc center w-70-l w-70-m w-90 _exp_">
                <h2 className="b f2 tc white ttu underline">Expereince</h2>
                {companyXP.map((exp, index) => (
                    <Tilt options={{ max: 25 }}>
                        <div className="bp3-card mb5-l mb5-m mb4 lh-copy _expcard_ shadow-5 _imgcompany_" key={index}>
                            <a href="https://deciphertechglobal.com/" target="_blank" rel="noreferrer" className="_imgcompany_">
                                <img
                                    src={exp.imgSrc}
                                    alt={exp.companyName}
                                    className="mw4 _imgcompany_"
                                />
                            </a>
                            <Divider />
                            <div className="tc style pa2">
                                <strong className="b f3">{exp.jodDesignation}</strong>
                                <br />
                                {exp.technology ? <span> <strong>Technology:</strong> {exp.technology} </span> : ''}
                                <br />
                                <strong>Duration:</strong> {exp.duration}
                                <br />
                                <strong> # Job Responsibilities #</strong>
                                <ul className="tl">
                                    {exp.developed1 ? <li> <strong>Developed &amp; enhanced</strong>  {exp.developed1} </li> : ''}
                                    {exp.developed2 ? <li> <strong>Developed</strong>  {exp.developed2} </li> : ''}
                                    {exp.developed3 ? <li> <strong>Provided</strong>  {exp.developed3} </li> : ''}
                                    {exp.developed4 ? <li>  {exp.developed4}  </li> : ''}
                                    {exp.developed5 ? <li>  {exp.developed5}  </li> : ''}
                                </ul>
                            </div>
                        </div>
                    </Tilt>
                ))
                }

            </div>
        </section>
    )
}

export default Expereince
