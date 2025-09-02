import { Globe } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuItems = [
    { name: "Why PackieHQ", hasSubmenu: false },
    {
      name: "Features",
      hasSubmenu: true,
      submenuItems: [
        "Shipping Rules",
        "Delivery Date & Time",
        "Dimensional Packing",
        "Multi-Origin Shipping",
        "Enhanced Checkout",
        "LTL Freight",
        "Rate Shopping",
        "Shipping Insights",
        "Product Page Shipping Calculator",
        "Address Validation",
        "Ship to Store",
        "In-Store Pickup",
        "Analytics",
        "Duties & Taxes",
        "Backup Carriers",
        "Simplified Returns",
        "Shipping Incentives",
        "Live & Custom Carriers",
      ],
    },
    {
      name: "Solutions",
      hasSubmenu: true,
      submenuItems: {
        Platforms: [
          "Adobe Commerce",
          "BigCommerce",
          "Magento",
          "Salesforce Commerce Cloud",
          "Shopify",
          "WooCommerce",
          "Commercetools",
          "Shopware",
          "Cart.com",
          "Custom API Integration",
          "Switching Platforms?",
        ],
        Verticals: [
          "Alcohol",
          "Automotive",
          "B2B",
          "Home & Garden",
          "Perishables",
          "UK Delivery",
          "View All Solutions",
        ],
      },
    },
    {
      name: "Resources",
      hasSubmenu: true,
      submenuItems: {
        "Resources & Support": [
          "The PackiwHQ Blog",
          "PackiwHQ SDK",
          "SHQ Developer Platform",
          "Knowledge Base",
        ],
        "Partners & Carriers": [
          "Become a Partner",
          "Access Partner Portal",
          "Logistics Partner Program",
          "Refer a Merchant",
          "Partner Directory",
        ],
      },
    },
    { name: "Plans", hasSubmenu: false },
    {
      name: "Case Studies",
      hasSubmenu: true,
      submenuItems: [
        "Yakima Chief Hops",
        "Gertrude Hawk Chocolates",
        "Marysville Marine",
        "Clean Eatz Kitchen",
        "IMA",
        "Tecovas",
        "Cox & Cox",
      ],
    },
  ];

  return (
    <header className='sticky top-0 z-50 bg-white w-full p-2 shadow-md'>
      <div className=' mx-auto px-6 flex items-center justify-between h-16'>
        {/* Left: Logo + Nav */}
        <div className='flex items-center space-x-10'>
          {/* Logo */}
          <button
            type='button'
            onClick={() => navigate("/")}
            className='flex items-center '
          >
            <img src='/logo2.png' alt='PackieHQ' className='h-25 w-40' />
          </button>

          {/* Nav Links */}
          <nav className='hidden md:flex items-center space-x-5 text-[15px] font-medium text-gray-500'>
            {menuItems.map((item, index) => (
              <div
                key={index}
                className='relative'
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <a
                  href='#'
                  className={`transition-colors duration-200 ${
                    hoveredMenu === item.name
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-500 hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </a>

                {/* Dropdown Submenu */}
                {item.hasSubmenu && hoveredMenu === item.name && (
                  <div className='absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50'>
                    <div className='px-4'>
                      {!(
                        item.name === "Solutions" || item.name === "Resources"
                      ) && (
                        <h3 className='font-semibold text-gray-900 mb-3'>
                          {item.name}
                        </h3>
                      )}

                      {/* Features submenu - 2 columns */}
                      {item.name === "Features" && (
                        <div className='grid grid-cols-2 gap-8 w-96'>
                          <div className='space-y-1'>
                            {item.submenuItems
                              .slice(0, 9)
                              .map((subItem, subIndex) => (
                                <a
                                  key={subIndex}
                                  href='#'
                                  className='text-xs block  py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200'
                                >
                                  {subItem}
                                </a>
                              ))}
                          </div>
                          <div className='space-y-1'>
                            {item.submenuItems
                              .slice(9)
                              .map((subItem, subIndex) => (
                                <a
                                  key={subIndex + 9}
                                  href='#'
                                  className='text-xs block  py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200'
                                >
                                  {subItem}
                                </a>
                              ))}
                          </div>
                        </div>
                      )}

                      {/* Solutions submenu - 2 columns with headers */}
                      {item.name === "Solutions" && (
                        <div className='grid grid-cols-2 gap-8 w-96'>
                          <div>
                            <h4 className='font-semibold text-gray-900 mb-3'>
                              Platforms
                            </h4>
                            <div className='space-y-1'>
                              {item.submenuItems.Platforms.map(
                                (subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href='#'
                                    className='text-xs block  py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200'
                                  >
                                    {subItem}
                                  </a>
                                )
                              )}
                            </div>
                          </div>
                          <div>
                            <h4 className='font-semibold text-gray-900 mb-3'>
                              Verticals
                            </h4>
                            <div className='space-y-1'>
                              {item.submenuItems.Verticals.map(
                                (subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href='#'
                                    className='text-xs block  py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200'
                                  >
                                    {subItem}
                                  </a>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Resources submenu - 2 columns with headers */}
                      {item.name === "Resources" && (
                        <div className='grid grid-cols-2 gap-8 w-96'>
                          <div>
                            <h4 className='font-semibold text-gray-900 mb-3'>
                              Resources & Support
                            </h4>
                            <div className='space-y-1'>
                              {item.submenuItems["Resources & Support"].map(
                                (subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href='#'
                                    className='text-xs block py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200'
                                  >
                                    {subItem}
                                  </a>
                                )
                              )}
                            </div>
                          </div>
                          <div>
                            <h4 className='font-semibold text-gray-900 mb-3'>
                              Partners & Carriers
                            </h4>
                            <div className='space-y-1'>
                              {item.submenuItems["Partners & Carriers"].map(
                                (subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href='#'
                                    className='text-xs block py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200'
                                  >
                                    {subItem}
                                  </a>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Case Studies submenu - single column */}
                      {item.name === "Case Studies" && (
                        <div className='w-64'>
                          <div className='space-y-1'>
                            {item.submenuItems.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href='#'
                                className='text-xs block py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200'
                              >
                                {subItem}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Right: globe + Actions */}
        <div className='flex items-center space-x-4 text-[13px]'>
          <button className='bg-blue-950 text-white rounded px-1'>
            <Globe className='w-4 h-4' />
          </button>

          <div className='hidden md:block border-l h-5 border-gray-300' />

          <button
            type='button'
            onClick={() => navigate("/login")}
            className='text-gray-600 text-base hidden md:block'
          >
            Login
          </button>
          <Link to='/signup'>
            <button className='group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300'>
              <span className='relative z-10'>Get Started</span>
              <div className='absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </button>
          </Link>

          <button className='px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-2xl hover:bg-slate-50 hover:border-slate-400 transform hover:-translate-y-1 transition-all duration-300'>
            Book a demo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
