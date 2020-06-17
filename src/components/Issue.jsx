import React from 'react'
import {Link} from 'react-router-dom';


function Issue({ issue }) {
    const {title, url, body, labels, number} = issue;
    return (
            <Link to={`/issue/${number}`}>{title}</Link>
    )
}

export default Issue;