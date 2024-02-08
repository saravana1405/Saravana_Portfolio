import React from 'react'
import { mainphoto } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[300px] lgl:w-[300px] lgl:h-[300px] z-10"
        src={mainphoto}
        alt="bannerImg"
        id='mainphoto'
      />
      <div className="absolute bottom-0  bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner