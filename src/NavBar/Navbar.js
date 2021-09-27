import { Button, ButtonGroup, Divider, Drawer } from '@blueprintjs/core';
import React, { useEffect, useState, } from 'react'
import { useHistory } from 'react-router';

import '../Externalcss/Externalcss.css'
import '../NavBar/Navbar.css'
import Logo from '../Assets/logo/mylogo.png'

function Navbar() {

    const topBarStyle = {
        top: 650,
        alignItems: "center",
        width: "100%",
        // height: '90px',
        borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
        fontWeight: "bold",
        boxSizing: 'border-box',
        // zIndex: 999,
        backgroundColor: '#000000',
        position: 'sticky'
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [open, setOpen] = useState(false);
    let history = useHistory();

    return (
        <section>
            <div className="cf white dt dt--fixed w-100 shadow-1 pa2 flex items-center center-l center-m w-100 h3-l h3-m h6"
                style={topBarStyle}>
                <div className="w-25-m w-25-l w-80 tc-l tc-m tl f5-l f5-m f5 items-center dtc-l dtc-m dtc ">
                    <img className="logo mw3" src={Logo} alt="my brand" />
                </div>
                <div className="w-70-m w-70-l tr-l tr-m tl f5-l f5-m f5 items-center dtc-l dtc-m dn ">
                    <ButtonGroup minimal={true} >
                        <a href="#about" className="link list">
                            <Button
                                text="About"
                                minimal
                                large={false}
                                className="b f5 white _btn_"
                                intent="none"
                                icon="person"
                            />
                        </a>

                        <Divider className="white b" />
                        <a href="#education" className="link list">
                            <Button
                                text="Education"
                                minimal
                                large={false}
                                className="b f5 white _btn_"
                                intent="none"
                                icon="learning"
                            />
                        </a>

                        <Divider className="white b" />
                        <a href="#exp" className="link list">
                            <Button
                                text="Experience"
                                minimal
                                large={false}
                                className="b f5 white _btn_"
                                intent="none"
                                icon="briefcase"
                            />
                        </a>

                        <Divider className="white b" />
                        <a href="#projects" className="link list">
                            <Button
                                text="Projects"
                                minimal
                                large={false}
                                className="b f5 white _btn_"
                                intent="none"
                                icon="projects"
                            />
                        </a>

                        <Divider className="white b" />
                        <a href="#skills" className="link list">
                            <Button
                                text="Skills"
                                minimal
                                large={false}
                                className="b f5 white _btn_"
                                intent="none"
                                icon="predictive-analysis"
                            />
                        </a>

                        <Divider className="white b" />
                        <a href="#contactme" className="link list">
                            <Button
                                text="Contact"
                                minimal
                                large={false}
                                className="b f5 white _btn_"
                                intent="none"
                                icon="chat"
                            />
                        </a>

                    </ButtonGroup>
                </div>
                <div className="w-20 tr f5-l f5-m f5 items-center dn-l dn-m dtc">
                    <div className="drawer_button bn">
                        <Button
                            icon="menu"
                            className="gray"
                            onClick={() => setOpen(true)}
                            active={false}
                            minimal={true}
                            fill={true}
                            intent="none"
                            color="#3b3b3b"
                        />
                        <Drawer
                            className="flex flex-column bg-near-white"
                            isOpen={open}
                            size={"260px"}
                            style={{ backgroundColor: '#EEEEEE', zIndex: 999 }}
                            vertical={false}
                            canOutsideClickClose={true}
                            onClose={() => setOpen(false)}
                            position={"left"}
                            hasBackdrop={true}
                        >
                            <div className="logo_img tc center mb3 mt5" style={{ opacity: 1 }}>
                                <img
                                    className="tc center"
                                    // src={}
                                    alt="portfolio demo"
                                    onClick={() => { history.push("/"); setOpen(false) }}
                                />
                            </div>

                            <div className="fl ">
                                <ul className="pages fl flex flex-column">
                                    <li className="">
                                        <a
                                            href="/#about"
                                            className="f5 pr3 black-80"
                                            onClick={() => { setOpen(false) }}
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="/#education"
                                            className="f5 pr3 black-80"
                                            onClick={() => { setOpen(false) }}
                                        >
                                            Education
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="/#exp"
                                            className="f5 pr3 black-80"
                                            onClick={() => { setOpen(false) }}
                                        >
                                            Experience
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="/#skills"
                                            className="f5 pr3 black-80"
                                            onClick={() => { setOpen(false) }}
                                        >
                                            Skills
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="/#projects"
                                            className="f5 pr3 black-80"
                                            onClick={() => { setOpen(false) }}
                                        >
                                            Projects
                                        </a>
                                    </li>
                                    <li className="">
                                        <a
                                            href="/#contactme"
                                            className="f5 pr3 black-80"
                                            onClick={() => { setOpen(false) }}
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Drawer>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar
