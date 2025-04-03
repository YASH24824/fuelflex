import { useState, useEffect, useRef } from "react";
import { Search, User, ShoppingBag, ChevronDown, X, List } from "lucide-react";
import Logo from "../assets/Logo.png";
import { Facebook, Instagram, Linkedin } from 'lucide-react'; // Import social media icons
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the mobile menu
  const navigate = useNavigate();
  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 left-0 w-full bg-[#EBE3D5] px-4 md:px-14 flex justify-between items-center z-50 " style={{ height: '63.6667px' }}>
      {/* Logo */}
      <div>
        <img src={Logo} alt="FUELFLEX Logo" className="w-[120px] h-[48px] mix-blend-darken" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-[14px] font-normal">
        <a href="/" className="text-[#121212] hover:text-gray-500 transition-colors">Home</a>
        <a href="/shop" className="text-[#121212] hover:text-gray-500 transition-colors">Shop</a>
        <a href="/ourstory" className="text-[#121212] hover:text-gray-500 transition-colors">Our Story</a>
        <a href="/news" className="text-[#121212] hover:text-gray-500 transition-colors">News</a>
        <div className="relative">
          <button
            className="flex items-center text-[#121212] hover:text-gray-500 transition-colors"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Contact Info.
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
          {dropdownOpen && (
            <div className="absolute mt-2 bg-white border shadow-lg w-40 z-10">
              <a href="/carrer" className="block px-4 py-2 hover:bg-gray-100">Career</a>
              <a href="/contactus" className="block px-4 py-2 hover:bg-gray-100">Contact Us</a>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center space-x-6">
        <Search className="w-5 h-5 text-[#121212] cursor-pointer hover:text-gray-500 transition-colors" />
        <User className="w-5 h-5 text-[#121212] cursor-pointer hover:text-gray-500 transition-colors" />
        <div className="relative">
          <ShoppingBag onClick={()=>navigate("/cart")} className="w-5 h-5 text-[#121212] cursor-pointer hover:text-gray-500 transition-colors" />
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(true)} className="text-[#121212]">
          <List size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
{isOpen && (
  <div className="fixed inset-0 z-40 bg-opacity-50 backdrop-filter backdrop-blur-lg">
    <div
      ref={menuRef}
      className={`fixed top-0 left-0 w-64 h-full bg-white shadow-md transform transition-transform duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } flex flex-col justify-between`}
      onClick={(e) => e.stopPropagation()}
    >
      <div>
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-[#121212]"
        >
          <X size={24} />
        </button>

        {/* Mobile Menu Content */}
        <nav className="p-4 space-y-4 mt-10">
          <a
            href="/"
            className="block text-lg text-[#121212] hover:text-gray-500 transition-colors"
          >
            Home
          </a>
          <a
            href="/shop"
            className="block text-lg text-[#121212] hover:text-gray-500 transition-colors"
          >
            Shop
          </a>
          <a
            href="/ourstory"
            className="block text-lg text-[#121212] hover:text-gray-500 transition-colors"
          >
            Our Story
          </a>
          <a
            href="/news"
            className="block text-lg text-[#121212] hover:text-gray-500 transition-colors"
          >
            News
          </a>
          <div className="relative">
            <button
              className="flex items-center w-full text-left text-lg text-[#121212] hover:text-gray-500 transition-colors"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Contact Info.
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {dropdownOpen && (
              <div className="ml-4 mt-2 bg-white border shadow-lg w-40 z-10">
                <a
                  href="/carrer"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Career
                </a>
                <a
                  href="/contactus"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Contact Us
                </a>
              </div>
            )}
          </div>
          {/* Cart Button */}
          <button
            onClick={() => {
              navigate("/cart"); // Navigate to Cart page
              setIsOpen(false); // Close the mobile menu
            }}
            className="block text-lg text-[#121212] hover:text-gray-500 transition-colors"
          >
            Cart
          </button>
        </nav>
      </div>

      {/* Login and Social Links */}
      <div className="p-4 border-t border-gray-200">
        <a
          href="#"
          className="block text-lg text-[#121212] hover:text-gray-500 transition-colors mb-4"
        >
          Log In
        </a>
        <div className="flex space-x-4">
          <a href="#" className="text-[#121212] hover:text-gray-500 transition-colors">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-[#121212] hover:text-gray-500 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-[#121212] hover:text-gray-500 transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  </div>
)}

    </nav>
  );
}