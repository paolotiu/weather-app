import React, { useState, useEffect } from 'react'
import './css/Forecast.css'

let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]

const Forecast = (props) => {
    const [symbol, setSymbol] = useState()
    useEffect(() => {
        setSymbol(props.unit === 'metric' ? '°C' : '°F')
    }, [props.unit])

    if (props.forecast) {
        return (
            <div className="forecast-container">
                <h3
                    className="title"
                    style={{ opacity: '0.6', color: ' #6FCF97' }}
                >
                    Forecast
                </h3>
                <hr />
                <div className="forecast-days-container">
                    {props.forecast.map((day, index) => {
                        if (index === 0) {
                            return null
                        }
                        return (
                            <div
                                className="day-container"
                                key={'forecast' + index}
                            >
                                <p className="forecast-day">
                                    {
                                        new Date(day.dt * 1000)
                                            .toString()
                                            .split(' ')[0]
                                    }
                                    , &nbsp;
                                    {new Date(
                                        day.dt * 1000
                                    ).toLocaleDateString()}
                                </p>
                                <p className="forecast-temp">
                                    {' '}
                                    Max: {day.temp.max} {symbol}
                                </p>
                                <p className="forecast-temp">
                                    Min: {day.temp.min} {symbol}
                                </p>
                                <p>Chance of Rain: {day.rain}%</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    } else {
        return <div className="forecast-container"> Loading...</div>
    }
}

export default Forecast
