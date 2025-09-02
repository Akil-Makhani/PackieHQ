import { Link } from "react-router-dom";

const CustomizedIntegrations = () => {
  return (
    <div className='px-6 md:px-14 lg:px-24  grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
      <div className='flex items-left justify-left md:w-full w-full md:mb-0'>
        <img
          src='/canva.png'
          alt='Customized Integrations'
          className='w-full h-full'
        />
      </div>
      <div className='flex flex-col gap-4 md:items-start items-center text-center md:text-left'>
        <span className='text-sky-600 font-semibold mb-1 font-robotoSlab'>
          Customized Integrations
        </span>
        <h1 className='font-robotoSlab mt-2 text-4xl md:text-5xl font-bold text-slate-800 leading-snug'>
          Unified logistics from checkout to fulfillment
        </h1>
        <p className='text-slate-600'>
          PackieHQ is the top-of-funnel solution connecting your ecommerce
          platform to the carriers and logistics services your business needs to
          run smoothly. Build custom integrations for your ERP, OMS, POS, and
          more with the PackieHQ SDK.
        </p>
        <div className='flex gap-4 items-center mt-2'>
          <Link to='/signup'>
            <button className='group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'>
              <span className='relative z-10'>Start free trial</span>
              <div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </button>
          </Link>
          <a
            href='#'
            className='text-[#232323] hover:text-[#00b6e7] font-semibold text-base flex items-center gap-1 transition-colors'
          >
            Learn more about PackieHQ SDK <span>&#8594;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomizedIntegrations;
