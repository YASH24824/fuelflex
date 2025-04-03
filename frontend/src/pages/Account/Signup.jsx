import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup Form Submitted:", formData);
    };

    return (
        <div className="min-h-screen bg-[#FAF5E6] flex justify-center px-4">
            <div className="w-full max-w-xl mt-30">
                {/* Title */}
                <h1 className="text-4xl font-bold text-brown-700 font-serif text-center">
                    Sign Up
                </h1>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    {/* First Name */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full text-lg px-5 py-3 border border-gray-400 rounded-lg shadow-sm"
                            placeholder="Enter your first name"
                            required
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full text-lg px-5 py-3 border border-gray-400 rounded-lg shadow-sm"
                            placeholder="Enter your last name"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full text-lg px-5 py-3 border border-gray-400 rounded-lg shadow-sm"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-lg font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full text-lg px-5 py-3 border border-gray-400 rounded-lg shadow-sm"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Sign Up Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full text-center cursor-pointer text-white py-3 rounded-lg text-2xl font-semibold bg-[#6B4743] hover:bg-[#5a3c38] transition duration-200"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

                {/* Already have an account? */}
                <div className="flex justify-center items-center mt-6 space-x-4">
                    <p className="text-lg text-gray-700">Already have an account?</p>
                    <button
                        onClick={() => navigate("/login")}
                        className="w-1/2 cursor-pointer text-white py-3 rounded-lg text-2xl font-semibold bg-[#6B4743] hover:bg-[#5a3c38] transition duration-200"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
