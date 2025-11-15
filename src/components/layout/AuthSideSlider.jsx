import React from "react";
import ReactCompareImage from "react-compare-image";
import beforeImage from "../../assets/images/authSlider2.png";
import afterImage from "../../assets/images/authSlider1.png";

export default function AuthSideSlider() {
  return (
    <div className="bg-primary flex flex-col items-center justify-center h-screen">
      <div className="w-[360px] h-[450px]  rounded-xl overflow-hidden relative mt-5">

        <div className="absolute inset-0">
          <ReactCompareImage
            leftImage={afterImage}
            rightImage={beforeImage}
            sliderLineColor="#008CFF"
            handleSize={20}
            sliderPositionPercentage={0.5}

          />
        </div>

      </div>
      <h1 className="text-[22px] font-semibold mt-5 text-gray-50 tracking-widest">Your Vision, Our Expertise</h1>
      <p className="text-sm text-gray-100 text-center mt-1 tracking-tight opacity-80">Experience seamless collaboration where your goals meet our professional<br/>
        expertise. Together, we create exceptional results. </p>
    </div>
  )
}
