import React from 'react'

import rps from '../../Assets/projects/rps.png'
import jobtracker from '../../Assets/projects/jobtracker.png'
import weather from '../../Assets/projects/weather.png'
import todolist from '../../Assets/projects/todolist.png'
import tictactoegame from '../../Assets/projects/tictactoegame.png'
import ecommerce from '../../Assets/projects/ecommerce.png'
import memories from '../../Assets/projects/memories.png'

import './Projects.css'
import { FaGithub, FaSatellite, FaVideo } from 'react-icons/fa'

function Projects() {

    const projectsdone = [
        {
            img: todolist,
            projectname: "To-do List",
            githublink: 'https://github.com/manzim/todolistmodified',
            videolink: '',
            watchlive: 'https://quirky-einstein-faa414.netlify.app/'
        },
        {
            img: weather,
            projectname: "Weather App",
            githublink: 'https://github.com/manzim/todolistmodified',
            videolink: 'https://drive.google.com/file/d/1L_wLxn0fYDkbSkBnBXtIKFTb2YsJOGJn/view?usp=sharing',
            watchlive: 'https://quirky-einstein-faa414.netlify.app/'
        },
        {
            img: rps,
            projectname: "rock-paper-scissor",
            githublink: 'https://github.com/manzim/rockpapperscissorgame',
            videolink: 'https://drive.google.com/file/d/1QYX4BtUdnbF28oQa3uEhrOOyEV1vukrG/view?usp=sharing',
            watchlive: 'https://rockpapperscissorgame.herokuapp.com/'
        },
        {
            img: tictactoegame,
            projectname: "tic tac toe",
            githublink: 'https://github.com/manzim/tictactoegame',
            videolink: 'https://drive.google.com/file/d/1NotUczbN0Mk4g2tqb0ZVOLX53FxwwGad/view?usp=sharing',
            watchlive: 'https://rockpapperscissorgame.herokuapp.com/'
        },
        {
            img: jobtracker,
            projectname: "Job tracker",
            githublink: 'https://github.com/manzim/jobapplicationtracker',
            videolink: '',
            watchlive: 'https://silly-dubinsky-f59b6c.netlify.app/'
        },
        {
            img: ecommerce,
            projectname: "eCommerce (active)",
            githublink: '',
            videolink: '',
            watchlive: ''
        },
        {
            img: memories,
            projectname: "memories (active)",
            githublink: '',
            videolink: '',
            watchlive: ''
        },

    ]

    return (
        <section id="projects">

            <h2 className="b white underline ttu mt5 mb3 center tc f2">Projects </h2>
            <section class="projects" id="projects">
                {projectsdone.map((project, index) => (
                    <div key={index} class="team" >
                        <img src={project.img} alt={project.projectname} className="h3" />
                        <div class="info">
                            <div class="name"> {project.projectname} </div>
                            {/* <div class ="title">CEO and Founder</div> */}
                            <div class="social">
                                {project.githublink ?
                                    <a className="fa_btn" href={project.githublink} target="_blank" rel="noreferrer" >
                                        <span class="i grow"  > <FaGithub className="b" /> </span>
                                    </a>
                                    : ''
                                }
                                {project.videolink ?
                                    <a className="fa_btn" href={project.videolink} target="_blank" rel="noreferrer" >
                                        <span class="i grow"  > <FaVideo className="b" /> </span>
                                    </a>
                                    : ''
                                }
                                {project.watchlive ?
                                    <a className="fa_btn" href={project.watchlive} target="_blank" rel="noreferrer" >
                                        <span class="i grow"  > <FaSatellite className="b" /> </span>
                                    </a>
                                    : ''
                                }

                            </div>
                        </div>
                    </div>
                ))
                }
            </section>
        </section>
    )
}

export default Projects
