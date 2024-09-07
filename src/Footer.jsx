import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className="bg-[#f3f1ed] text-[#4e342e] py-10 px-4 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Section */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-2">Espresso Emporium</h2>
                    <p className="mb-4">
                        Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                    </p>
                    <div className="flex space-x-4">
                        <FaFacebookF className="w-6 h-6 cursor-pointer" />
                        <FaTwitter className="w-6 h-6 cursor-pointer" />
                        <FaInstagram className="w-6 h-6 cursor-pointer" />
                        <FaLinkedinIn className="w-6 h-6 cursor-pointer" />
                    </div>
                </div>

                {/* Middle Section */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                    <div className="flex items-center mb-2">
                        <MdPhone className="mr-2" />
                        <span>+88 01533 333 333</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <MdEmail className="mr-2" />
                        <span>info@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                        <MdLocationOn className="mr-2" />
                        <span>72, Wall Street, King Road, Dhaka</span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-2xl font-semibold mb-4">Connect with Us</h3>
                    <form className="w-full max-w-xs">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full mb-2 p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full mb-2 p-2 border border-gray-300 rounded"
                        />
                        <textarea
                            placeholder="Message"
                            className="w-full mb-2 p-2 border border-gray-300 rounded h-24 resize-none"
                        />
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-[#6f4e37] hover:bg-[#8b5e3c] text-white rounded"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            {/* Footer Bottom Section */}
            <div className="text-center mt-8 text-sm text-[#4e342e]">
                © 2024 Espresso Emporium | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
