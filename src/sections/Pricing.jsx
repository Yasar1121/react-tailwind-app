import React from "react";
import { tick } from "../assets/icons";
import { pricing } from "../exports";
import PriceGrid from "../components/PriceGrid";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className=" w-full bg-slate-200 flex-col justify-center items-start h-fit px-7 py-14 lg:p-20 gap-5 "
    >
      <h1 className="text-green-600 font-bold text-6xl">Pricing Table</h1>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 justify-between items-start w-full mt-5">
        <p className="text-slate-950 text-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          dignissimos esse nobis repellat nisi ducimus voluptates tenetur
          quaerat placeat beatae.
        </p>
        <div className="w-full lg:w-2/4">
          <ul className="flex flex-col justify-center items-start gap-4">
            <li className="flex justify-center items-center gap-4 text-[21px] text-gray-800">
              <span className="bg-green-400 p-1 rounded-full fill-white ">
                <img src={tick} alt="tick" width={30} height={30} />
              </span>
              Unlimited pages
            </li>
            <li className="flex justify-center items-center gap-4 text-[21px] text-gray-800">
              <span className="bg-green-400 p-1 rounded-full fill-white ">
                <img src={tick} alt="tick" width={30} height={30} />
              </span>
              Unlimited pages
            </li>
            <li className="flex justify-center items-center gap-4 text-[21px] text-gray-800">
              <span className="bg-green-400 p-1 rounded-full fill-white ">
                <img src={tick} alt="tick" width={30} height={30} />
              </span>
              Unlimited pages
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-2/4">
          <ul className="flex flex-col justify-center items-start gap-4 ">
            <li className="flex justify-center items-center gap-4 text-[21px] text-gray-800">
              <span className="bg-green-400 p-1 rounded-full fill-white ">
                <img src={tick} alt="tick" width={30} height={30} />
              </span>
              Unlimited pages
            </li>
            <li className="flex justify-center items-center gap-4 text-[21px] text-gray-800">
              <span className="bg-green-400 p-1 rounded-full fill-white ">
                <img src={tick} alt="tick" width={30} height={30} />
              </span>
              Unlimited pages
            </li>
            <li className="flex justify-center items-center gap-4 text-[21px] text-gray-800">
              <span className="bg-green-400 p-1 rounded-full fill-white ">
                <img src={tick} alt="tick" width={30} height={30} />
              </span>
              Unlimited pages
            </li>
          </ul>
        </div>
      </div>
      <div className=" w-full flex justify-around flex-wrap items-center gap-10  mt-20">
        {pricing.map((price) => (
          <div className="w-96" key={price.plan}>
            <PriceGrid {...price} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
