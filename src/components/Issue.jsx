import React from 'react'

function Issue({ title, url, body, labels }) {

    return (
        <div>
            <h3>{title}</h3>
            <a href={url}>{url}</a>
            <p>{body}</p>
            {labels.map((label, index) => {
                return (
                    <div key={index}>
                        <p>{label.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Issue;