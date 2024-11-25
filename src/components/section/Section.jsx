import React from 'react'
import "./Section.scss"

function Section({ url, title, desc1, desc2, buttons, top, cl, btn_bg }) {
  return (
    <div className="main__item">
      <div
        style={{
          background: `url(${url}) no-repeat center/cover`,
          color: cl,
          padding: top === "false" ? "280px 50px 0" : "", // Agar top "false" bo'lsa, padding qo'shish
        }}
        className="main__item__block"
      >
        <h2>{title}</h2>
        <p>{desc1}</p>
        <p>{desc2}</p>
        <div className="main__buttons">
          {buttons.map((btn, inx) => (
            <button
              key={inx}
              className="main__btn"
              style={{
                background:
                  buttons.length === 1
                    ? "#0171E1"
                    : btn === "Learn more"
                    ? "#0171E2"
                    : "transparent",

                color:
                  buttons.length === 1
                    ? "white"
                    : btn === "Learn more"
                    ? "white"
                    : "#0171E2",

                border:
                  buttons.length === 1
                    ? "none"
                    : btn === "Learn more"
                    ? "1px solid #0171E2"
                    : `1px solid #0171E2`,
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section