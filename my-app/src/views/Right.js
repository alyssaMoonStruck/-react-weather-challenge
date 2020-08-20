import React from 'react'
import Label from '../components/Label'
import TopLine from '../components/TopLine'

const Right = () => {
    return (
        <div className="right">
            <button className="rightButton" type="submit">Get Weather</button>
            <TopLine value="Frisco Texas"/>
            <Label label2="Location:" value2="Frisco, TX"/>
            <Label label2="Temperature:" value2="0.56"/>
            <Label label2="Humidity:" value2="95%"/>
            <Label label2="Conditions:" value2="Mist"/>

        </div>
    )
}

export default Right