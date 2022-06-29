import React, { useState } from 'react';
import "./CardFlip.css";
import ZoomImage from './ZoomImage';
import { AiFillHeart } from "react-icons/ai";

const CardFlip = props => {
  const [toggleHeart, setToggleHeart] = useState(false);

  const changeColor = () => {
    setToggleHeart(!toggleHeart);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "cardWrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "content mt-5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "price"
  }, props.price), /*#__PURE__*/React.createElement("div", {
    className: toggleHeart === true ? "card-active" : "card-action",
    onClick: changeColor
  }, /*#__PURE__*/React.createElement(AiFillHeart, null)), /*#__PURE__*/React.createElement("div", {
    className: "p-image mt-2 mb-2"
  }, /*#__PURE__*/React.createElement(ZoomImage, {
    src: props.image,
    width: "200",
    alt: "proImage"
  })), /*#__PURE__*/React.createElement("h4", null, props.name), /*#__PURE__*/React.createElement("span", {
    className: "line"
  }), /*#__PURE__*/React.createElement("h4", null, props.content), /*#__PURE__*/React.createElement("button", {
    onClick: props.onClick
  }, "Buy Now")));
};

export default CardFlip;