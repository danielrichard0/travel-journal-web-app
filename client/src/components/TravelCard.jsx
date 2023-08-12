import React from "react"
import LocationImg from "../assets/location.png"
import MountIjen from "../assets/Mount_Ijen.jpg"


export default function TravelCard(props) {
    return (
        <section  className="card--body">
            <img className="card--image" src={props.item.image} alt="hi there" />         
            <div className="card--details">
                <div className="card--location">
                    <img src={LocationImg} alt="" />
                    <h4>{props.item.location}</h4>
                </div>
                <h1 className="card--title">{props.item.title}</h1>
                <p className="card--date">
                    {props.item.date}
                </p>
                <p className="card--paragraph">
                    {props.item.description}
                </p>
            </div>

        </section>
    )
}