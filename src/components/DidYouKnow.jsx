import React from 'react';

const stats = [
  {
    percent: '91%',
    desc: 'of shoppers try to reach a free shipping threshold',
    link: '#',
    img: '/youKnow1.webp',
    card: {
      price: '$0.00',
      label: 'Free Shipping',
      sublabel: 'Ground Shipping',
    },
  },
  {
    percent: '45%',
    desc: 'of customers abandon their cart because of unsatisfactory delivery options',
    link: '#',
    img: '/youKnow2.webp',
    card: {
      price: '$125.00',
      label: 'Standard',
      sublabel: 'Delivers Sat. 21 July',
    },
  },
  {
    percent: '82%',
    desc: 'of customers prefer to shop from a retailer that shows actual delivery dates',
    link: '#',
    img: '/youKnow3.webp',
    card: {
      price: '$19.20',
      label: 'Express',
      sublabel: 'Delivers Wed. 10 June',
    },
  },
];

const DidYouKnow = () => {
  return (
    <section className="bg-white py-16  flex flex-col items-center">
      <h1 className="text-sky-400 font-extrabold text-4xl md:text-6xl mb-12 tracking-tight text-center font-robotoSlab">DID YOU KNOW THAT...</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 w-full max-w-7xl">
        {stats.map((stat, idx) => (
          <div key={stat.percent} className="flex flex-col items-center text-center relative">
            <div className="bg-sky-400 text-white font-extrabold text-4xl md:text-5xl rounded-full w-32 h-32 flex items-center justify-center shadow-lg mb-4">
              {stat.percent}
            </div>
            <div className="text-slate-700 text-base md:text-lg mb-2 max-w-xs">
              {stat.desc}
            </div>
            <a href={stat.link} className="font-bold text-slate-800 hover:text-sky-500 transition-colors flex items-center gap-1 mb-4">
              Read our blog <span className="text-lg">&#8594;</span>
            </a>
            {/* Image and card group */}
            <div className="flex flex-col items-center mt-2">
              <img src={stat.img} alt="" className="w-32 md:w-40 h-auto object-contain mb-2" />
              <div className="bg-white rounded-lg shadow-md px-4 py-2 flex items-center gap-2 min-w-[220px] max-w-xs mx-auto">
                <span className="text-orange-500 text-lg font-bold">{stat.card.price}</span>
                <div className="flex flex-col items-start text-left">
                  <span className="text-slate-800 font-semibold text-sm leading-tight">{stat.card.label}</span>
                  <span className="text-slate-500 text-xs leading-tight">{stat.card.sublabel}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Decorative images for mobile, stacked below */}
      <div className="flex md:hidden justify-between w-full mt-24 gap-2">
        {stats.map((stat, idx) => (
          <img key={stat.img} src={stat.img} alt="" className="w-32 h-32 object-contain" />
        ))}
      </div>
    </section>
  );
};

export default DidYouKnow; 