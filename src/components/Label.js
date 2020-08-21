import React from 'react'

const TopLine = ({ conditions, variables }) => {
    return (
        <p className="split">
            <span className="conditions">
                {conditions}
            </span>
            <span className="variables">
                {variables}
            </span>
        </p>
    )
}

export default TopLine