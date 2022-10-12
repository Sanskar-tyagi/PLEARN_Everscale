import React from "react";
import './card.css' 

const Card = () => {
  return (
    <div class="wrapper">

      <div class="overviewInfo">
      <img src="../../public/logo192.png"/>
      </div> 

      <div class="productSpecifications">
        <h1> Dual Sense </h1>
        <p> DualSense also adds a build-in microphone array, which will enable players to easily chat with friends without a headset... </p>

        <div class="productFeatures">
           
          <div class="feature">
            <div class="featureIcon">
            </div>
            <div class="featureText">
              <p> <strong>Haptic</strong></p>
              <p>Feedback</p>
            </div>
          </div>
          <div class="feature">
            <div class="featureIcon">
            </div>
            <div class="featureText">
              <p> <strong>Fast charge</strong></p>
              <p>USB-C port</p>
            </div>
          </div>
        </div>

        <div class="checkoutButton">
          <div class="priceTag">
            <span>$</span>50
          </div>
          <button class="preorder">
            <p>Preorder</p>
            <div class="buttonaction">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z" fill="currentColor" />
              </svg>
            </div>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Card;