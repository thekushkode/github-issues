import React from 'react'
import {Link} from 'react-router-dom';


function Issue({ issue }) {
    const {title, url, body, labels, number} = issue;
    return (
        <div>
            {/* <h3>{title}</h3> */}
            <Link to={`/issue/${number}`}>{title}</Link>
            {/* <p>{body}</p>
            {labels.map((label, index) => {
                return (
                    <div key={index}>
                        <p>{label.name}</p>
                    </div>
                )
            })} */}
        </div>
    )
}

export default Issue;