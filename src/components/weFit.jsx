import React from "react";

const WeFit = () => {
  return (
    <section className=' bg-white flex flex-col items-center'>
      <div className='max-w-4xl w-full flex flex-col items-center text-center mb-10 px-6 md:px-14'>
        <h2 className='font-robotoSlab text-xl md:text-2xl font-bold text-slate-800 mb-2'>
          In the World of eCommerce Shipping
        </h2>
        <h1
          className='text-sky-400 font-extrabold text-4xl md:text-6xl mb-4 tracking-tight font-robotoSlab'
          style={{ lineHeight: 1.1 }}
          
        >
          HERE'S HOW WE FIT IN
        </h1>
        <p className='px-12 text-slate-600 text-base md:text-lg max-w-2xl mx-auto justify-center text-center'>
          PackieHQ lives in the cart and checkout. We use your business logic to
          make it simple and easy to show your customers the most compelling
          shipping options – so you can use your shipping to gain a competitive
          edge.
        </p>
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
        <img src='/weFit_new.png' alt='How We Fit In' className='w-full' />
        <button className='mt-8 group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'>
          <span className='relative z-10'>Start free trial</span>
          <div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
        </button>
      </div>
    </section>
  );
};

export default WeFit;
