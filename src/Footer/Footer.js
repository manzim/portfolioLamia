import React from 'react'

function Footer() {
    return (
        <div>
            <div className=" white bg-black-30 b  tc w-100 shadow-1 pa2  h2">
                © Manzim - {new Date().getFullYear()}
            </div>
        </div>
    )
}

export default Footer
