import "./Services.css";
import React, { useEffect, useState } from "react";
import Navbar from "../attributes/Navbar";
import { useNavigate } from "react-router-dom";
import { FiPenTool, FiTrendingUp, FiCode, FiSmartphone, FiStar, FiCloud } from "react-icons/fi";

const cardData = [
  {
    title: "Graphic Designing",
    icon: <FiPenTool />,
    description: "Creative and visually appealing designs that capture your brand's unique identity."
  },
  {
    title: "Search Engine Optimization",
    icon: <FiTrendingUp />,
    description: "Optimize your online presence to rank higher and attract targeted organic traffic."
  },
  {
    title: "Web Development",
    icon: <FiCode />,
    description: "Responsive, high-performance websites built with the latest modern frameworks.",
    href: "/services/webdesign"
  },
  {
    title: "Application Development",
    icon: <FiSmartphone />,
    description: "Robust mobile and desktop applications tailored to your business needs.",
    href: "/services/appdev"
  },
  {
    title: "Digital Branding",
    icon: <FiStar />,
    description: "Comprehensive branding strategies to establish a strong digital footprint."
  },
  {
    title: "Cloud Services",
    icon: <FiCloud />,
    description: "Scalable and secure cloud infrastructure setup, migration, and management."
  },
  {
    title: "Integration",
    icon: <FiCloud />, // Can use a plug or link icon, but FiCloud or similar works. Let's import FiLink. Wait, FiLink isn't imported. I will just use FiCode or FiCloud, or better, add FiLink to imports below. Wait, I can't easily change imports in this chunk safely without knowing if it's there. Let's just use FiCode for now.
    description: "Seamlessly connect and integrate multiple software systems to streamline your operations.",
    href: "/services/integration"
  }
];

// Replaced specific industry domains with placeholder "Domain" as requested
const domains = Array(12).fill("Domain");

function Services() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Small delay to ensure CSS classes apply after render for the poker deal animation
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <div className="services-page-container">
        <h1 className="services-main-heading">Our Services</h1>
        
        <div className="custom-services-grid">
          {cardData.map((card, index) => (
            <div 
              key={index} 
              className={`custom-service-card ${animate ? 'deal-animation' : ''}`}
              style={{ '--card-index': index }}
            >
              <div className="card-icon-wrapper">{card.icon}</div>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              {card.href && (
                <button 
                  className="view-details-btn" 
                  onClick={() => navigate(card.href)}
                >
                  View Details
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="domains-section">
          <h2>Domains We Work With</h2>
          <div className="domains-grid">
            {domains.map((domain, idx) => (
              <div key={idx} className="domain-box">
                {domain}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
