import React from "react";
import Android from "./card media/android dev.png";
import Integration from "./card media/integration.jpg";
import DigitalMarketing from "./card media/digital marketing.png";
import WebDesigning from "./card media/web_designing.jpg";
import "./cards.css";
import { Link, useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();

  const handleCardClick = (category) => {
    if (category === "web") {
      navigate(`/services/webdesign`);
    } else if (category === "Integration") {
      navigate(`/services/Integration`);
    } else if (category === "App Development") {
      navigate(`/services/appdev`);
    }
  };

  return (
    <div className="main-container" style={{ flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ color: "black", margin: "40px 0 10px 0", fontSize: "2.5rem", fontWeight: "700" }}>Services</h1>
      <div className="card-container">
        
        {/* First Card - Integration */}
        <div className="flip-card animate-right">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="card-image">
                <img src={Integration} alt="integration" />
              </div>
              <div className="card-title">Integration</div>
            </div>
            <div className="flip-card-back">
              <p className="card-text">
                Seamlessly connecting systems and enhancing workflows with our
                robust integration platform solutions
              </p>
              <button className="explore-btn" onClick={() => handleCardClick("Integration")}>
                Explore
              </button>
            </div>
          </div>
        </div>
      
        {/* Second Card - Web Development */}
        <div className="flip-card animate-right">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="card-image">
                <img src={WebDesigning} alt="Web Designing" />
              </div>
              <div className="card-title">Web Development</div>
            </div>
            <div className="flip-card-back">
              <p className="card-text">
                Creating dynamic and tailored web solutions with our expert web
                development services.
              </p>
              <button className="explore-btn" onClick={() => handleCardClick("web")}>
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* Third Card - App Development */}
        <div className="flip-card animate-left">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="card-image">
                <img src={Android} alt="Android App Development" />
              </div>
              <div className="card-title">App Development</div>
            </div>
            <div className="flip-card-back">
              <p className="card-text">
                Empowering innovation through cutting-edge mobile and web app
                development tailored to your needs.
              </p>
              <button className="explore-btn" onClick={() => handleCardClick("App Development")}>
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "380px", marginLeft: "10px" }}>
          <button 
            className="explore-btn"
            style={{ 
              padding: "8px 18px",
              fontSize: "0.95rem"
            }}
            onClick={() => navigate("/services")}
          >
            View More &rarr;
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cards;
