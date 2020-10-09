import React, {useState} from 'react'
import './css/Today.css'
const Today = (props) => {
    const [symbol, setSymbol] = useState("°C") 
    let {time, dayNum, year, day, month, temp, feel, description} = props.weather
    let loading = props.loading;
    return(
        <div className="today-container">
            {loading ? <p>loading ...</p> :
            <>
                <h3 style={{opacity: "0.6", color: " #6FCF97"}}>Today</h3>
                <p className="today-day">{day} | {month} {dayNum}, {year} | {time}</p>
                <hr/>
                <p className="today-description">{description}  &nbsp; <img className="svg" src="https://freesvg.org/img/1400625045.png" alt="" /></p>
                <p className="today-temp">Temp: {temp} {symbol}</p>
                <p className="today-feel">Feels Like: {feel} {symbol}  </p>
            </>
            }
            
        </div>
    )
}

export default Today