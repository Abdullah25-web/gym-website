import React from "react";
import "./Reasons.css";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
import adidas from "../../assets/adidas.png";
import nb from "../../assets/nb.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

function Reasons() {
  return (
    <div className="Reasons" id="whyUs">
      <div className="left-r">
        <img src={image1} alt="" srcset=""  />
        <img src={image2} alt="" srcset="" />
        <img src={image3} alt="" srcset="" />
        <img src={image4} alt="" srcset="" />
      </div>
      <div className="right-r">
        <span>some reasons</span>

        <div>
          <span className="stroke-text">why</span>
          <span> choose us?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="" srcset="" />
            <span>Over 140+ expert choices </span>
          </div>
          <div>
            <img src={tick} alt="" srcset="" />
            <span>train smarter and faster than before </span>
          </div>
          <div>
            <img src={tick} alt="" srcset="" />
            <span>1 free program for new member </span>
          </div>
          <div>
            <img src={tick} alt="" srcset="" />
            <span>relaiable partners</span>
          </div>
        </div>

        <span style={{ color: "grey", fontWeight: "normal" }}>
          our partners
        </span>

        <div className="partners">
          <img src={nb} alt="" srcset="" />
          <img src={adidas} alt="" srcset="" />
          <img src={nike} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default Reasons;
