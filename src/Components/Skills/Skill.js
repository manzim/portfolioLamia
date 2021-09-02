import React from "react";

import { Skill } from './SkillsData.js'

import './Skill.css'
import { useHistory } from "react-router-dom";
import { Divider } from "@blueprintjs/core";

export default function Skillset() {

    let history = useHistory();

    return (
        <div className="pt3 pb3" id="skills">
            <h1 className="tc b pb2 ttu underline white">Technical Skills</h1>
            <div class="dt-l dt-m dt--fixed-l dt--fixed-m center w-90-l w-90-m w-90">
                <div class="bp3-card br3 grow dtc-l dtc-m tc pv4 m2 bg-black-10">
                    <p className="b f3 black"> Front End</p>
                    <Divider />
                    {Skill.frontEnd.map((skl, index) => (
                        <div key={index} className="f5 grow flex items-center tl" onClick={() => history.push(skl.link)}>
                            <span> <img src={skl.imgSrc} alt={skl.imgAltText} className="mw3 mr3 pa3" /> </span>
                            <a href={skl.link} target="_blank" rel="noopener noreferrer" className="_skillname_">
                                <span className="b black"> {skl.skillName} </span>
                            </a>
                        </div>
                    ))
                    }
                </div>
                <div class="w-10 br3 grow dtc-l dtc-m tc pv4"> </div>
                <div class="bp3-card br3 grow dtc-l dtc-m tc pv4 m2 bg-black-05">
                    <p className="b f3 black"> Programming Languages</p>
                    <Divider />
                    {Skill.programmingLanguages.map((skl, index) => (
                        <div key={index} className="f5 grow flex items-center tl" onClick={() => history.push(skl.link)}>
                            <span> <img src={skl.imgSrc} alt={skl.imgAltText} className="mw3 mr3 pa3" /> </span>
                            <a href={skl.link} target="_blank" rel="noopener noreferrer" className="_skillname_">
                                <span className="b black"> {skl.skillName} </span>
                            </a>
                        </div>
                    ))
                    }
                    <Divider />
                    <p className="b f3 black"> DataBase</p>
                    <Divider />
                    {Skill.databases.map((skl, index) => (
                        <div key={index} className="grow f5 flex items-center tl" onClick={() => history.push(skl.link)}>
                            <span> <img src={skl.imgSrc} alt={skl.imgAltText} className="mw3 mr3 pa3" /> </span>
                            <a href={skl.link} target="_blank" rel="noopener noreferrer" className="_skillname_">
                                <span className="b black"> {skl.skillName} </span>
                            </a>
                        </div>
                    ))
                    }
                    <Divider />
                    <p className="b f3 black"> Version Control</p>
                    <Divider />
                    {Skill.versionControl.map((skl, index) => (
                        <div key={index} className="grow f5 flex items-center tl" onClick={() => history.push(skl.link)}>
                            <span> <img src={skl.imgSrc} alt={skl.imgAltText} className="mw3 mr3 pa3" /> </span>
                            <a href={skl.link} target="_blank" rel="noopener noreferrer" className="_skillname_">
                                <span className="b black"> {skl.skillName} </span>
                            </a>
                        </div>
                    ))
                    }
                    <Divider />
                    <p className="b f3 black"> Dev Tools</p>
                    <Divider />
                    {Skill.devTools.map((skl, index) => (
                        <div key={index} className="grow f5 flex items-center tl" onClick={() => history.push(skl.link)}>
                            <span> <img src={skl.imgSrc} alt={skl.imgAltText} className="mw3 mr3 pa3" /> </span>
                            <a href={skl.link} target="_blank" rel="noopener noreferrer" className="_skillname_">
                                <span className="b black"> {skl.skillName} </span>
                            </a>
                        </div>
                    ))
                    }
                </div>
                <div class="w-10 br3 grow dtc-l dtc-m tc pv4"> </div>
                <div class="bp3-card br3 grow dtc-l dtc-m tc pv4 m2 bg-black-10">
                    <p className="b f3 black"> Others</p>
                    <Divider />
                    {Skill.others.map((skl, index) => (
                        <div key={index} className="f5 grow flex items-center tl" onClick={() => history.push(skl.link)}>
                            <span> <img src={skl.imgSrc} alt={skl.imgAltText} className="mw3 mr3 pa3" /> </span>
                            <a href={skl.link} target="_blank" rel="noopener noreferrer" className="_skillname_">
                                <span className="b black"> {skl.skillName} </span>
                            </a>
                        </div>
                    ))
                    }
                    <Divider />
                    <p className="b f3 black"> Hosting Platforms</p>
                    <Divider />
                    {Skill.hostingPlatforms.map((skl, index) => (
                        <div key={index} className="f5 grow flex items-center tl" onClick={() => history.push(skl.link)}>
                            <span> <img src={skl.imgSrc} alt={skl.imgAltText} className="mw3 mr3 pa3" /> </span>
                            <a href={skl.link} target="_blank" rel="noopener noreferrer" className="_skillname_">
                                <span className="b black"> {skl.skillName} </span>
                            </a>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}