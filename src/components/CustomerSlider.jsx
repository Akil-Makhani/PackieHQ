import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    img: '/homeSlide.webp',
    quote: 'The day we plugged PackieHQ into our website, it cut our customer service tickets in half. We were [also] able to cut our abandon carts in half.',
    author: 'Jason Nista',
    role: 'CEO, Clean Eatz Kitchen',
    link: '#',
  },
  {
    img: '/homeSlide1.webp',
    quote: 'I always knew we’d need a solution like PackieHQ at checkout, to give customers something they’re used to—like an Amazon-style checkout. PackieHQ is now a piece of the puzzle. It adds total transparency for customers and allows us to offer a fully automated click-to-ship experience.',
    author: 'Jordan Gottlieb',
    role: 'Director of Software Engineering, Yakima Chief Hops',
    link: '#',
  },
  {
    img: '/homeSlide2.webp',
    quote: 'The combination of Adobe Commerce and PackieHQ features have allowed us to operate more efficiently behind the scenes and provide a more transparent and streamlined experience for our customers, leading to 50-100% higher conversion rates and improved customer satisfaction.',
    author: 'Ryan VanHoozer',
    role: 'Vice-President of Operations, Marysville Marine',
    link: '#',
  },
];

const CustomerSlider = () => {
  return (
    <section className="w-full bg-white py-12 px-2 md:px-10 lg:px-24 flex flex-col items-center relative overflow-hidden select-none">
      <div className="max-w-7xl w-full">
        <Swiper
          modules={[Pagination, A11y]}
          slidesPerView={1}
          spaceBetween={24}
          pagination={{ clickable: true }}
          allowTouchMove={true}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full flex flex-row items-center min-h-[420px] gap-6 md:gap-8">
                {/* Left: Content */}
                <div className="w-1/2 min-w-0 px-2 md:px-6">
                  <span className="text-slate-600 text-lg mb-2 block font-robotoSlab">Don’t just take our word for it…</span>
                  <h2 className="text-sky-400 font-extrabold text-3xl md:text-5xl mb-4 leading-tight font-robotoSlab">WHAT OUR<br />CUSTOMERS SAY</h2>
                  <div className="flex items-start gap-2 mb-4">
                    <span className="text-sky-400 text-3xl">“</span>
                    <p className="text-slate-700 text-base md:text-lg max-w-xl">{slide.quote}</p>
                  </div>
                  <div className="mt-4">
                    <div className="font-bold text-slate-800 text-lg">{slide.author}</div>
                    <div className="text-slate-600 text-base mb-2">{slide.role}</div>
                    <a href={slide.link} className="font-bold text-slate-800 hover:text-sky-500 transition-colors inline-flex items-center gap-1">
                      Read the Customer Story <span className="text-lg">&#8594;</span>
                    </a>
                  </div>
                </div>
                {/* Right: Image */}
                <div className="w-1/2 min-w-0 flex justify-center items-center overflow-hidden">
                  <img src={slide.img} alt="Customer Story" className="w-full max-w-full h-auto rounded-xl shadow-lg object-contain" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerSlider; 