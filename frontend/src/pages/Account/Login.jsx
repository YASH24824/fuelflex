import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Account() {
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormdata((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formdata);
        // Authentication logic here
    };

    return (
        <div className="min-h-screen bg-[#FAF5E6] flex justify-center px-4 ">
            <div className="w-full max-w-2xl mt-40">
                {/* Title */}
                <h1 className="text-4xl font-bold text-brown-700 font-serif text-center ">
      Login
    </h1>

                {/* Form (Now Near the Top) */}
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    {/* Email */}
                    <div>
                        <label className="ourstoryform block text-lg font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formdata.email}
                            onChange={handleChange}
                            className="w-full text-lg px-5 py-3 border border-gray-400 rounded-lg shadow-sm "
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className=" ourstoryform block text-lg font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formdata.password}
                            onChange={handleChange}
                            className="w-full text-lg px-5 py-3 border border-gray-400 rounded-lg shadow-sm "
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="text-right">
                        <a href="#" className=" text-dark    hover:text-[#B0A695]">Forgot password?</a>
                    </div>

                    {/* Sign In Button */}
                    <div className="text-center ">
                    <button
                        type="submit"
                        className="w-full text-center cursor-pointer text-white py-3 rounded-lg text-2xl font-semibold  bg-[#6B4743] hover:bg-[#5a3c38]transition duration-200"
                    >
                        Sign in
                        </button>
                    </div>
                    
                </form>

                {/* Create Account Link */}
                <div className="flex justify-center items-center mt-6 space-x-4">
    <p className="text-lg text-gray-700">Don't have an account?</p>
    <button
        onClick={() => navigate("/signup")}
        className="w-1/2 cursor-pointer text-white py-3 rounded-lg text-2xl font-semibold bg-[#6B4743] hover:bg-[#5a3c38] transition duration-200"
    >
        Create account
    </button>
</div>

            </div>
        </div>
    );
}

export default Account;
