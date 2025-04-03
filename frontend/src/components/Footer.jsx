import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer w-full bg-[#776B5D] py-12 px-4 md:px-8 lg:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl">FIRST UNIFIED</h3>
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Address :</span>
                <span>
                  es49, Ved Industrial Park-2, Bhuvaladi Gam Road, Kathwada, Ahmedabad, Gujarat-382430
                </span>
              </p>
              <p>
                <span className="font-semibold">Call Us :</span> +91 9265067663
              </p>
              <p>
                <span className="font-semibold">Email :</span> info@fuelflex.in
              </p>
            </div>
          </div>

          {/* Menu & Info Sections */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg">Menu</h3>
              <ul className="space-y-3">
                <li><a href="/shop">Shop</a></li>
                <li><a href="/ourstory">Our Story</a></li>
                <li><a href="/news">Blogs</a></li>
                <li><a href="/contactus">Contact Us</a></li>
                <li><a href="/carrer">Career</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg">Info</h3>
              <ul className="space-y-3">
                <li><a href="#">Refund & Refund Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Shipping Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg">
              Want to know more? <a href="#" className="underline">Catalog</a>
            </h3>
            <div className="flex">
              <input type="email" placeholder="Email" className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none" />
              <button className="px-4 py-2 border border-l-0 border-gray-300 hover:bg-gray-100">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-6 pt-4">
              <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube"><Youtube className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <p className="opacity-75 text-center text-xs">© 2025, Fuelflex. All rights reserved</p>
            <div className="flex flex-wrap justify-start items-center gap-3">
              <a href="#">• Privacy policy</a>
              <a href="#">• Terms of service</a>
              <a href="#">• Refund policy</a>
              <a href="#">• Shipping policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
