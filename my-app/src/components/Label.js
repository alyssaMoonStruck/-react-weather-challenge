import React from 'react'

const TopLine = ({ label2, value2 }) => {
    return (
        <p className="line2">
            <span className="label2">
                {label2}
            </span>
            <span className="value2">
                {value2}
            </span>
        </p>
    )
}

export default TopLine