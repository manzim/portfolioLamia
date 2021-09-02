// import { Button } from '@blueprintjs/core'
import React from 'react'

import './Contact.css'

function Contact() {
    return (
        <div>
            <div className="_contactme_ cf bp3-card bg-black-10 pa3-l pa3-m pa2">
                <h2 className="b f2 tc">Contact Me</h2>
                <footer class="pv4 ph3 tc _contactme_">
                    <a class="link near-black  dib mh3 tc" href="mailto:manzim.ridwan@gmail.com" title="Gmail">
                        <svg class="dib h2 w2" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd"
                            clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"
                        >
                            <path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero" /></svg>
                        <span class="f6 db">Email me</span>
                    </a>

                    <a class="link  near-black dib mh3 tc" href="https://www.linkedin.com/in/ahmed-manzim-ridwan/" title="LinkedIn">
                        <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd"
                            clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
                            <path d="M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51V7.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z" fill-rule="nonzero" /></svg>
                        <span class="f6 db">LinkedIn</span>
                    </a>

                    <a class="link near-black  dib mh3 tc" href="https://github.com/manzim" title="GitHub">
                        <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                            fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
                            <path d="M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.083-.202-.358-1.015.077-2.117 0 0 .672-.215 2.2.82.638-.178 1.323-.266 2.003-.27.68.004 1.364.092 2.003.27 1.527-1.035 2.198-.82 2.198-.82.437 1.102.163 1.915.08 2.117.513.56.823 1.274.823 2.147 0 3.073-1.87 3.75-3.653 3.947.287.246.543.735.543 1.48 0 1.07-.01 1.933-.01 2.195 0 .215.144.463.55.385C13.71 14.53 16 11.534 16 8c0-4.418-3.582-8-8-8" /></svg>
                        <span class="f6 db">GitHub</span>
                    </a>

                    <a class="link near-black  dib mh3 tc" href="https://facebook.com/manzim.soumik" title="Facebook">
                        <svg class="dib h2 w2" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd"
                            clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"
                        >
                            <path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero" /></svg>
                        <span class="f6 db">Facebook</span>
                    </a>

                    <a class="link hover-silver near-black dib mh3 tc" href="https://twitter.com/zodiac_geek" title="Twitter">
                        <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd"
                            clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
                            <path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fill-rule="nonzero" /></svg>
                        <span class="f6 db">Twitter</span>
                    </a>

                    <a class="link  near-black dib mh3 tc" href="https://www.youtube.com/channel/UC2aCoEuGtA-Je-XBnJKIVCw" title="youtube">
                        <svg class="dib w2 h2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd"
                            clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
                            <path d="M0 7.345c0-1.294.16-2.59.16-2.59s.156-1.1.636-1.587c.608-.637 1.408-.617 1.764-.684C3.84 2.36 8 2.324 8 2.324s3.362.004 5.6.166c.314.038.996.04 1.604.678.48.486.636 1.588.636 1.588S16 6.05 16 7.346v1.258c0 1.296-.16 2.59-.16 2.59s-.156 1.102-.636 1.588c-.608.638-1.29.64-1.604.678-2.238.162-5.6.166-5.6.166s-4.16-.037-5.44-.16c-.356-.067-1.156-.047-1.764-.684-.48-.487-.636-1.587-.636-1.587S0 9.9 0 8.605v-1.26zm6.348 2.73V5.58l4.323 2.255-4.32 2.24h-.002z" /></svg>
                        <span class="f6 db">Youtube</span>
                    </a>

                    <a class="link  near-black dib mh3 tc" href="https://stackoverflow.com/users/7883376/manzim" title="Stack Overflow">
                        <svg class="dib h2 w2" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill-rule="evenodd"
                            clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414">
                            <path d="M12.658 14.577v-4.27h1.423V16H1.23v-5.693H2.65v4.27h10.006zm-8.583-1.423h7.16V11.73h-7.16v1.424zm.173-3.235l6.987 1.465.3-1.38L4.55 8.54l-.302 1.38zm.906-3.365l6.47 3.02.602-1.295-6.47-3.02-.602 1.295zm1.81-3.19l5.478 4.57.906-1.078-5.477-4.57-.905 1.077zM10.502 0L9.338.863l4.27 5.735 1.164-.862L10.5 0z" /></svg>
                        <span class="f6 db">Stack Overflow</span>
                    </a>
                </footer>
            </div>
        </div >
    )
}

export default Contact
