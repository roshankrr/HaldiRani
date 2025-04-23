"use client";

import CustomCursor from "@/components/custom_cursor";
import Homepage from "@/components/hero/hero";

const Main = () => {
  return (
    <>
    
    <div className="h-1/2 w-full bg-[#FDB737]  text-black ">
      <Homepage/>
      <CustomCursor/>
    </div>
    <div className="h-screen w-full bg-[#FDB737] text-black overflow-hidden">
    </div>
    <div className="h-screen w-full bg-[#FDB737] text-black overflow-hidden">
    </div>
    </>
    
  );
};

export default Main;



