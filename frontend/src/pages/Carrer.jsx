import React, { useState } from "react";
import Cover from "../assets/Carrer/Be_a_part_of_our_journey.jpg";

function Carrer() {
  const [resume, setResume] = useState(null); // State to hold the selected file

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };

  // Function to remove the selected file
  const removeFile = () => {
    setResume(null);
  };

  return (
    <>
      {/* Image Section */}
      <div>
        <img src={Cover} alt="Career Cover" className="w-full" />
      </div>

      {/* Introductory Text Section */}
      <div className="bg-amber-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="ourstory text-gray-700 mb-4">
            Apply now and be a part of our energetic team!
          </p>
          <p className=" ourstory text-gray-700 mb-8">
            Joining First Unified means becoming part of a dynamic team that
            values creativity, dedication, and collaboration. Whether you're a
            production specialist, a marketing guru, or an innovative product
            developer, we offer a range of career paths to match your skills
            and passions.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Heading at the Start of the Form */}
          <h1 className="ourstoryform font-bold text-gray-800 text-center mb-30">
            Elevate Your Career Path.
          </h1>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block ourstoryform font-bold"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block ourstoryform font-bold"
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                />
              </div>
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
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="contactNumber"
                className="block ourstoryform font-bold"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="resume"
                className="block ourstoryform font-bold "
              >
                Resume
              </label>
              {resume ? (
                // If a resume is selected, show its name and remove button
                <div className="flex items-center justify-between">
                  <span className="text-gray-800">{resume.name}</span>
                  <button 
                    type="button" 
                    onClick={removeFile} 
                    className="text-red-500 hover:text-red-700 ml-4">
                    X
                  </button>
                </div>
              ) : (
                // If no resume is selected, show the file input
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  className="mt-1 block w-30 text-sm text-slate-500 
                              file:mr-4 file:py-2 file:px-2 
                              file:rounded-md 
                              file:border-none 
                              file:text-sm file:font-semibold 
                              file:bg-[#6B4743] file:text-white 
                              hover:file:bg-[#D6B484]"
                />
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block ourstoryform font-bold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#D6B484] focus:border-[#D6B484] sm:text-sm"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full  flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6B4743] hover:bg-[#D6B484] focus:outline-none focus:ring focus:ring-offset-[#D6B484]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Carrer;
