import React from "react";
import { Link } from "react-router-dom";

const ShippingChallenges = () => {
  return (
    <section className='bg-white py-14 px-4 md:px-10 lg:px-24'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* Left Side Image */}
        <div className='flex justify-center lg:justify-start'>
          <img
            src='/challengeImage.webp'
            alt='Shipping Challenges'
            className='w-full max-w-md lg:max-w-lg'
          />
        </div>
        {/* Right Side Content */}
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-4'>
          <h2 className='font-robotoSlab text-2xl md:text-3xl font-bold text-slate-800'>
            We solve for all of your
          </h2>
          <h1 className='text-sky-400 font-extrabold text-3xl md:text-5xl mb-2 tracking-tight relative font-robotoSlab'>
            SHIPPING CHALLENGES
            <span className='block w-40 md:w-72 h-1 bg-sky-300 mt-1 mx-auto lg:mx-0'></span>
          </h1>
          <p className='text-slate-600 text-base md:text-lg max-w-lg'>
            Selling perishables? Products with restrictions? If your product
            catalog deals with variety, regulations, or complexity, we can help
            you control when and what rates and options your customers see at
            checkout.
          </p>
          <Link to='/signup'>
            <button className='mt-4 group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'>
              <span className='relative z-10'>Start free trial</span>
              <div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ShippingChallenges;
