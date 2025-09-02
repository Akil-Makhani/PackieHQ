import React from "react";
import { Link } from "react-router-dom";

const carrierImages = [
  "/carrier1.svg",
  "/carrier2.svg",
  "/carrier3.svg",
  "/carrier4.svg",
  "/carrier5.svg",
  "/carrier6.svg",
];

const CarriersWorldwide = () => {
  return (
    <section className=' bg-[#f3f8fa] py-24 px-4 md:px-10 lg:px-16 flex justify-center'>
      <div className=' w-full grid grid-cols-1 md:grid-cols-2 gap-2 items-center rounded-2xl'>
        {/* Left Side */}
        <div className='flex flex-col items-center justify-center gap-6 px-2 md:px-8'>
          <span className='text-lg text-slate-600 mb-1 font-robotoSlab'>
            Integrate instantly with
          </span>
          <h1 className='font-robotoSlab text-4xl md:text-6xl font-extrabold text-slate-800 mb-2 leading-tight'>
            50+ Carriers
            <br />
            Worldwide
          </h1>
          <div className='flex gap-4 mt-2'>
            <Link to='/signup'>
              <button className=' group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'>
                <span className='relative z-10'>Start free trial</span>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </button>
            </Link>
            <a
              href='#'
              className='text-slate-700 hover:text-sky-600 font-semibold text-base flex items-center gap-1 transition-colors'
            >
              See all carriers <span className='text-xl'>&#8594;</span>
            </a>
          </div>
        </div>
        {/* Right Side */}
        <div className='flex flex-col items-start justify-left w-full'>
          <div className='grid grid-cols-3 grid-rows-2 gap-6'>
            {carrierImages.map((src, idx) => (
              <div
                key={src}
                className=' flex items-center justify-center w-32 h-28'
              >
                <img
                  src={src}
                  alt={`Carrier ${idx + 1}`}
                  className=' rounded-xl shadow-md max-h-40 max-w-[120px] object-contain'
                />
              </div>
            ))}
          </div>
          {/* <div className="flex items-center gap-2 mt-6 ml-8 md:ml-16">
            <img src="/customized.svg" alt="Custom Table Rates" className="w-20 h-16 object-contain" />
            <div className="text-sky-500 font-bold text-lg leading-tight">
              + custom<br />
              <span className="font-normal text-slate-700">table rates</span><span className="font-normal text-slate-500">/</span><br />
              <span className="font-normal text-slate-500">and more...</span>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CarriersWorldwide;
