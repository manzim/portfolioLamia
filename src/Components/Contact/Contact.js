
import React from 'react'

import { Divider } from '@blueprintjs/core'

import './Contact.css'
import { FaEnvelope, FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaYoutube, FaStackOverflow } from 'react-icons/fa'

function Contact() {
    return (
        <section id="contactme">
            <div className=" cf pa3-l pa3-m pa2 center w-80-l w-80-m w-90">
                <h2 className="b f2 tc white ttu underline">Contact Me</h2>
                <Divider />
                <footer class="tc bp3-card br4 pv4 ph3 tc _contact_">
                    <a class="link near-black grow dib mh3 tc" href="mailto:manzim.ridwan@gmail.com" title="Gmail">
                        <FaEnvelope className="h2 w2 _icon_" />
                        <span class="f6 db">Email me</span>
                    </a>

                    <a target="_blank" rel="noreferrer" class="link  near-black grow dib mh3 tc"
                        href="https://www.linkedin.com/in/ahmed-manzim-ridwan/" title="LinkedIn">
                        <FaLinkedin className="h2 w2 _icon_" />
                        <span class="f6 db">LinkedIn</span>
                    </a>

                    <a target="_blank" rel="noreferrer" class="link near-black grow  dib mh3 tc"
                        href="https://github.com/manzim" title="GitHub">
                        <FaGithub className="h2 w2 _icon_" />
                        <span class="f6 db">GitHub</span>
                    </a>

                    <a target="_blank" rel="noreferrer" class="link near-black grow  dib mh3 tc"
                        href="https://facebook.com/manzim.soumik" title="Facebook">
                        <FaFacebook className="h2 w2 _icon_" />
                        <span class="f6 db">Facebook</span>
                    </a>

                    <a target="_blank" rel="noreferrer" class="link near-black grow dib mh3 tc"
                        href="https://twitter.com/zodiac_geek" title="Twitter">
                        <FaTwitter className="h2 w2 _icon_" />
                        <span class="f6 db">Twitter</span>
                    </a>

                    <a target="_blank" rel="noreferrer" class="link near-black grow dib mh3 tc"
                        href="https://www.youtube.com/channel/UC2aCoEuGtA-Je-XBnJKIVCw" title="youtube">
                        <FaYoutube className="h2 w2 _icon_" />
                        <span class="f6 db">Youtube</span>
                    </a>

                    <a class="link near-black grow dib mh3 tc" href="https://stackoverflow.com/users/7883376/manzim" title="Stack Overflow">
                        <FaStackOverflow className="h2 w2 _icon_" />
                        <span class="f6 db">Stack Overflow</span>
                    </a>
                </footer>
            </div>
        </section >
    )
}

export default Contact
