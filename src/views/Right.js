import React from 'react'
import Label from '../components/Label'
import TopLine from '../components/TopLine'

const Right = () => {
    return (
        <div className="right">
            <TopLine value="Frisco Texas"/>
            <Label conditions="Location:" variables="Frisco, TX"/>
            <Label conditions="Temperature:" variables="0.56"/>
            <Label conditions="Humidity:" variables="95%"/>
            <Label conditions="Conditions:" variables="Mist"/>

        </div>
    )
}

export default Right