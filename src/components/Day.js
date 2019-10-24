import React from 'react'

class Day extends React.Component{
    render(){
        return(
            <li className="forecast-day">
                <span className="time-slot">{this.props.day.dt_txt}</span>
                <span className="slot-details">{parseInt(this.props.day.main.temp)}:&deg;C / {this.props.day.weather[0].description}</span>
            </li>
        );
    }
}
export default Day;