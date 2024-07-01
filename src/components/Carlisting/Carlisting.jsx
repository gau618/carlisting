import React, { useState } from "react";
import homeImg from "../../assets/homeImg.jpg";
import homeImg1 from "../../assets/logo.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import payment from "../../assets/rrr.png"
import profile from "../../assets/profile.jpg"
import { useNavigate } from "react-router-dom";
import "./Carlisting.scss";

export default function Carlisting({carlist}) {

  
    const [review,setreview]=useState(true);
    const Navigate=useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [homeImg, homeImg1, homeImg, homeImg1, homeImg];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const navigatetobuy=()=>{
    Navigate(`/Buy/${carlist.carId}`)
  }

  return (
    <div className="carlistingcontainer">
      <div className="leftcontainer">
        <div className="topcontainer">
          <img src={images[currentIndex]} alt="Car" />
          <div className="arrows">
            <span className="left-arrow" onClick={goToPrevious}>
              ❮
            </span>
            <span className="right-arrow" onClick={goToNext}>
              ❯
            </span>
          </div>
        </div>
        <div className="middlecontainer">
          <h2>Vehicle Specifications</h2>
          <div className="specification">
            <div className="div1">
              <div className="eachspecification">
                <p className="property">Company:</p>
                <p className="propertyV">{carlist.carcompany}</p>
              </div>
              <div className="eachspecification">
                <p className="property">Carmodel:</p>
                <p className="propertyV">{carlist.carmodel}</p>
              </div>
              <div className="eachspecification">
                <p className="property">Carfuel:</p>
                <p className="propertyV">{carlist.carfuel}</p>
              </div>
              <div className="eachspecification">
                <p className="property">Mileage:</p>
                <p className="propertyV">{carlist.mileage}</p>
              </div>
              <div className="eachspecification">
                <p className="property">Version:</p>
                <p className="propertyV">{carlist.version}</p>
              </div>
              <div className="eachspecification">
                <p className="property">InteriorColor:</p>
                <p className="propertyV">{carlist. interiorColor}</p>
              </div>
            </div>
            <div className="div2">
              <div className="eachspecification">
                <p className="property">Engine:</p>
                <p className="propertyV">{carlist.engine}</p>
              </div>
              <div className="eachspecification">
                <p className="property">Horsepower:</p>
                <p className="propertyV">{carlist.horsepower}</p>
              </div>
              <div className="eachspecification">
                <p className="property">Condition:</p>
                <p className="propertyV">{carlist. condition}</p>
              </div>
              <div className="eachspecification">
                <p className="property">Color:</p>
                <p className="propertyV">{carlist.color}</p>
              </div>
              <div className="eachspecification">
                <p className="property"> Warranty:</p>
                <p className="propertyV">{carlist.warranty}</p>
              </div>
              <div className="eachspecification">
                <p className="property"> PriceType:</p>
                <p className="propertyV">{carlist.priceType}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottomheader">
            <p onClick={()=>{setreview(false)}}>Vehicle Description</p>
            <p onClick={()=>{setreview(true)}}>Reviews</p>
          </div>
          <hr />{review? (<div className="review">
            <h2>Leave a <span>Comment</span> </h2>
            <div className="personalInformation">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Email Address" />
            </div>
            <div className="comment">
                <textarea name="" id="" rows={6} placeholder="Enter Your Comment"></textarea>
            </div>
            <div className="button">
                <button> Post Comment</button>
            </div>
          </div>):<div className="description">
            <p>
              Edipisicing eiusmod tempor incididunt labore sed dolore magna
              aliqa enim ipsum ad minim veniams quis nostrud citation ullam
              laboris nisi ut aliquip laboris nisi ut aliquip ex ea commod.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              <br />
              <br />
              nisi ut aliquip ex ea commodo cons equat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Exepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ipsum perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </p>
          </div>}
        </div>
      </div>
      <div className="rightcontainer">
        <div className="topcontainer">
          <div className="priceCon">
            <p>Price ${carlist.carprice}</p>
          </div>
          <div className="payment">
           <img src={payment} alt="" />
          </div>
          <div className="profile">
            <div className="profileImg">
            <img src={profile} alt="" />
            </div>
            <div className="profiledetails">
                <h2>Gaurav kannaujiya</h2>
                <p>Member since: May 2024</p>
            </div>
          </div>
          <div className="contactInfo">
           
                <div className="icon">
                <FaPhoneAlt />
                </div>
                <div className="detail">
                    <p>Contact Seller </p>
                    <h5>894734XXXX</h5>
                </div>
         
          </div>
        </div>
        <div className="buybutton">
            <button onClick={navigatetobuy}>BUY</button>
        </div>
        <div className="bottomcontainer">
               <div className="Messageheader">
                <p>MESSAGE SELLER</p>
               </div>
               <form action="">
                <div className="name">
                    <label htmlFor="" >Your Name</label>
                    <input type="text" required />
                </div>
                <div className="name">
                    <label htmlFor="" >Your email</label>
                    <input type="text" required />
                </div>
                <div className="name">
                    <label htmlFor="" >Your Name</label>
                    <textarea name="" id=""></textarea>
                </div>
                <button>SEND MESSAGE</button>
               </form>
        </div> 
       
        </div>
    </div>
  );
}
