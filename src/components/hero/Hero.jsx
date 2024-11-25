import React from "react";
import "./Hero.scss";

function Hero({ title, desc, url, color, btn_bg, btn_color }) {
  return (
    <div
      style={{
        background: `url(${url}) no-repeat center/cover`,
        color: `${color}`,
      }}
      className="hero"
    >
      <h2 className="title">{title}</h2>
      <p className="desc">{desc}</p>
      <div className="hero__btns">
        <button
          className="hero__btn first__btn"
          style={{
            background: `${btn_bg}`,
            color: `${btn_color}`,
          }}
        >
          Learn more
        </button>
        <button
          className="hero__btn second__btn"
          style={{
            background: "transparent",
            border: `1px solid ${btn_bg}`,
            color:`${btn_bg}`
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default Hero;  
