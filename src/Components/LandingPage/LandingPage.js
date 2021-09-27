import { Button } from '@blueprintjs/core';
import React from 'react'

import '../../Externalcss/Externalcss.css'
// import Navbar from '../../NavBar/Navbar';

function LandingPage() {
    return (
        <section id="landing" style={{ height: '100vh', overflow: 'hidden' }}>
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
                    <Button
                        text="visit my portfolio"
                        large
                        outlined
                        intent="danger"
                        rightIcon="arrow-down"
                        className="b f3 white pointer"
                        onClick = { () => window.scrollY('100vh')}
                        // style={{ zIndex: 777}}
                    />
                    {/* <button onClick={() => window.location('https://manzim-portfolio.herokuapp.com/')}> hi </button> */}
                </div>
            </div>

        </section>
    )
}

export default LandingPage
