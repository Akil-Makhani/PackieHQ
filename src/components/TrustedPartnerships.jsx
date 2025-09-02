import React from 'react';

const partners = [
  '/partner1.webp',
  '/partner2.svg',
  '/partner3.svg',
  '/partner4.svg',
  '/partner5.svg',
  '/partner6.svg',
  '/partner7.svg',
  '/partner8.webp',
];

const TrustedPartnerships = () => {
  return (
    <section className=" bg-white py-14 px-24  flex flex-col items-center">
      <div className=" flex flex-col items-center text-center">
        <p className="text-slate-600 text-lg font-robotoSlab">Keeping good company</p>
        <h2 className="text-sky-400 font-extrabold text-3xl md:text-5xl mt-2 mb-8 font-robotoSlab">OUR TRUSTED PARTNERSHIPS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {partners.map((src) => (
            <div key={src} className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 flex items-center justify-center h-28">
              <img src={src} alt="Partner" className="max-h-20 max-w-[180px] w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnerships; 