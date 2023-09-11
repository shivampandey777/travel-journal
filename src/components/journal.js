import React from "react"

export default function journal(props){
    return (
       <div className="card">
      <div><img src={props.item.imageUrl} alt="image" className="card-img"/>
      </div>
      <div className="card-stat">
        <div> <img src="../images/iconl.svg"  className="card-icon"/> <span className="card-sp">{props.item.location}</span ><span className="card-spv"><a href={props.item.googleMapsUrl}>View on Google Maps</a></span></div>
        <h1 className="card-title">{props.item.title}</h1>
        <h4 className="card-time">{props.item.startDate}- {props.item.endDate} </h4>
        <p className="card-dis">{props.item.description}</p>
      </div>
       </div>
    )
}