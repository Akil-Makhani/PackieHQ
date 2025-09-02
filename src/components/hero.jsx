import { Play, X } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Hero = ({
  videoSrc = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  posterSrc = "/heroVideo.webp",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalVideoRef = useRef(null);

  const handleClose = () => {
    if (modalVideoRef.current) {
      try {
        modalVideoRef.current.pause();
      } catch (e) {}
    }
    setIsOpen(false);
  };

  return (
    <section className='relative w-full bg-gradient-to-br from-slate-50 via-white to-sky-50 overflow-hidden'>
      {/* Background decorative elements */}

      <div className='relative px-4 md:px-10 lg:px-24 py-10 mb-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center'>
            {/* Left: Content */}
            <div className='relative z-10'>
              {/* Eyebrow */}

              {/* Main Headline */}
              <div className='space-y-4 mb-6'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight'>
                  <span className='block font-caveat font-bold text-slate-700 mb-6'>
                    Shipping is key to
                  </span>

                  <span className='block font-elite bg-gradient-to-r from-sky-500 via-sky-600 to-sky-700 bg-clip-text text-transparent tracking-widest'>
                    MORE SALES
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className='text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed'>
                Increase conversions up to 50% at checkout with customized
                rates, pickup and delivery options, transparent delivery times
                and more!
              </p>

              {/* CTA Buttons */}
              <div className='flex flex-col sm:flex-row gap-4 mb-8'>
                <Link to='/signup'>
                  <button className='group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'>
                    <span className='relative z-10'>Start free trial</span>
                    <div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  </button>
                </Link>
                <button className='px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-2xl hover:bg-slate-50 hover:border-slate-400 transform hover:-translate-y-1 transition-all duration-300'>
                  Book a demo
                </button>
              </div>
            </div>

            {/* Right: Video */}
            <div className='relative lg:order-2'>
              <div className='relative group'>
                {/* Video container with enhanced styling */}
                <div className='relative overflow-hidden rounded-3xl shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500'>
                  <video
                    src={posterSrc}
                    poster={posterSrc}
                    className='w-full h-auto block'
                    autoPlay
                    muted
                    loop
                    playsInline
                  />

                  {/* Enhanced overlay */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent'></div>
                </div>

                {/* Play button with enhanced styling */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <button
                    onClick={() => setIsOpen(true)}
                    className='group/play relative bg-white/90 backdrop-blur-sm text-slate-800 h-20 w-20 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 border-4 border-white/20'
                    aria-label='Play video'
                  >
                    <Play className='h-8 w-8 ml-1 group-hover/play:scale-110 transition-transform duration-300' />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal - unchanged */}
      {isOpen && (
        <div
          className='fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center'
          onClick={handleClose}
          role='dialog'
          aria-modal='true'
          aria-label='Video modal'
        >
          <div
            className='relative w-full max-w-5xl px-4'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className='absolute -top-12 right-0 text-white hover:text-gray-200 p-3 bg-black/50 rounded-full backdrop-blur-sm'
              onClick={handleClose}
              aria-label='Close'
            >
              <X className='h-6 w-6' />
            </button>
            <video
              ref={modalVideoRef}
              src={videoSrc}
              className='w-full h-auto rounded-2xl bg-black shadow-2xl'
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
