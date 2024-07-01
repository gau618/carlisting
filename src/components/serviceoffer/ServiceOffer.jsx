import React from 'react'
import logo1 from "../../assets/a.png"
import logo2 from "../../assets/b.png"
import logo3 from "../../assets/c.png"
import logo4 from "../../assets/d.png"
import logo5 from "../../assets/e.png"
import { BiSolidCarMechanic } from "react-icons/bi";

import "./ServiceOffer.scss"
export default function ServiceOffer() {
  return (
    <>
   
    <div className="serviceContainer">
    <div className="Serviceheading">
        <p>HELPS YOU TO FIND YOUR NEXT CAR EASILY</p>
        <h1>Services We <span>Offers</span></h1>
    </div>
    <div className="cardscontainers">
        <div className="card">
            <img src={logo1} alt="" />
            <p>Auto Financing</p>
        </div>
        <div className="card">
            <img src={logo2} alt="" />
            <p>Auto Financing</p>
        </div>
        <div className="card">
            <img src={logo3} alt="" />
            <p>Auto Financing</p>
        </div>
        <div className="card">
            <img src={logo4} alt="" />
            <p>Auto Financing</p>
        </div>
        <div className="card">
            <img src={logo5} alt="" />
            <p>Auto Financing</p>
        </div>
    </div>
    </div>
    </>
  )
}
