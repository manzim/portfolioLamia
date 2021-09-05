import React from 'react'
import { FaCopyright } from 'react-icons/fa';
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="bottom">
                <center>
                    <span className="credit">Created By <a href="./#about">  manzim </a> | </span>
                    <span className="white b "> <FaCopyright className="white b" />  {new Date().getFullYear()} All rights reserved.</span>
                </center>
            </div>
        </footer>
    )
}

export default Footer
