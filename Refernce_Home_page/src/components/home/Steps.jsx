import React from "react";
import "../home/Steps.css";
const Steps = () => {
  return (
    <div style={{margin: "30px 0px 140px 0px"}}>
      {/* <h1>OL circle cards</h1> */}
      <ol>
        <li className="animate-left">
          <div className="icon">
            <i className="fa-solid fa-user-tie"></i>
          </div>
          <div className="title ">Consult & Plan</div>
          {/* <div className="descr">Consult</div> */}
        </li>
       
        <li className="animate-left">
          <div className="icon">
            <i className="fa-solid fa-laptop-code"></i>
          </div>
          <div className="title" >Develop</div>
          {/* <div className="descr">Design</div> */}
        </li>
      
        <li className="animate-left">
          <div className="icon">
            <i className="fa-solid fa-clipboard-check"></i>
          </div>
          <div className="title">Test & Deploy</div>
          {/* <div className="descr">Test</div> */}
        </li>
      
      </ol>
    </div>
  );
};

export default Steps;
