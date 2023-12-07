import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl bg-neutralSilver py-16">
      <div className="flex items-center justify-center lg:w-3/5 mx-auto">
        <div className="text-center">
          <h2 className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <div className="flex items-center justify-center  gap-8">
            <button className="btn-primary">
              Get a Demo <FaArrowRightLong className="inline-block ml-2" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
