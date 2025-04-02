import React from "react";

function Contactus() {
  return (
    <>
      <div className="bg-amber-50 py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-8xl mx-auto mb-15">
          <h1 className="ourstoryform font-bold text-gray-800 text-center mb-20">
            Let's get in touch
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side - Contact Information */}
            <div>
              <div className="mb-">
                <div className="flex items-center mb-2">
                 
                  <span className="contactusdescription  text-gray-700 font-bold">
                    FIRST UNIFIED
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="contactusdescription text-lg font-semibold text-gray-700">
                    Office Address
                  </h3>
                  <p className="contactusdescription text-gray-600">
                    49, Ved Industrial Park-2, Bhuvaladi Gam Road, Kathwada,
                    Ahmedabad, Gujarat-382430
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center">
                    <span className="mr-2">
                      <svg
                        className="h-5 w-5 text-[#6B4743]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m-4 4v6m-3-3h6"
                        ></path>
                      </svg>
                    </span>
                    <a
                      href="tel:+919265067663"
                      className="contactusdescription text-gray-600 hover:text-amber-700 transition-colors"
                    >
                      +91 9265067663
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">
                      <svg
                        className="h-5 w-5 text-[#6B4743]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0l-7.89 5.26a2 2 0 01-2.22 0L3 8z"
                        ></path>
                      </svg>
                    </span>
                    <a
                      href="mailto:info@fuellex.in"
                      className=" contactusdescription text-gray-600 hover:text-amber-700 transition-colors"
                    >
                      info@fuellex.in
                    </a>
                  </div>
                </div>

                <div>
                  <p className=" contactusdescription text-gray-600">
                    An ISO 9001: 2015 Certified Company
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block ourstoryform font-bold "
                  >
                    Name*


                   

                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block ourstoryform font-bold"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mobileNumber"
                    className="block ourstoryform font-bold"
                  >
                    Mobile Number*
                  </label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    required
                    placeholder="Enter 10-digit mobile number"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block ourstoryform font-bold"
                  >
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
                  ></textarea>
                </div>

                <div>
                <button
  type="submit"
  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium bg-[#6B4743] text-white transition duration-300 hover:bg-[#D6B484] hover:text-[#6B4743] hover:border-[#6B4743]"
>
  Submit
</button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
