import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} className="location-image" />
            <div className="all-info">
                <p className="country-name">{props.item.location}<span className="maps">View on Google Maps</span></p>
                <h1>{props.item.title}</h1>
                <p className="date">{props.item.startDate} - <span>{props.item.endDate}</span></p>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
}