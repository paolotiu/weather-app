import React, { useEffect, useState, useRef } from 'react'
import Switch from 'react-switch'
import './App.css'
import Today from './components/Today'
import Header from './components/Header'

//For date time
;(function () {
    var days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ]

    var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    Date.prototype.getMonthName = function () {
        return months[this.getMonth()]
    }
    Date.prototype.getDayName = function () {
        return days[this.getDay()]
    }
})()

const weatherApiKey = 'b3799facfb7756da884708a0ebd939aa'
const geoApiKey = '10c8f176788f475ca28e8e9d145f320b'

function App() {
    const [checked, setChecked] = useState(true)
    const [unit, setUnit] = useState('metric')
    const [loading, setLoading] = useState(true)
    const [weather, setWeather] = useState({
        temp: 0,
        feel: 0,
        description: '',
    })

    const [location, setLocation] = useState()

    // Handle Searches
    async function getLatLong(e) {
        e.preventDefault()
        try {
            const name = search.current.value
            search.current.value = ''
            const res = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${name}&key=${geoApiKey}`
            )
            let json = await res.json()
            let city = json.results[0].components.city
            let country = json.results[0].components.country
            let state = json.results[0].components.state
            if (country === 'United States of America') {
                country = 'USA'
            }

            if (city && state && country) {
                country = state
            } else if (!city && state) {
                city = state
            } else if (!state && !country) {
                country = json.results[0].components.continent
            }

            console.log(city, country, json)
            let { lat, lng } = json.results[0].bounds.northeast
            let long = lng
            setLoading(true)
            setLocationName(lat, long, city, country)
        } catch (e) {
            error.current.classList.add('show')
            setTimeout(() => {
                error.current.classList.remove('show')
            }, 2000)
        }
    }

    //Sets the location state
    async function setLocationName(lat, long, city = '', country = '') {
        try {
            let json = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${geoApiKey}`
            ).then((x) => x.json())

            if (!country) {
                city = json.results[0].components.city
                country = json.results[0].components.country
            }

            setLocation({ lat, long, city, country })
        } catch (e) {
            error.current.classList.add('show')
            setTimeout(() => {
                error.current.classList.remove('show')
            }, 2000)
        }
    }

    // gets current lat and long and passes to setLocationName
    async function getCurrentLatLong() {
        let geo = await getCurrentLocation()

        let lat = geo.coords.latitude
        let long = geo.coords.longitude
        setLocationName(lat, long)
    }
    //Get current latitude and longitude, returns a promise
    function getCurrentLocation() {
        return new Promise((res, rej) => {
            navigator.geolocation.getCurrentPosition(res, rej)
        })
    }

    useEffect(() => {
        getCurrentLatLong()
    }, [])

    useEffect(() => {
        //call to dark sky api
        async function currentLocationWeather() {
            let { lat, long } = location
            let weather = await fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&appid=${weatherApiKey}&units=${unit}`
            )
            let weatherJson = await weather.json()
            console.log(weatherJson)
            return weatherJson
        }

        if (location) {
            currentLocationWeather().then((v) => {
                let date = new Date(v.current.dt * 1000)
                setWeather({
                    temp: v.current.temp,
                    feel: v.current.feels_like,
                    description: v.current.weather[0].description,
                    main: v.current.weather[0].main,
                    day: date.getDayName(),
                    month: date.getMonthName(),
                    dayNum: date.getUTCDate(),
                    year: date.getUTCFullYear(),
                    time: date.toLocaleTimeString('en-US'),
                })
            })

            setLoading(false)
        }
    }, [location, unit])

    let error = useRef()
    let search = useRef()
    return (
        <div className="App">
            <Header
                search={search}
                getLatLong={getLatLong}
                city={location ? location.city : null}
                country={location ? location.country : null}
            />

            <div ref={error} className="error-container">
                <span className="error">Location Not Found</span>
            </div>
            <div className="button-container">
                <Switch
                    className="switch"
                    boxShadow="3px 3px 5px #c8c8c8"
                    offColor="#f2f2f2"
                    onColor="#f2f2f2"
                    uncheckedIcon={<span className="switch-icon">°F</span>}
                    checkedIcon={<span className="switch-icon">°C</span>}
                    onChange={() =>
                        unit === 'metric'
                            ? setUnit('imperial')
                            : setUnit('metric')
                    }
                    checked={unit === 'metric'}
                />
                <button className="here" onClick={getCurrentLatLong}>
                    <span class="material-icons">location_on</span>
                </button>
            </div>
            <div className="content">
                <div className="container1">
                    <Today unit={unit} weather={weather} loading={loading} />
                </div>
                <div className="container2"></div>
            </div>
        </div>
    )
}

export default App
