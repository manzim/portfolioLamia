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
            CGPA: '3.79',
        },
        {
            Degree: 'B.Sc Engineering',
            Institution: "Rajshahi University of Engineering & Technology",
            timeline: '2013 ~ 2018',
            CGPA: '',
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
            <h2 className="ttu b tc underline f1 white">About Me</h2>
            <div className="_education_ w-80-l pa2 dt center pt0 pb2 pv4-m pv5-l m pv4-m">
                <div className="db dtc-l w-40-l w-40-m w-90 db dtc-m v-mid-l v-top-m center pt3 pb3 pt0-l pb0-l pt0-l pb0-l mr3">
                    <img
                        src={portfolioimage}
                        alt="mehh"
                        className="w-100 mw6 shadow-5 br4 center"
                    />
                </div>
                <div className="db dtc-l w-10-l w-10-m w-00 db dtc-m v-mid-l v-top-m mr3"> </div>

                <div className="bp3-card db dtc-l db dtc-m v-top w-50-l w-60-m w-90 center ph2 pr0-l pl3-l ph2 pr0-l pl3-m ">
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
                    <div className="center flex-l flex-m flex-row-l justify-around pa2 f5 pl0">
                        <a href='/#contactme'
                            className="center list pa2 pa0-l pa0-m w-50 w-90-l w-90-m link no-underline">
                            <Button className="pa2 mb2 mb0-l mb0-m w-100 w-80-l w-80-m _hiremebtn_" text="hire me" intent="none" />
                        </a>

                        <a href='https://drive.google.com/file/d/1vb0ct_jei6Ufmt6JdZfe5KUfGICYPUDr/view?usp=sharing'
                            target="_blank" rel="noreferrer"
                            className="center list pa2 pa0-l pa0-m w-50 w-90-l w-90-m link no-underline">
                            <Button className="pa2 mb2 mb0-l mb0-m w-100 w-80-l w-80-m " text="My Resume" intent="success" />
                        </a>

                        <a href="https://github.com/manzim/"
                            target="_blank" rel="noreferrer"
                            className="center list pa2 pa0-l pa0-m w-50 w-90-l w-90-m link no-underline">
                            <Button className="pa2 mb2 mb0-l mb0-m w-100 w-80-l w-80-m _githubbtn_ " text="GitHub" intent="none" />
                        </a>

                        <a href="/https://www.linkedin.com/in/ahmed-manzim-ridwan/"
                            target="_blank" rel="noreferrer"
                            className="center list pa2 pa0-l pa0-m w-50 w-90-l w-90-m link no-underline">
                            <Button className="pa2 mb2 mb0-l mb0-m w-100 w-80-l w-80-m _linkedinbtn_" text="LinkedIn" intent="primary" />
                        </a>

                    </div>
                </div>
            </div>
            <div id="education" className="  pa4 center mb4">
                <hr /> <Divider />
                <h2 className="ttu b tc underline f1 white">Education</h2>
                <div className="f5 center mb3">
                    {Edu.map((edu, index) => (
                        <div key={index} className="_educard_ grow cf bp3-card br5 shadow-5 flex-l bg-black-10 
                            flex-m items-center-l items-center-m mb2 shadow-5">
                            <div className="fl f5 w-100 w-50-m w-20-l b tl-l tc-m tl pv2">
                                {edu.Degree}
                            </div>
                            <div className="fl f5 w-100 w-50-m w-40-l b tl-l tc-m tl ">
                                {edu.Institution}
                            </div>
                            <li className="fl f5 w-100 w-50-m w-20-l tl-l tc-m tl ">
                                {edu.timeline}
                            </li>
                            {edu.CGPA ?
                                <li className="fl f5 w-100 w-50-m w-20-l tl-l tc-m tl ">
                                    GPA/CGPA: {edu.CGPA}
                                </li> : ' '
                            }
                        </div>
                    ))
                    }
                </div>
                <hr /> <Divider />
            </div>
        </div >
    )
}

export default Education
