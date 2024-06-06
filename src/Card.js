import React from "react";
import "./Card.css";

const Sec3Card = ({ image }) => {
   return (
      <div className="sec3-card-container flex flex-col bg-white border m-2 rounded-lg">
         <div className="sec3-card-image-container w-full h-[60%] p-3">
            <img src={image} className="sec3-card-image w-full h-full rounded-lg" alt="Project"/>
         </div>
         <div className="sec3-card-content flex flex-col pt-3 pl-4 pr-10">
            <div>
               <h1 className="sec3-card-title my-2 font-bold text-2xl text-black">Project Title</h1>
               <div className="sec3-card-description tracking-wide font-medium text-black"> 
                  Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               </div>
            </div>
            <button className="sec3-card-button relative left-[340px] bottom-[30px] p-2 border border-black w-10 h-10 rounded-br-lg rounded-tl-lg">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoX_2o2VSgrxlNRM89Kg21z5LGs8Hm1t7Fg&s" alt="More"/>
            </button>
         </div>
      </div>
   );
}

export default Sec3Card;
