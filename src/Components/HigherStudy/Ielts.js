import { Icon } from '@blueprintjs/core'
import React from 'react'
import './Ielts.css'

function Ielts() {

    const ietls = [
        {
            topic: 'Overall',
            score: '6.5',
            icon: 'calculator'
        },
        {
            topic: 'Speaking',
            score: '7.0',
            icon: 'people'
        },
        {
            topic: 'Listening',
            score: '6.5',
            icon: 'volume-up'
        },
        {
            topic: 'Reading',
            score: '6.5',
            icon: 'book'
        },
        {
            topic: 'Writing',
            score: '6.0',
            icon: 'edit'
        },

    ]

    return (
        <section id="ietls">
            <div className="tc center w-80-l w-80-m w-90 ">
                <h2 className="ttu b tc underline f1 white">IELTS</h2>
                <div className="container">
                    {ietls.map((band, id) =>
                        <div id={id} className="box">
                            <div className='icon'>
                                <Icon
                                    className='fa'
                                    icon={band.icon}
                                    iconSize={44}
                                />
                            </div>
                            <div className='content'>
                                <h3 className='b f2'> {band.topic} </h3>
                                <p className='b f4'> {band.score} </p>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        </section>
    )
}

export default Ielts