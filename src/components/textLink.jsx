import React from 'react'
import  { Link } from 'react-router-dom'

function textLink() {
    return (
        <div>
            home
            <Link to="/">Home</Link>
        </div>
    )
}

export default textLink;
