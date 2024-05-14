import React from "react";
// import { RiCameraLine } from "react-icons/ri";
import { Vortex} from "react-loader-spinner";

const CameraLoader = () => (
  <div className="camera-loader justify-center items-center absolute w-full h-full flex ">
    
    <Vortex
  visible={true}
  height="80"
  width="80"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
  />
  </div>
);

export default CameraLoader;