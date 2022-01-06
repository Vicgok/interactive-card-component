import React, { useState } from 'react'
import icon_check from '../images/icon-check.svg'
import '../styles/_card.scss'

let sliderPos = 2
let discount = false

const Card = () => {
  const objCardDataArr = {
    pageViews: ['10k', '50k', '100k', '500k', '1m'],
    standardPrices: ['8.00', '12.00', '16.00', '24.00', '36.00'],
  }

  const discountPrices = objCardDataArr.standardPrices.map(value =>
    (value - (25 / 100) * value).toFixed(2)
  )

  const [price, setPrice] = useState(`${objCardDataArr.standardPrices[2]}`)
  const [views, setPageViews] = useState(`${objCardDataArr.pageViews[2]}`)

  const sliderThumbHandler = event => {
    sliderPos = event.target.value
    displayPrice()
    displayPageViews()
  }

  const discountToggleHandler = () => {
    discount ? (discount = false) : (discount = true)
    displayPrice()
  }

  const displayPrice = () =>
    discount
      ? setPrice(`${discountPrices[sliderPos]}`)
      : setPrice(`${objCardDataArr.standardPrices[sliderPos]}`)

  const displayPageViews = () => {
    setPageViews(objCardDataArr.pageViews[sliderPos])
  }
  return (
    <div className="card-container">
      <div className="card__price-content">
        <p className="pageviews">{views} pageviews</p>
        <input
          type="range"
          className="rangeSlider"
          min="0"
          max="4"
          defaultValue="2"
          onChange={sliderThumbHandler}
          step="1"
        ></input>
        <p className="price">
          <span>${price}</span>/month
        </p>
      </div>
      <div className="subcriptionType">
        <p>Monthly Billing</p>
        <input type="checkbox" onChange={discountToggleHandler}></input>
        <p>
          Yearly Billing
          <span className="discountPrice">
            -25% <span className="textForLargeScreen"> discount</span>
          </span>
        </p>
      </div>
      <hr></hr>
      <div className="card__footer">
        <ul className="benefitsList">
          <li>
            <img src={icon_check} alt="tickmark"></img>Unlimited websites
          </li>
          <li>
            <img src={icon_check} alt="tickmark"></img>100% data ownership
          </li>
          <li>
            <img src={icon_check} alt="tickmark"></img>Email reports
          </li>
        </ul>
        <a className="btn" href="#!">
          Start my trial
        </a>
      </div>
    </div>
  )
}

export default Card
