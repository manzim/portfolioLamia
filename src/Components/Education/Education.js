import React from 'react'

import '../../Externalcss/Externalcss.css'
import portfolioimage from '../../Assets/portfolioimage.jpg'

function Education() {

    const Edu = [
        {
            Degree: 'MBA Professionals',
            Institution: "Bangladesh University of Professionals",
            timeline: '2021 to Present',
            CGPA: '4.00',
        },
        {
            Degree: 'B.Sc Engineering',
            Institution: "Rajshahi University of Engineering & Technology",
            timeline: '2013 ~ 2018',
            CGPA: '3.75',
        },
        {
            Degree: 'HSC',
            Institution: "Pabna Cadet College",
            timeline: '2010 ~ 2012',
            CGPA: '5',
        },
        {
            Degree: 'SSC',
            Institution: "Pabna Cadet College",
            timeline: '2009 ~ 2010',
            CGPA: '5',
        }

    ]

    return (
        <div>
            <div className="_education_ dt center pt0 pb5 pv5-m pv6-l m pv6-m">
                <div className="db dtc-l db dtc-m v-top-l v-top-m">
                    <img
                        src={portfolioimage}
                        alt="A bright blue sky"
                        className="w-100 w5-l 100 w5-m"
                    />
                </div>
                <div className="db dtc-l db dtc-m v-top ph2 pr0-l pl3-l ph2 pr0-l pl3-m">
                    <p className="lh-copy tc tl-l tl-m f5">
                        For desktop, this text is vertically aligned middle, no matter what the height of the image is.
                        On mobile, this is a paragraph below an image.
                    </p>
                </div>
            </div>
            <div className="  pa4 center mb4">
                <h2 className="ttu b tc underline f1">Education</h2>
                <div className="f5 center">
                    {Edu.map((edu, index) => (
                        <div key={index} className="_educard_ cf bp3-card flex-l bg-black-10 flex-m items-center-l items-center-m mb2 shadow-5">
                            <div className="fl w-100 w-50-m w-25-l b tc pv4">
                                {edu.Degree}
                            </div>
                            <div className="fl w-100 w-50-m w-40-l b tc pv4">
                                {edu.Institution}
                            </div>
                            <div className="fl w-100 w-50-m w-20-l tc pv4">
                                {edu.timeline}
                            </div>
                            <div className="fl w-100 w-50-m w-20-l tc pv4">
                                {edu.CGPA}
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Education
