import React from 'react'
import './css/Header.css'
const Header = (props) => {
    return (
        <>
            <header className="header">
                <span className="header-location">
                    {!props.country ? null : <span>{props.country}</span>}
                    {props.city ? <span>, {props.city}</span> : null}
                </span>

                <span style={{ width: '33%' }}>Weather</span>
                <div className="search-form">
                    <form onSubmit={props.getLatLong}>
                        <input
                            ref={props.search}
                            className="search"
                            placeholder="Location..."
                            type="text"
                        />
                        <button className="submit" type="submit">
                            <span className="material-icons">search</span>
                        </button>
                    </form>
                </div>
            </header>
        </>
    )
}

export default Header
