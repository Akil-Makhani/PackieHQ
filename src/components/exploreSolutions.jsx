const cardBase =
  "relative bg-white rounded-2xl ring-1 ring-slate-200 shadow-sm transition-transform duration-300 ease-out transform-gpu hover:shadow-xl hover:scale-[1.03] hover:z-10";

const platforms = [
  { label: "Shopify", src: "/shopifyLogo.svg" },
  { label: "Shopify Plus", src: "/shopifyPlus.webp" },
  { label: "BigCommerce", src: "/bigcommerceLogo.svg" },
  { label: "Magento", src: "/magentoLogo.svg" },
  { label: "WooCommerce", src: "/wooCommerceLogo.svg" },
  { label: "Adobe", src: "/adobeLogo.svg" },
  { label: "Wix", src: "/wix.png" },
  { label: "Zoey", src: "/zoeyLogo.svg" },
  { label: "TreadMe", src: "/trade-me.png" },
  { label: "Xero", src: "/xero.png" },

];

const ExploreSolutions = () => {
  return (
    <section className='w-full bg-[#0aa6da] bg-gradient-to-b from-[#0aa6da] to-[#0896c5]'>
      <div className='mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-3 items-start'>
          {/* Left Text */}
          <div className='text-white lg:col-span-1'>
            <p className='font-robotoSlab text-xl md:text-2xl font-semibold opacity-95'>
              Explore Solutions
            </p>
            <h2 className='font-robotoSlab  mt-2 text-4xl md:text-6xl font-extrabold leading-tight'>
              Choose your
              <br />
              platform
            </h2>
            <button className='mt-8 group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'>
              <span className='relative z-10'>Start free trial</span>
              <div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </button>
          </div>

          {/* Right Grid */}
          <div className='lg:col-span-2 grid grid-cols-5 gap-5'>
            {platforms.map((p, idx) => (
              <div
                key={idx}
                className={`${cardBase} group p-4 text-center overflow-visible min-h-[140px] min-w-[140px]`}
              >
                <div className='mx-auto h-16 w-20 md:h-20 md:w-20  bg-white grid place-items-center  transition-transform duration-300 ease-out group-hover:scale-110'>
                  <img
                    src={p.src}
                    alt={p.label}
                    className='max-h-15 md:max-h-25 '
                  />
                </div>
                <p className='mt-3 text-slate-700 font-semibold text-sm md:text-base'>
                  {p.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom SDK Banner */}
        <div className='mt-8 md:mt-12 rounded-xl bg-white/10 text-white backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 flex items-center justify-center text-sm md:text-base'>
          <span className='opacity-95'>
            Integration is available to any platform via the{" "}
            <span className='font-semibold'>PackieHQ SDK</span>
          </span>
          <span className='ml-2' aria-hidden>
            →
          </span>
        </div>
      </div>
    </section>
  );
};

export default ExploreSolutions;
