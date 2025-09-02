import React, { useState } from "react";

export default function Onboarding() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phone: "",
    billingCurrency: "NZD",
    industry: "",
    avgOrders: "",
    heardAbout: "",
    signUpEmails: false,
  });
  const [step, setStep] = useState(1);
  const [shipping, setShipping] = useState({
    address1: "",
    address2: "",
    city: "",
    country: "United States",
    state: "Alabama",
    zip: "",
    isResidential: false,
  });
  const [selectedGoals, setSelectedGoals] = useState([]);
 
  const shippingGoals = [
    { id: "free-shipping", label: "Offer Free Shipping", icon: "⭐" },
    { id: "modify-rates", label: "Modify shipping rates", icon: "🔧" },
    { id: "delivery-dates", label: "Show delivery dates", icon: "📅" },
    { id: "dimensional-weight", label: "Rate on dimensional weight", icon: "⚖️" },
    { id: "multiple-locations", label: "Ship from multiple locations", icon: "🏢" },
    { id: "in-store-pickup", label: "In-store pickup", icon: "🛍️" },
    { id: "perishable", label: "Ship perishable products", icon: "🌱" },
    { id: "restricted", label: "Ship restricted products", icon: "⚠️" },
    { id: "custom-rates", label: "Create custom rates", icon: "⚙️" },
    { id: "table-rates", label: "Use table rates", icon: "📊" }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleShippingChange = (e) => {
    const { name, value, type, checked } = e.target;
    setShipping((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleGoalToggle = (goalId) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };
 
  const handleGoalsSubmit = (e) => {
    e.preventDefault();
    setStep(4);
  };
 
  const handleContinueToDashboard = () => {
    // Handle navigation to dashboard
    console.log('Continue to dashboard');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#033356]">
      <div className="bg-white rounded-xl shadow-lg px-8 py-6 w-full max-w-lg my-12" style={{ minWidth: 400 }}>
        <div className="flex flex-col items-center mb-6">
          <div className="bg-blue-100 rounded-full p-3 mb-2">
            {step === 1 && (
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 2c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4z" /></svg>
            )}
            {step === 2 && (
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            )}
            {step === 3 && (
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            )}
            {step === 4 && (
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            )}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1 mb-4">
            <div className="bg-green-500 h-1 rounded-full" style={{ width: step === 1 ? '25%' : step === 2 ? '50%' : step === 3 ? '75%' : '100%' }}></div>
          </div>
        </div>
        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-1">Tell us about your business</h2>
            <p className="text-sm text-gray-500 mb-6">We'll build your profile so you can begin your free trial, no credit card required</p>
            <form className="space-y-2" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1 mb-4 md:mb-0">
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name*</label>
                <input
                  type="text"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex-1 mb-4 md:mb-0">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Billing Currency</label>
                  <select
                    name="billingCurrency"
                    value={form.billingCurrency}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="NZD">NZD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                <select
                  name="industry"
                  value={form.industry}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select industry</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="services">Services</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Average Monthly Orders</label>
                <select
                  name="avgOrders"
                  value={form.avgOrders}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Please select</option>
                  <option value="1-100">1-100</option>
                  <option value="101-500">101-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value=">1000">1000+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                <select
                  name="heardAbout"
                  value={form.heardAbout}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Please select</option>
                  <option value="google">Google</option>
                  <option value="friend">Friend</option>
                  <option value="ad">Advertisement</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="signUpEmails"
                  checked={form.signUpEmails}
                  onChange={handleChange}
                  id="signUpEmails"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="signUpEmails" className="text-sm text-gray-700">
                  Sign up for emails about new features and PackieHQ announcements
                </label>
              </div>
              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors mt-2"
                type="submit"
              >
                Next
              </button>
            </form>
          </>
        )}
        {step === 2 && (
          <form className="space-y-2" onSubmit={handleShippingSubmit}>
            <h2 className="text-xl font-bold text-gray-800">Where do you ship from?</h2>
            <p className="text-sm text-gray-500 mb-6">The address provided will be your default shipping origin</p>
            <div className="mb-2">
              
              <input
                type="text"
                name="address1"
                value={shipping.address1}
                onChange={handleShippingChange}
                className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Start typing your address..."
                required
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Address 2</label>
              <input
                type="text"
                name="address2"
                value={shipping.address2}
                onChange={handleShippingChange}
                className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">City<span className="text-red-500">*</span></label>
              <input
                type="text"
                name="city"
                value={shipping.city}
                onChange={handleShippingChange}
                className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 mb-2">
              <div className="flex-1 mb-2 md:mb-0">
                <label className="block text-sm font-medium text-gray-700 mb-1">Country<span className="text-red-500">*</span></label>
                <select
                  name="country"
                  value={shipping.country}
                  onChange={handleShippingChange}
                  className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="New Zealand">New Zealand</option>
                </select>
              </div>
              <div className="flex-1 mb-2 md:mb-0">
                <label className="block text-sm font-medium text-gray-700 mb-1">State/Region</label>
                <select
                  name="state"
                  value={shipping.state}
                  onChange={handleShippingChange}
                  className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="Auckland">Auckland</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">ZIP/Postal Code<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="zip"
                  value={shipping.zip}
                  onChange={handleShippingChange}
                  className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                name="isResidential"
                checked={shipping.isResidential}
                onChange={handleShippingChange}
                className="mr-2"
              />
              <label className="text-sm font-medium text-gray-700">This is a residential address</label>
            </div>
            <div className="flex justify-between ">
              <button type="button" onClick={() => setStep(1)} className="bg-gray-200 px-4 py-2 rounded">&#8592; Back</button>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded flex items-center justify-center">Next <span className="ml-2">&#8594;</span></button>
            </div>
          </form>
        )}
        {step === 3 && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">What are your shipping goals?</h2>
            <p className="text-sm text-gray-600 mb-6">Would you like to offer shipping discounts? Or maybe you're shipping perishable or restricted products. Let us know so we can help you meet your goals</p>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {shippingGoals.map((goal) => (
                <button
                  key={goal.id}
                  type="button"
                  onClick={() => handleGoalToggle(goal.id)}
                  className={`p-3 rounded-lg border text-left transition-colors ${
                    selectedGoals.includes(goal.id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2 text-lg">{goal.icon}</span>
                    <span className="text-sm font-medium text-gray-700">{goal.label}</span>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <button 
                type="button" 
                onClick={() => setStep(2)} 
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
              >
                ← Back
              </button>
              <div className="text-sm text-gray-500">Skip this step</div>
              <button 
                type="button" 
                onClick={handleGoalsSubmit}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors flex items-center"
              >
                Next →
              </button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="text-center">
            {/* Confetti effect */}
            <div className="mb-4 flex justify-center">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
            
            <h2 className="text-xl font-bold text-gray-800 mb-2">Your 15-day free trial has started</h2>
            <p className="text-sm text-gray-600 mb-6">You are now able to display rates at checkout. Continue to the dashboard to put your strategy into action with PackieHQ Goals.</p>
            
            <div className="space-y-3 mb-6">
              <div className="border border-green-300 rounded-lg p-3 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-blue-500 w-8 h-8 rounded flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Test</div>
                      <div className="text-sm text-gray-600">Raj, Gujarat, 360007, India</div>
                    </div>
                  </div>
                  <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="border border-green-300 rounded-lg p-3 bg-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-blue-500 w-8 h-8 rounded flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Test</div>
                      <div className="text-sm text-gray-600">dcfvg.myshopify.com</div>
                    </div>
                  </div>
                  <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleContinueToDashboard}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              Continue to dashboard
            </button>
          </div>
        )}
        <div className="text-xs text-gray-500 text-center mt-6">
          By continuing, you agree to the PackieHQ{' '}
          <a href="#" className="text-blue-600 underline">User Agreement</a> and{' '}
          <a href="#" className="text-blue-600 underline">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
}