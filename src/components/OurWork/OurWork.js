import React from "react";
import "./OurWork.css"; // Import OurWork specific CSS file
import Sec3Card from "../../Card";
import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.jpg";

const OurWork = () => {
  return (
    <div className="our-work-container">
      <div className="our-work-overlay"></div>
      <div className="our-work-content">
        <div className="our-work-heading">
          <h1 className="text-3xl font-semibold pr-2 text-white">OUR</h1>
          <h1 className="text-3xl text-blue-600 font-semibold">WORK</h1>
        </div>
        <div className="our-work-cards">
          <Sec3Card image={img1} />
          <Sec3Card image={img2} />
          <Sec3Card image={img3} />
        </div>
        <button className="w-40 m-16 border border-blue-900 text-sm text-white py-2 rounded-tl-lg rounded-br-lg">View All</button>
      </div>
    </div>
  );
}

export default OurWork;
