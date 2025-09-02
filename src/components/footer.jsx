import React from "react";

const SocialIcon = ({ label, href, children }) => (
  <a
    aria-label={label}
    href={href}
    className='inline-flex items-center justify-center h-10 w-10 rounded-full border-2 border-white/70 text-white hover:bg-white hover:text-blue-950 transition-colors'
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className='bg-blue-950 text-blue-100 w-full'>
      {/* CTA strip */}
      <div className='mx-auto px-4 py-16 text-center'>
        <h2 className='text-3xl md:text-5xl font-semibold leading-[1.4] md:leading-[1.3] text-white'>
          Ready to turn your shipping problems
          <br className='hidden md:block' /> into solutions? We can do it.
        </h2>
        <div className='mt-8 flex items-center justify-center gap-4'>
          <button className=' group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'>
            <span className='relative z-10'>Start free trial</span>
            <div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </button>
          <button className='px-8 py-4 border-2 border-slate-300 text-white font-semibold rounded-2xl hover:bg-slate-50 hover:border-slate-400 hover:text-black transform hover:-translate-y-1 transition-all duration-300'>
            Book a demo
          </button>
        </div>
      </div>

      {/* Links + Newsletter */}
      <div className='mx-auto px-14 py-14'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
          {/* Column: PackieHQ */}
          <div>
            <h3 className='text-white font-semibold mb-4'>PackieHQ</h3>
            <ul className='space-y-3 text-sm'>
              <li>
                <a
                  className='hover:text-white/90 hover:underline underline-offset-4'
                  href='#'
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  className='hover:text-white/90 hover:underline underline-offset-4'
                  href='#'
                >
                  Plans & Pricing
                </a>
              </li>
              <li>
                <a
                  className='hover:text-white/90 hover:underline underline-offset-4'
                  href='#'
                >
                  Why PackieHQ
                </a>
              </li>
              <li>
                <a
                  className='hover:text-white/90 hover:underline underline-offset-4'
                  href='#'
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className='hover:text-white/90 hover:underline underline-offset-4'
                  href='#'
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className='hover:text-white/90 hover:underline underline-offset-4'
                  href='#'
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Support */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Support</h3>
            <ul className='space-y-3 text-sm'>
              <li>
                <a
                  className='hover:text-white/90 hover:underline underline-offset-4'
                  href='#'
                >
                  Contact Support
                </a>
              </li>
              <li>
                <a
                  className='hover:text-white/90 hover:underline underline-offset-4'
                  href='#'
                >
                  Help Docs
                </a>
              </li>
              <li>
                <a
                  className='hover:text-white/90 hover:underline underline-offset-4'
                  href='#'
                >
                  Promotions & Savings
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Resources */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Resources</h3>
            <ul className='space-y-3 text-sm'>
              <li>
                <a
                  className='hover:text-white/90 hover:underline underline-offset-4'
                  href='#'
                >
                  Customer Stories
                </a>
              </li>
              <li>
                <a
                  className='hover:text-white/90 hover:underline underline-offset-4'
                  href='#'
                >
                  PackieHQ Blog
                </a>
              </li>
              <li>
                <a
                  className='hover:text-white/90 hover:underline underline-offset-4'
                  href='#'
                >
                  PackieHQ SDK
                </a>
              </li>
              <li>
                <a
                  className='hover:text-white/90 hover:underline underline-offset-4'
                  href='#'
                >
                  SHQ Developer Platform
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Partner Program */}
          <div>
            <h3 className='text-white font-semibold mb-4'>Partner Program</h3>
            <ul className='space-y-3 text-sm'>
              <li>
                <a
                  className='hover:text-white/90 hover:underline underline-offset-4'
                  href='#'
                >
                  Agency Partners
                </a>
              </li>
              <li>
                <a
                  className='hover:text-white/90 hover:underline underline-offset-4'
                  href='#'
                >
                  Refer a Merchant
                </a>
              </li>
              <li>
                <a
                  className='hover:text-white/90 hover:underline underline-offset-4'
                  href='#'
                >
                  See all of our Partners
                </a>
              </li>
              <li>
                <a
                  className='hover:text-white/90 hover:underline underline-offset-4'
                  href='#'
                >
                  Supported Carriers
                </a>
              </li>
            </ul>
          </div>

          {/* Column: Newsletter */}
          <div>
            <h3 className='text-white font-semibold mb-4'>
              Sign Up for the Newsletter
            </h3>
            <form className='flex flex-col gap-4 items-start'>
              <input
                type='email'
                placeholder='Your Email*'
                className='w-full rounded-md bg-white text-blue-950 placeholder:text-blue-900/60 px-4 py-2.5 outline-none ring-1 ring-white/40 focus:ring-white'
              />
              <button className=' group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'>
                <span className='relative z-10'>Sign Up</span>
                <div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </button>
            </form>

            {/* Socials */}
            <div className='mt-6 flex items-center gap-3'>
              <SocialIcon label='X' href='#'>
                {/* X / Twitter */}
                <svg
                  viewBox='0 0 24 24'
                  className='w-5 h-5 fill-current'
                  aria-hidden
                >
                  <path d='M18.244 2H21l-6.54 7.47L22 22h-6.8l-4.77-6.22L4.8 22H2l7.17-8.2L2 2h6.9l4.37 5.77L18.24 2zM8.49 3.65H5.53l10.17 13.56h2.98L8.5 3.65z' />
                </svg>
              </SocialIcon>
              <SocialIcon label='Facebook' href='#'>
                <svg
                  viewBox='0 0 24 24'
                  className='w-5 h-5 fill-current'
                  aria-hidden
                >
                  <path d='M13 22v-8h3l.5-3H13V8.5c0-.9.3-1.5 1.8-1.5H17V4.2C16.6 4.1 15.5 4 14.2 4 11.6 4 10 5.4 10 8.1V11H7v3h3v8h3z' />
                </svg>
              </SocialIcon>
              <SocialIcon label='LinkedIn' href='#'>
                <svg
                  viewBox='0 0 24 24'
                  className='w-5 h-5 fill-current'
                  aria-hidden
                >
                  <path d='M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4zM8 8h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2C20.6 8 22 10.2 22 14.1V24h-4v-8.5c0-2-1-3.4-2.8-3.4-1.3 0-2.2.9-2.6 1.9-.1.3-.1.7-.1 1.1V24H8V8z' />
                </svg>
              </SocialIcon>
              <SocialIcon label='Instagram' href='#'>
                <svg
                  viewBox='0 0 24 24'
                  className='w-5 h-5 fill-current'
                  aria-hidden
                >
                  <path d='M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .6 1.5 1.1.4.4.9.9 1.1 1.5.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.6 1-1.1 1.5-.4.4-.9.9-1.5 1.1-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.6-1.5-1.1-.4-.4-.9-.9-1.1-1.5-.2-.4-.4-1.1-.5-2.3C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.6-1 1.1-1.5.4-.4.9-.9 1.5-1.1.4-.2 1.1-.4 2.3-.5C8.4 2.2 8.8 2.2 12 2.2m0 2.2c-3.1 0-3.5 0-4.8.1-1 .1-1.5.2-1.8.3-.4.1-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.2.8-.3 1.8-.1 1.2-.1 1.6-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.5.3 1.8.1.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.2 1.8.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1-.1 1.5-.2 1.8-.3.4-.1.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.2-.8.3-1.8.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.5-.3-1.8-.1-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.8-.2-1.8-.3-1.3-.1-1.7-.1-4.8-.1m0 3.1a4.6 4.6 0 1 1 0 9.1 4.6 4.6 0 0 1 0-9.1m0 2.2a2.4 2.4 0 1 0 0 4.9 2.4 2.4 0 0 0 0-4.9m5-2.6a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2' />
                </svg>
              </SocialIcon>
              <SocialIcon label='YouTube' href='#'>
                <svg
                  viewBox='0 0 24 24'
                  className='w-5 h-5 fill-current'
                  aria-hidden
                >
                  <path d='M23.5 6.2s-.2-1.7-.9-2.4c-.8-.9-1.7-.9-2.1-1C17.8 2.4 12 2.4 12 2.4h-.1s-5.8 0-8.5.4c-.4.1-1.3.1-2.1 1-.7.7-.9 2.4-.9 2.4S0 8.2 0 10.2v1.7c0 2 .5 4 0 4 0 0 .2 1.7.9 2.4.8.9 1.8.9 2.3 1 1.6.1 6.8.4 8.8.4h.1s5.8 0 8.5-.4c.4-.1 1.3-.1 2.1-1 .7-.7.9-2.4.9-2.4s.5-2 .5-4v-1.7c0-2-.5-4-.5-4zM9.6 14.5V7.6l6.3 3.5-6.3 3.4z' />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>

        {/* Partner badges (placeholder blocks) */}
        <div className='mt-12 border-t border-white/10 pt-8 flex flex-wrap items-center gap-4 opacity-80'>
          {Array.from({ length: 6 }).map((_, idx) => (
            <div key={idx} className='h-10 w-32 rounded bg-white/10' />
          ))}
        </div>

        {/* Bottom legal row */}
        <div className='mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-blue-200/80'>
          <div className='flex items-center gap-6'>
            <a
              href='#'
              className='hover:text-white/90 hover:underline underline-offset-4'
            >
              Privacy Policy
            </a>
            <a
              href='#'
              className='hover:text-white/90 hover:underline underline-offset-4'
            >
              User Agreement
            </a>
          </div>
          <p className='opacity-80'>
            © {new Date().getFullYear()} PackieHQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
