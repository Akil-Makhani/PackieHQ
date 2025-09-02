import React, { useState } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";

export default function Login() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const platform = searchParams.get("platform");
  const [email, setEmail] = useState("");
  const [password] = useState("");

  const isForgotPassword = location.pathname === "/forgot_password";
  const isSignup = location.pathname === "/signup";

  const basePlatforms = [
    { name: "Shopify", logo: "/shopifyLogo.svg" },
    { name: "Adobe Commerce", logo: "/adobeLogo.svg", key: "adobecommerce" },
    { name: "BigCommerce", logo: "/bigcommerceLogo.svg", key: "bigcommerce" },
    { name: "Magento", logo: "/magentoLogo.svg", key: "magento" },
    { name: "WooCommerce", logo: "/wooCommerceLogo.svg", key: "woocommerce" },
    { name: "Zoey", logo: "/zoeyLogo.svg", key: "zoey" },
    { name: "Wix", logo: "/wix.png", key: "wix" },
    { name: "Trademe", logo: "/trade-me.png", key: "trademe" },
    { name: "Xero", logo: "/xero.png", key: "xero" },
  ];

  const platforms = basePlatforms.map((p) => {
    if (p.name === "Shopify") {
      return { ...p, href: "/onboarding" };
    }
    return {
      ...p,
      href: `${isSignup ? "/signup" : "/login"}?platform=${p.key}`,
    };
  });

  const slides = [
    {
      title: "Simplified Returns",
      body: "Cover the cost of returns by enabling Return Shipping—display a duplicate return shipping rate with an added surcharge for each selected shipping method.",
      alt: "Shipping collected vs cost",
      src: "/slide1.png",
    },
    {
      title: "Shipping Insights",
      body: "Uncover eye‑opening insights into your order and shipping data to optimize your checkout experience.",
      alt: "Orders with promotions",
      src: "/slide2.png",
    },
    {
      title: "Return Coverage",
      body: "Offer Standard + Return Coverage rates with a small surcharge and clear delivery expectations.",
      alt: "Return coverage",
      src: "/slide1.png",
    },
  ];

  return (
    <main className='h-screen '>
      <div className='grid grid-cols-1 md:grid-cols-[1fr_520px] h-full'>
        {/* Left: Platform selection OR Login/Forgot/Signup Form */}
        <section className='px-6 md:px-12 lg:px-16 flex items-center justify-center'>
          {isForgotPassword ? (
            // Forgot Password view
            <div className='max-w-[560px] w-full mx-auto text-center'>
              <Link to='/'>
                <img
                  src='/logo2.png'
                  alt='Login Hero'
                  className='w-[180px] h-[110px] mx-auto cursor-pointer hover:opacity-80 transition-opacity'
                />
              </Link>
              <h1 className='text-center text-2xl md:text-[26px] font-bold text-gray-900 mb-8'>
                Forgot your password?
              </h1>

              <div className='bg-white rounded-lg p-6 text-gray-900'>
                <form className='space-y-4'>
                  <div>
                    <label
                      htmlFor='fp-email'
                      className='block text-sm font-medium text-gray-700 mb-1 text-left'
                    >
                      Email*
                    </label>
                    <input
                      type='email'
                      id='fp-email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                      placeholder='Enter your email'
                      required
                    />
                  </div>

                  <button
                    type='submit'
                    className='w-full bg-orange-500 text-white py-2.5 px-4 rounded-md hover:bg-orange-600 transition-colors font-medium'
                  >
                    Send An Email
                  </button>
                </form>

                <div className='mt-6 text-center'>
                  <Link
                    to='/login'
                    className='text-blue-600 hover:underline text-sm'
                  >
                    ← Back to Login
                  </Link>
                </div>
              </div>
            </div>
          ) : isSignup && !platform ? (
            // Signup - Select platform
            <div className='max-w-[70%] mx-auto text-center'>
              <Link to='/'>
                <img
                  src='/logo2.png'
                  alt='Signup Hero'
                  className='w-[180px] h-[110px] mx-auto cursor-pointer hover:opacity-80 transition-opacity'
                />
              </Link>
              <h1 className='text-center text-2xl md:text-[26px] font-bold text-gray-900 mb-2'>
                Sign Up for a Free 15 Day Trial
              </h1>
              <p className='text-gray-700 mb-4'>Select Your Platform</p>

              {/* Grid */}
              <div className='grid grid-cols-2 md:grid-cols-3 gap-1.5 place-items-center mb-6'>
                {platforms.map((p) => {
                  const content = (
                    <>
                      <div className='h-20 w-full flex items-center justify-center bg-white'>
                        <div className='h-12 w-12 md:h-20 md:w-20 flex items-center justify-center p-1'>
                          <img
                            src={p.logo}
                            alt={p.name}
                            className='max-h-full max-w-full object-contain'
                          />
                        </div>
                      </div>
                      <div className='h-8 md:h-10 w-full flex items-center justify-center bg-gray-50 border-t border-gray-200'>
                        <span className='text-[10px] md:text-xs font-medium text-gray-700'>
                          {p.name}
                        </span>
                      </div>
                    </>
                  );

                  return (
                    <Link
                      key={p.name}
                      to={p.href}
                      className='w-full max-w-[130px] rounded-md border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow transition'
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>

              <p className='text-sm text-gray-700'>
                Already have an account?{" "}
                <Link to='/login' className='text-blue-600 hover:underline'>
                  Log In
                </Link>
              </p>
            </div>
          ) : isSignup && platform ? (
            // Signup form for a selected platform
            <div className='max-w-[560px] w-full mx-auto text-center'>
              <Link to='/'>
                <img
                  src='/logo2.png'
                  alt='Signup Hero'
                  className='w-[180px] h-[110px] mx-auto cursor-pointer hover:opacity-80 transition-opacity'
                />
              </Link>
              <h1 className='text-center text-2xl md:text-[26px] font-bold text-gray-900 mb-4'>
                Sign Up for a Free 15 Day Trial
              </h1>

              {platform === "bigcommerce" ? (
                <>
                  <div className='mb-6 flex justify-center'>
                    <img
                      src='/bigcommerceLogo.svg'
                      alt='BigCommerce Logo'
                      className='h-16 w-16 object-contain'
                    />
                  </div>
                  <p className='text-gray-600 mb-6'>To Continue Sign Up...</p>
                  <button
                    type='button'
                    className='mx-auto inline-flex items-center justify-center bg-orange-500 text-white py-2.5 px-5 rounded-md hover:bg-orange-600 transition-colors font-medium shadow'
                  >
                    Install the App
                  </button>

                  <div className='text-center mt-6'>
                    <Link
                      to='/signup'
                      className='text-blue-600 hover:underline text-sm'
                    >
                      ← Back to Platforms
                    </Link>
                  </div>
                </>
              ) : (
                <div className='bg-white rounded-lg p-6 text-gray-900'>
                  <form className='space-y-4'>
                    <div>
                      <label
                        htmlFor='su-email'
                        className='block text-sm font-medium text-gray-700 mb-1 text-left'
                      >
                        Email*
                      </label>
                      <input
                        type='email'
                        id='su-email'
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        placeholder='Email'
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='su-password'
                        className='block text-sm font-medium text-gray-700 mb-1 text-left'
                      >
                        Password
                      </label>
                      <input
                        type='password'
                        id='su-password'
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        placeholder='Password'
                        required
                      />
                      <p className='text-[11px] text-gray-500 mt-1 text-left'>
                        Must be 8 characters long and include a number,
                        uppercase and lower case letter
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor='su-confirm'
                        className='block text-sm font-medium text-gray-700 mb-1 text-left'
                      >
                        Confirm Password
                      </label>
                      <input
                        type='password'
                        id='su-confirm'
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        placeholder='Confirm Password'
                        required
                      />
                    </div>
                    <label className='flex items-center gap-2 text-sm text-gray-700'>
                      <input
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300'
                      />
                      Get product tips, feature updates & shipping strategies
                    </label>
                    <button
                      type='submit'
                      className='w-full bg-orange-500 text-white py-2.5 px-4 rounded-md hover:bg-orange-600 transition-colors font-medium'
                    >
                      Sign Up Free
                    </button>
                  </form>

                  <div className='my-6'>
                    <div className='relative'>
                      <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-gray-300'></div>
                      </div>
                      <div className='relative flex justify-center text-sm'>
                        <span className='px-2 bg-white text-gray-500'>
                          or sign up with
                        </span>
                      </div>
                    </div>
                    <div className='mt-4 flex items-center justify-center'>
                      <button className='flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors'>
                        <FaGoogle className='h-4 w-4 text-gray-700' />
                        <span className='text-sm font-medium text-gray-700'>
                          Google
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className='text-center'>
                    <Link
                      to='/signup'
                      className='text-blue-600 hover:underline text-sm'
                    >
                      ← Back to Platforms
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : !platform ? (
            // Platform Selection (Login)
            <div className='max-w-[70%] mx-auto text-center'>
              <Link to='/'>
                <img
                  src='/logo2.png'
                  alt='Login Hero'
                  className='w-[180px] h-[110px] mx-auto cursor-pointer hover:opacity-80 transition-opacity'
                />
              </Link>
              <h1 className='text-center text-2xl md:text-[26px] font-bold text-gray-900 mb-4'>
                Select Your Platform to Log In
              </h1>

              {/* Grid */}
              <div className='grid grid-cols-2 md:grid-cols-3 gap-1.5 place-items-center mb-6'>
                {platforms.map((p) => {
                  const content = (
                    <>
                      <div className='h-20 w-full flex items-center justify-center bg-white'>
                        <div className='h-12 w-12 md:h-20 md:w-20 flex items-center justify-center p-1'>
                          <img
                            src={p.logo}
                            alt={p.name}
                            className='max-h-full max-w-full object-contain'
                          />
                        </div>
                      </div>
                      <div className='h-8 md:h-10 w-full flex items-center justify-center bg-gray-50 border-t border-gray-200'>
                        <span className='text-[10px] md:text-xs font-medium text-gray-700'>
                          {p.name}
                        </span>
                      </div>
                    </>
                  );

                  return (
                    <Link
                      key={p.name}
                      to={p.href}
                      className='w-full max-w-[130px] rounded-md border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow transition'
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>

              <p className='text-center text-sm text-gray-600'>
                Don't have an account yet?{" "}
                <Link
                  to='/signup'
                  className='text-blue-600 font-semibold hover:underline'
                >
                  Sign Up Free
                </Link>
              </p>
            </div>
          ) : (
            // Login Form
            <div className='max-w-[100%] mx-auto text-center'>
              <Link to='/'>
                <img
                  src='/logo2.png'
                  alt='Login Hero'
                  className='w-[180px] h-[110px] mx-auto cursor-pointer hover:opacity-80 transition-opacity'
                />
              </Link>
              <h1 className='text-center text-2xl md:text-[26px] font-bold text-gray-900 '>
                Welcome
              </h1>

              {/* Login Form */}
              {platform === "bigcommerce" ? (
                // BigCommerce specific design
                <>
                  <div className='space-y-6'>
                    <p className='text-gray-600 text-lg'>To login...</p>
                    <button
                      type='button'
                      className='w-full max-w-md bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-colors font-medium text-lg'
                    >
                      Sign in to BigCommerce
                    </button>
                  </div>
                </>
              ) : (
                // Standard login form for other platforms
                <div className='bg-white rounded-lg p-6 text-gray-900 mb-6'>
                  <form className='space-y-4'>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700 mb-1 text-left'
                      >
                        Email*
                      </label>
                      <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        placeholder='Enter your email'
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='password'
                        className='block text-sm font-medium text-gray-700 mb-1 text-left'
                      >
                        Password*
                      </label>
                      <input
                        type='password'
                        id='password'
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        placeholder='Enter your password'
                        required
                      />
                    </div>
                    <button
                      type='submit'
                      className='w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors font-medium'
                    >
                      Login
                    </button>
                  </form>
                  <div className='mt-4 text-center'>
                    <Link
                      to='/forgot_password'
                      className='text-sm text-blue-600 hover:underline'
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <div className='mt-6'>
                    <div className='relative'>
                      <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-gray-300'></div>
                      </div>
                      <div className='relative flex justify-center text-sm'>
                        <span className='px-2 bg-white text-gray-500'>
                          or sign in with
                        </span>
                      </div>
                    </div>
                    <div className='mt-4 grid grid-cols-3 gap-3'>
                      <button className='flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors'>
                        <FaGoogle className='h-4 w-4 text-gray-700' />
                        <span className='text-sm font-medium text-gray-700'>
                          Google
                        </span>
                      </button>
                      <button className='flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors'>
                        <FaFacebookF className='h-4 w-4 text-blue-600' />
                        <span className='text-sm font-medium text-blue-600'>
                          Facebook
                        </span>
                      </button>
                      <button className='flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors'>
                        <FaXTwitter className='h-4 w-4 text-blue-400' />
                        <span className='text-sm font-medium text-blue-400'>
                          Twitter
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className='text-center mt-6'>
                <Link
                  to='/login'
                  className='text-blue-600 hover:underline text-sm'
                >
                  ← Back to Platforms
                </Link>
              </div>
            </div>
          )}
        </section>

        {/* Right: What's new + Swiper */}
        <aside className='bg-blue-950 text-white flex flex-col h-full'>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3600,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            className='h-full w-full'
          >
            {slides.map((slide, index) => (
              <SwiperSlide
                key={index}
                className='flex flex-col justify-between p-4 md:p-8'
              >
                <div className='max-w-md'>
                  <p className='uppercase tracking-wide text-blue-200 text-sm font-bold'>
                    What's New
                  </p>
                  <h2 className='text-2xl md:text-3xl font-bold mt-2'>
                    {slide.title}
                  </h2>
                  <p className='mt-3 text-blue-100/90 leading-relaxed'>
                    {slide.body}
                  </p>
                  <a
                    href='#'
                    className='inline-flex items-center gap-2 mt-4 text-blue-100 hover:underline'
                  >
                    Learn more <span aria-hidden>→</span>
                  </a>
                </div>

                <div className='mt-4 flex-1 flex items-center justify-center'>
                  <div className='w-full max-w-sm'>
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className='w-full h-auto object-contain'
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx>{`
            .swiper-pagination {
              bottom: 30px !important;
            }
            .swiper-pagination-bullet {
              background: rgba(255, 255, 255, 0.4) !important;
              width: 10px !important;
              height: 10px !important;
            }
            .swiper-pagination-bullet-active {
              background: white !important;
            }
          `}</style>
        </aside>
      </div>
    </main>
  );
}
