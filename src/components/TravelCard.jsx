import React from "react"
import LocationImg from "../assets/location.png"
import MountIjen from "../assets/Mount_Ijen.jpg"

export default function TravelCard() {
    return (
        <section  className="card--body">
            <img className="card--image" src={MountIjen} alt="hi there" />         
            <div className="card--details">
                <div className="card--location">
                    <img src={LocationImg} alt="" />
                    <h4>Jawa Tengah, Indonesia</h4>
                </div>
                <h1 className="card--title">Mount Ijen</h1>
                <p className="card--date">
                    28 may 2022
                </p>
                <p className="card--paragraph">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit maiores odit laboriosam odio ex
                    repudiandae reprehenderit error ea veritatis consequuntur. Quibusdam dignissimos dicta molestiae
                    non sunt doloremque quisquam, quis eos sed tenetur quod temporibus vel ut aliquid ipsum
                </p>
            </div>

        </section>
    )
}