import { useEffect, useRef, useState } from "react";

const sliderImages = ["/successSlide1.webp", "/successSlide2.webp"];

const CheckoutSuccess = () => {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const dragRef = useRef({ isDown: false, startX: 0 });

  const goTo = (i) => setIndex((i + sliderImages.length) % sliderImages.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    // autoplay
    timerRef.current = setInterval(() => {
      setIndex((prevIdx) => (prevIdx + 1) % sliderImages.length);
    }, 3500);
    return () => clearInterval(timerRef.current);
  }, []);

  const pause = () => timerRef.current && clearInterval(timerRef.current);
  const resume = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setIndex((prevIdx) => (prevIdx + 1) % sliderImages.length);
      }, 3500);
    }
  };

  const onPointerDown = (e) => {
    pause();
    dragRef.current.isDown = true;
    dragRef.current.startX = e.clientX ?? 0;
  };

  const onPointerMove = (e) => {
    if (!dragRef.current.isDown) return;
    const dx = (e.clientX ?? 0) - dragRef.current.startX;
    const threshold = 40;
    if (Math.abs(dx) > threshold) {
      if (dx > 0) {
        prev();
      } else {
        next();
      }
      dragRef.current.isDown = false;
      resume();
    }
  };

  const onPointerUp = () => {
    dragRef.current.isDown = false;
    resume();
  };

  return (
    <section className='w-full bg-white'>
      <div className='mx-auto px-6 md:px-14 lg:px-24 py-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* Left copy */}
        <div>
          <p className='font-robotoSlab text-sky-600 font-semibold'>
            Invest in checkout success
          </p>
          <h2 className='font-robotoSlab mt-2 text-4xl md:text-6xl font-bold text-slate-800 leading-tight'>
            Capture more sales
            <br />
            at checkout
          </h2>
          <p className='mt-6 text-slate-600 max-w-xl'>
            You can't afford to lose 69% of sales to abandoned carts. Turn them
            into completed sales with accurate delivery dates, same day shipping
            and expedited options that satisfy customer expectations.
          </p>
          <button className='mt-8 group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'>
            <span className='relative z-10'>Start free trial</span>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </button>
        </div>

        {/* Right slider */}
        <div className='relative' onMouseEnter={pause} onMouseLeave={resume}>
          <div
            className='relative h-[320px] md:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden select-none touch-pan-y cursor-grab active:cursor-grabbing'
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {sliderImages.map((src, i) => (
              <img
                key={`${src}-${i}`}
                src={src}
                alt={`Slide ${i + 1}`}
                className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-500 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
                draggable={false}
              />
            ))}
          </div>

          {/* Dots */}
          <div className='mt-3 flex items-center justify-center gap-2'>
            {sliderImages.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === index ? "bg-sky-600" : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
