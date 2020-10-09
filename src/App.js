import React, { useEffect, useState, useRef } from 'react'
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
            } else if (!city) {
                city = state
            }
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
        let json = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${geoApiKey}`
        ).then((x) => x.json())

        if (!country) {
            city = json.results[0].components.city
            country = json.results[0].components.country
        }

        setLocation({ lat, long, city, country })
    }

    useEffect(() => {
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

        getCurrentLatLong()
    }, [])

    useEffect(() => {
        //call to dark sky api
        async function currentLocationWeather() {
            let { lat, long } = location
            let weather = await fetch(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&appid=${weatherApiKey}&units=metric`
            )
            let weatherJson = await weather.json()
            return weatherJson
        }

        if (location) {
            currentLocationWeather().then((v) => {
                let date = new Date(v.current.dt * 1000)
                setWeather({
                    temp: v.current.temp,
                    feel: v.current.feels_like,
                    description: v.current.weather[0].description,
                    day: date.getDayName(),
                    month: date.getMonthName(),
                    dayNum: date.getUTCDate(),
                    year: date.getUTCFullYear(),
                    time: date.toLocaleTimeString('en-US'),
                })
            })

            setLoading(false)
        }
    }, [location])

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
            <Today weather={weather} loading={loading} />
        </div>
    )
}

export default App
