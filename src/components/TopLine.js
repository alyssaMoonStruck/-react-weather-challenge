import React from 'react'

const Label = ({ label, value }) => {
    return (
        <p className="line">
            <span className="label">
                {label}
                <button className="rightButton" type="submit">Get Weather</button>
            </span>
            <span className="value">
                {value}
            </span>
        </p>
    )
}

export default Label