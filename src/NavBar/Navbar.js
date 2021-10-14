import { Button, ButtonGroup, Divider, Drawer, Icon } from '@blueprintjs/core';
import React, { useState, } from 'react'
import { useHistory } from 'react-router';

import '../Externalcss/Externalcss.css'
import '../NavBar/Navbar.css'
import Logo from '../Assets/logo/mylogo.png'
import mobileLogo from '../Assets/logo/brandlogo.png'

function Navbar() {

    const [open, setOpen] = useState(false);
    let history = useHistory();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    const [showNavBar, setShowNavBar] = useState('')

    const checkScrollTop = () => {
      if (!showNavBar && window.pageYOffset > 300) {
        setShowNavBar('fixed')
      }
      else if (showNavBar && window.pageYOffset <= 400) {
        setShowNavBar('none')
      }
    }
    
    window.addEventListener('scroll', checkScrollTop)

    return (
        <section>
            <div className="cf white dt dt--fixed w-100 shadow-1 pa2 flex items-center center-l center-m w-100 h3-l h3-m h6"
                style= {{ 
                    position: showNavBar === 'fixed' ? 'none' : 'fixed', 
                    top: showNavBar === 'fixed' ? 0 : '', 
                    // marginTop: showNavBar === 'fixed' ? '' : '5rem',
                    alignItems: "center",
                    width: "100%",
                    borderBottom: `1px solid rgba(255, 255, 255, 0.1)`,
                    fontWeight: "bold",
                    boxSizing: 'border-box',
                    backgroundColor: '#000000',
                    zIndex: 5
                }}>
                <div className="w-25-m w-25-l w-80 tc-l tc-m tl f5-l f5-m f5 items-center dtc-l dtc-m dtc ">
                    <img className="logo mw3 pointer" src={Logo} alt="my brand" onClick={scrollToTop} />
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
                            onClick={() => setOpen(!open)}
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
                            // isCloseButtonShown={true}
                            // canOutsideClickClose={true}
                            // onClose={() => setOpen(!open)}
                            // onClosing={(e) => { setOpen(true); }}
                            position={"left"}
                            hasBackdrop={true}
                        >
                            <div className="tr fr mb3 " >
                                <Icon
                                    className="tr fr mt5"
                                    icon="cross"
                                    color="black"
                                    size={50}
                                    className="pa4"
                                    onClick={() => setOpen(!open)}
                                />
                            </div>

                            <div className="logo_img tc center mb3 mt2" style={{ opacity: 1 }}>
                                <img
                                    className="tc center w-80"
                                    src={mobileLogo}
                                    alt="portfolio demo"
                                    onClick={() => { history.push("./") }}
                                />
                            </div>

                            <div className="fl ">
                                <ul className="pages fl flex flex-column">
                                    <li className="b f4 lh-copy" >
                                        <a
                                            href="/#about"
                                            className="f5 pr3 black-80 list link"
                                        // onClick = { () => setOpen(false)}
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className="b f4 lh-copy" >
                                        <a
                                            href="/#education"
                                            className="f5 pr3 black-80 list link"
                                        // onClick = { () => setOpen(!open)}

                                        >
                                            Education
                                        </a>
                                    </li>
                                    <li className="b f4 lh-copy" >
                                        <a
                                            href="/#exp"
                                            className="f5 pr3 black-80 list link"

                                        >
                                            Experience
                                        </a>
                                    </li>
                                    <li className="b f4 lh-copy" >
                                        <a
                                            href="/#skills"
                                            className="f5 pr3 black-80 list link"

                                        >
                                            Skills
                                        </a>
                                    </li>
                                    <li className="b f4 lh-copy" >
                                        <a
                                            href="/#projects"
                                            className="f5 pr3 black-80 list link"

                                        >
                                            Projects
                                        </a>
                                    </li>
                                    <li className="b f4 lh-copy" >
                                        <a
                                            href="/#contactme"
                                            className="f5 pr3 black-80 list link"

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
