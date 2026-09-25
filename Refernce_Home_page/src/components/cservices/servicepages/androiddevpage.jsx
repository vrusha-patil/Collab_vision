// import React, { Component } from "react";
// import { Image, Button } from "antd";
// import "../servicepages/index.css";
// import Navbar from "../../attributes/Navbar";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

// class androiddevpage extends Component {
//   render() {
//     return (
//       <>
//         <Navbar></Navbar>
//         <div className="container">
//           {/* <div className="image wblock">
//             <Image src="https: <br />//static.wixstatic.com/media/4cdf87_5a89b2293faf4d98bd23a49e9fafebba~mv2.jpg/v1/fill/w_613,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_5a89b2293faf4d98bd23a49e9fafebba~mv2.jpg" />
//           </div> */}
//           <div className="text wblock animate-down">
//             <h1 className="texth1"> Application Development</h1>
//             <h3>About</h3>

//             <li>hi</li>
//             <li>hi</li>
//             <li>hi</li>
//             <li>hi</li>
//             <li>hi</li>

//             <button className="enqbtn" onClick={() => navigate("/contact")}>
//               Enquiry
//             </button>
//             <br />
//             {/* <Button className="btn1" href="#">
//               Previous
//             </Button>
//             <Button className="btn2" href="#">
//               Next
//             </Button> */}
//           </div>
//         </div>
//         <div className="button-container">
//           {/* <Button className="btn1" href="#">
//             Previous
//           </Button>
//           <Button className="btn2" href="#">
//             Next
//           </Button> */}
//         </div>
//       </>
//     );
//   }
// }

// export default androiddevpage;
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
      <div className="container">
        <div className="text wblock animate-down">
          <h1 className="texth1">Application Development</h1>
          <br></br>
          <h3>About</h3> <br />
          <br />
          <li>
            <strong>Native Mobile App</strong>
            <br />
            <strong>
              Technologies: <br />
            </strong>{" "}
            Swift (iOS), Kotlin (Android)
            <br />
            <strong>
              Use Case: <br />
            </strong>{" "}
            High-performance apps, device-specific features
            <br />
            <strong>
              Description: <br />
            </strong>{" "}
            Mobile applications developed specifically for iOS or Android
            platforms. They offer the best performance and access to all device
            features like camera, GPS, and sensors.
          </li>
          <br />
          <br />
          <li>
            <strong>Cross-Platform Mobile App</strong>
            <br />
            <strong>
              Technologies: <br />
            </strong>{" "}
            React Native, Flutter
            <br />
            <strong>
              Use Case: <br />
            </strong>{" "}
            Apps for both iOS and Android, cost-effective development
            <br />
            <strong>
              Description: <br />
            </strong>{" "}
            Single codebase apps that run on both iOS and Android platforms,
            reducing development time and cost. Ideal for startups and
            businesses looking to reach a wider audience.
          </li>
          <br></br>
          <li>
            <strong>Static App</strong>
            <br />
            <strong>
              Technologies: <br />
            </strong>{" "}
            React Native, Flutter
            <br />
            <strong>
              Use Case: <br />
            </strong>{" "}
            Simple calculation tasks, offline usage
            <br />
            <strong>
              Description: <br />
            </strong>{" "}
            A basic app that performs simple operations locally. This app is
            lightweight, easy to use, and can run without internet connectivity.
            Suitable for users who need quick and reliable functionalities.
          </li>
          <br />
          <br />
          <li>
            <strong>Dynamic Full Stack Mobile App</strong>
            <br />
            <strong>
              Technologies: <br />
            </strong>{" "}
            React Native, Flutter, Node.js, Express, MongoDB
            <br />
            <strong>
              Use Case: <br />
            </strong>{" "}
            Feature-rich mobile applications, real-time data, cross-platform
            (iOS & Android)
            <br />
            <strong>
              Description: <br />
            </strong>{" "}
            Complex mobile applications that offer dynamic features such as user
            authentication, data management, and real-time updates. These apps
            are built with full-stack technologies, allowing seamless
            integration with back-end services. Ideal for businesses looking to
            provide interactive and data-driven user experiences across both iOS
            and Android platforms.
          </li>
          <br></br>
          <h3>Desktop App Development</h3>
          <br /> <br />
          <li>
            <strong>Cross-Platform Desktop App</strong>
            <br />
            <strong>
              Technologies: <br />
            </strong>{" "}
            java
            <br />
            <strong>
              Use Case: <br />
            </strong>{" "}
            Applications that run on Windows, macOS, and Linux
            <br />
            <strong>
              Description: <br />
            </strong>{" "}
            Applications that work seamlessly across different operating systems
            with a single codebase. Ideal for businesses needing to reach users
            on multiple platforms without separate development efforts.
          </li>
          <br />
          <br />
          <li>
            <strong>Utility Software</strong>
            <br />
            <strong>
              Technologies: <br />
            </strong>{" "}
            Python, C++
            <br />
            <strong>
              Use Case: <br />
            </strong>{" "}
            Tools, automation, system optimization
            <br />
            <strong>
              Description: <br />
            </strong>{" "}
            Software designed to perform specific tasks such as system cleanup,
            data management, or automation. Useful for both end-users and
            businesses looking to optimize workflows.
          </li>
          <br />
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
