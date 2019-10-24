import React from "react";
import Day from "./Day";

class Weather extends React.Component {

    render(props) {

        //let forecastAray = [];
        
        

        return (
            <div className="weather__info">
                {this.props.city && this.props.country && (
                <p className="weather__key">
                    Location:
                    <span className="weather__value"> {this.props.city}, {this.props.country}</span>
                </p>
                )}
                {this.props.temperature && (
                <p className="weather__key">
                    Temperature:
                    <span className="weather__value"> {this.props.temperature}</span>
                </p>
                )}
                {this.props.humidity && (
                <p className="weather__key">
                    Humidity:
                    <span className="weather__value"> {this.props.humidity}</span>
                </p>
                )}
                {this.props.description && (
                <p className="weather__key">
                    Conditions:
                    <span className="weather__value"> {this.props.description}</span>
                </p>
                )}
                {this.props.error && <p className="weather__error">{this.props.error}</p>}
                
                {this.props.forecast && <div className="weather__key forecast">
                    <ul className="forecast-days">
                        {this.props.forecast.map((day)=> {
                            return <Day day={day} key={day.dt}/>
                        })}
                    </ul>    
                </div>
                }
            </div>
        );
    }
};

export default Weather;