import React from 'react'

const Label = ({ label, value }) => {
    return (
        <p className="line">
            <span className="label">
                {label}
            </span>
            <span className="value">
                {value}
            </span>
        </p>
    )
}

export default Label