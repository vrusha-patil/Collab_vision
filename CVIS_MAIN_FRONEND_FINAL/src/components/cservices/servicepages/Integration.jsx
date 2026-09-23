import React from "react";
import { Image, Button } from "antd";
import "../servicepages/index.css";
import Navbar from "../../attributes/Navbar";
import { useNavigate } from "react-router-dom";

const AndroidDevPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    <>
      <Navbar />
      <div className="container" >
      <div
        style={{
          width: "70%",
          height: "auto",
          margin: "0 15%",  // Horizontal margins in percentage
                    textAlign: "center",
          border:"2px solid red"
        }}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1701590725747-ac131d4dcffd?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your banner image path
          alt="Banner"
          style={{ width: "100%", height: "auto", display: "block", margin: "0 auto" }}
        />
      </div>
        {/* <div className="text wblock animate-down">
          <h1 className="texth1">MuleSoft Integration</h1>
          <br></br>
          <h3>About</h3>
          <br></br>
          <li>
            <strong>MuleSoft Integration</strong>
            <br />
            <strong>
              Context: <br />
            </strong>{" "}
            A company wants to integrate multiple systems to streamline its payroll processes, which involves data from HR, finance, and time-tracking systems. The challenge is to connect these disparate systems efficiently to ensure real-time data exchange and a seamless payroll process.Challenges with Payroll System Integration:Multiple Systems: Payroll systems need to pull data from various sources such as HR management systems (HRMS), enterprise resource planning (ERP), attendance management systems, and banks.Real-time Data Sync: Payroll calculations require real-time or near real-time data like employee records, working hours, tax rates, and benefits.            <br />
            <strong>
            Solution Using MuleSoft:: <br />
            </strong>{" "}
           MuleSoft, with its Anypoint Platform, can be used to integrate payroll systems with other enterprise applications. Here's how:System Integration: MuleSoft acts as a middleware, integrating different systems such as HRMS, ERP, time-tracking tools, and banks. The platform enables smooth data flow between these systems by providing pre-built connectors for systems like SAP, Workday, ADP, Oracle, and banking APIs.Example:Payroll data from the HRMS (e.g., Workday) is integrated with ERP (e.g., SAP) for financial processing.Time data is pulled from a time-tracking system like Kronos and sent to the payroll engine in real-time.            <br />
            <strong>
            Compliance and Security:  <br />
            </strong>{" "}
           MuleSoft’s Anypoint Platform ensures secure data exchange through encryption, role-based access control, and OAuth 2.0 for authentication. It helps maintain compliance with regulations like GDPR and ensures that sensitive data like salaries and tax information is protected.Example:Sensitive payroll data is encrypted while being transmitted between the payroll system and a banking institution for direct deposit.Automation and Error Handling: MuleSoft can automate payroll workflows and handle errors gracefully. For example, if there’s a mismatch in an employee’s data, MuleSoft can flag this issue and send a notification to HR or IT, ensuring no delays in payroll processing.Scalability and Reusability: MuleSoft’s API architecture makes the payroll system scalable and future-proof. As the organization grows, APIs can be reused for integrating new systems or making adjustments to payroll logic without starting from scratch.
          </li>
          <br></br> <br></br>
          <li>
            <strong>API Management and Design</strong>
            <br />
            <strong>
              Technologies: <br />
            </strong>{" "}
            MuleSoft API Designer, RAML, OAS
            <br />
            <strong>
              Use Case: <br />
            </strong>{" "}
            API design, documentation, and governance
            <br />
            <strong>
              Description: <br />
            </strong>{" "}
            Design, document, and manage APIs using MuleSoft's tools.
            Facilitates the creation of well-structured APIs that are easy to
            integrate and maintain. Supports API governance and documentation to
            ensure consistency and compliance across your API ecosystem.
          </li>
          <br />
          <br />
          <button className="enqbtn" onClick={handleNavigate}>
            Enquiry
          </button>
          <br />
        </div> */}

         <div className="text wblock animate-down">
          <h1 className="texth1">Integrate ADP & Kronos via MuleSoft</h1>
          <br />
          <h3>Short Description:</h3>
          <br />
          <p>
          <li>
      <strong>Seamless Integration:</strong> MuleSoft integrates ADP and Kronos systems used across different firm locations.
    </li>
    <li>
      <strong>Unified Payroll Processes:</strong> Streamlines payroll processes by ensuring consistent data flow between various systems.
    </li>
    <li>
      <strong>Real-Time Data Flow:</strong> Facilitates real-time data exchange, ensuring efficient payroll management across the organization.
    </li>
    <li>
      <strong>Middleware Functionality:</strong> Acts as middleware, automating data synchronization and reducing manual efforts.
    </li>          </p>
          <br />
          <button className="enqbtn" onClick={handleNavigate}>
            Enquiry
          </button>
          <br />
        </div>
      </div>
      <div className="button-container"></div>
    </>
  );
};

export default AndroidDevPage;
