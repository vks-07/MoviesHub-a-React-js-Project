import React from "react";
import { RingLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className=" w-full h-screen flex justify-center items-center bg-black">
      <RingLoader color="#f3f6eb" size={300} />
    </div>
  );
}
