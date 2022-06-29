import React,{useState} from 'react'
import "./CardFlip.css"
import ZoomImage from './ZoomImage'
import {AiFillHeart} from "react-icons/ai"

const CardFlip = (props) => {

    const [toggleHeart, setToggleHeart] = useState(false);
    const changeColor = () => {
      setToggleHeart(!toggleHeart);
    }

  return (
    <div className="cardWrap">
    <div className="content mt-5">
      <span className="price">{props.price}</span>
      <div
        className={toggleHeart === true ? "card-active" : "card-action"}
        onClick={changeColor}
      >
          <AiFillHeart/>
      </div>
      <div className="p-image mt-2 mb-2">
        <ZoomImage src={props.image} width="200" alt="proImage" />
      </div>
      <h4>{props.name}</h4>
      <span className="line"></span>
      <h4>{props.content}</h4>
      <button onClick={props.onClick}>Buy Now</button>
    </div>
  </div>
  )
}

export default CardFlip