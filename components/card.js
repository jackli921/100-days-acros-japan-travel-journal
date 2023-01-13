import React from 'react'

export default function Card(prop){
    const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = prop

    return (
        <div>
            <section className="card">
            <img className="card--image" src={imageUrl} />
            <div className="card--info">
                <div className="card--geo-data">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="card--location">{location.toUpperCase()}</span>
                    <a className="card-google"href={googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--title">{title}</h1>
                <p className="card--date">{startDate} - {endDate}</p>
                <p className="card--description">{description}</p>
            </div>
            </section>
        </div>
        
    )
}