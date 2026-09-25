// import React, { Component } from "react";
// import { Image, Button } from "antd";
// import "../servicepages/index.css";
// import Navbar from "../../attributes/Navbar";

// class webdesign extends Component {
//   render() {
//     return (
//       <>
//         <Navbar></Navbar>
//         <div className="container ">
//           {/* <div className="image wblock">
//             <Image src="https: <br />//static.wixstatic.com/media/4cdf87_da23de8dd2d448e0bb976548bf82ecaf~mv2.jpg/v1/fill/w_950,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/4cdf87_da23de8dd2d448e0bb976548bf82ecaf~mv2.jpg" />
//           </div> */}
//           <div className="text wblock animate-down">
//             <h1 className="texth1">Web Design</h1>
//             <h3>About</h3>
//             <p>
//               Web design encompasses many different skills and disciplines in
//               the production and maintenance of websites. The different areas of
//               web design include web graphic design; user interface design (UI
//               design) authoring, including standardised code and proprietary
//               software; user experience design (UX design) and search engine
//               optimization. Often many individuals will work in teams covering
//               different aspects of the design process, although some designers
//               will cover them all. The term "web design" is normally used to
//               describe the design process relating to the front-end (client
//               side) design of a website including writing markup. Web design
//               partially overlaps web engineering in the broader scope of web
//               development. Web designers are expected to have an awareness of
//               usability and be up to date with web accessibility guidelines.
//             </p>
//             <button className="enqbtn">Enquiry</button>
//             <br />
//             <Button className="btn1" href="#">
//               Previous
//             </Button>
//             <Button className="btn2" href="#">
//               Next
//             </Button>
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

// export default webdesign;

import React from "react";
import { Image, Button } from "antd";
import "../servicepages/index.css";
import Navbar from "../../attributes/Navbar";
import { useNavigate } from "react-router-dom";

const webdesign = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text wblock animate-down">
          <h1 className="texth1">Web Development</h1>
          <br></br>

          <h3>About</h3>
          <br></br>
          <li>
            <strong>Static Site</strong>
            <br />
            <strong>
              Technologies: <br />
            </strong>{" "}
            HTML, CSS, JavaScript
            <br />
            <strong>
              Use Case: <br />
            </strong>{" "}
            Showcase the business, portfolio, personal blog
            <br />
            <strong>
              Description: <br />
            </strong>{" "}
            Simple, fast-loading websites ideal for presenting information that
            doesn't change frequently. Perfect for businesses wanting to create
            an online presence with minimal maintenance.
          </li>
          <br />
          <br />

          <li>
            <strong>E-commerce Website</strong>
            <br />
            <strong>
              Technologies: <br />
            </strong>{" "}
            MERN Stack (MongoDB, Express.js, React, Node.js)
            <br />
            <strong>
              Use Case: <br />
            </strong>{" "}
            Sell products, manage inventory, process payments
            <br />
            <strong>
              Description: <br />
            </strong>{" "}
            Robust e-commerce platforms that allow businesses to sell products
            online, manage orders, and process payments securely. Scalable and
            customizable to meet specific business needs.
          </li>

          <br />
          <br />

          <li>
            <strong>Content Management System (CMS)</strong>
            <br />
            <strong>
              Technologies: <br />
            </strong>{" "}
            WordPress,wix
            <br />
            <strong>
              Use Case: <br />
            </strong>{" "}
            Blogs, news sites, content-driven websites
            <br />
            <strong>
              Description: <br />
            </strong>{" "}
            Platforms that allow users to easily manage and update content
            without technical knowledge. Ideal for websites that require
            frequent updates or have multiple contributors.
          </li>

          <br />
          <br />

          <li>
            <strong>Single Page Application (SPA)</strong>
            <br />
            <strong>
              Technologies: <br />
            </strong>{" "}
            React, next js, Vue.js
            <br />
            <strong>
              Use Case: <br />
            </strong>{" "}
            Interactive web apps, dashboards, user interfaces
            <br />
            <strong>
              Description: <br />
            </strong>{" "}
            Fast and responsive applications that load a single HTML page and
            dynamically update content as the user interacts with the app. Great
            for creating seamless user experiences.
          </li>
          <br />
          <br />

          <li>
            <strong>Progressive Web App (PWA)</strong>
            <br />
            <strong>
              Technologies: <br />
            </strong>{" "}
            React, next js, Service Workers
            <br />
            <strong>
              Use Case: <br />
            </strong>{" "}
            Mobile-friendly web apps, offline access
            <br />
            <strong>
              Description: <br />
            </strong>{" "}
            Web applications that provide a native app-like experience on mobile
            devices, with the ability to work offline and send push
            notifications. Ideal for businesses wanting to reach users on mobile
            without the cost of developing a native app.
          </li>
          <br />
          <br />

          <li>
            <strong>Enterprise Web App</strong>
            <br />
            <strong>
              Technologies: <br />
            </strong>{" "}
            Java, next js
            <br />
            <strong>
              Use Case: <br />
            </strong>{" "}
            Large-scale business applications, internal tools
            <br />
            <strong>
              Description: <br />
            </strong>{" "}
            Complex, scalable applications designed for large enterprises. These
            apps manage business processes, data, and communication within
            organizations.
          </li>
          <br></br>

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

export default webdesign;
