import { Button } from '@blueprintjs/core';
import React from 'react'
import { useHistory } from 'react-router';

import '../../Externalcss/Externalcss.css'
// import './LandingPage.css'

function LandingPage() {
    let history = useHistory()
    return (
        <section id="landing">
            <div className="vh-100 dt w-100 _landingpage_"
                style={{
                    // backgroundImage: 'url(https://image.freepik.com/free-vector/designers-are-working-desing-web-page-web-design-user-interface-user-experience-content-organization_335657-4403.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: "cover",
                    backgroundColor: "#252934"
                }}
            >
                <div className="dtc v-mid tc white ph3 ph4-l">
                    <div className="tc f1 white mb3-l mb3-m mb2">
                        Hi I'm <span className="red"> <strong>manzim</strong> </span>
                    </div>
                    <div className="wrapper ">
                        <ul className="dynamic-txts f1-l f2-m f3 list pl0">
                            <li><span>React.js Developer</span></li>
                            <li><span>Front-End Developer</span></li>
                            <li><span>FPL Geek</span></li>
                            <li><span>YouTuber</span></li>
                        </ul>
                    </div>
                    <a href="#about" className="center tc pointer">
                        <button class="glow-on-hover" type="button">
                            HOVER ME, THEN CLICK ME!
                        </button>
                    </a>

                    {/* <button onClick={() => window.location('https://manzim-portfolio.herokuapp.com/')}> hi </button> */}
                </div>
            </div>

        </section>
    )
}

export default LandingPage
