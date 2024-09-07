const Banner = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="relative w-full h-[400px] md:h-[600px]">
                {/* Responsive image with object-cover to maintain aspect ratio */}
                <img
                    src="/3.png"
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
                {/* Main heading text positioned on the right for md and lg screens */}
                <p
                    className="text-white text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold absolute top-1/3 left-4 sm:left-10 md:left-auto md:right-10 lg:right-20 text-center md:text-right"
                    style={{ fontFamily: "'Rancho', cursive" }}
                >
                    Would You Like A Cup OF Delicious Coffee?
                </p>
                {/* Subheading text positioned on the right for md and lg screens */}
                <p
                    className="text-white text-sm sm:text-base md:text-lg lg:text-xl absolute top-1/2 left-4 sm:left-10 md:left-auto md:right-10 lg:right-20 max-w-xs sm:max-w-md lg:max-w-lg text-center md:text-right"
                >
                    It's Coffee Time - Sip & Savor - Relaxation in every sip!
                    Your Companion of Every Moment!!! Enjoy The Beautiful
                    Moments and Make Them Memorable
                </p>
                {/* Button with coffee color and hover effect, positioned lower */}
                <button
                    className="absolute left-4 sm:left-10 md:left-auto md:right-10 lg:right-20 mt-2 bg-[#6f4e37] hover:bg-[#8b5e3c] text-white py-2 px-4 rounded text-sm sm:text-base md:text-lg lg:text-xl"
                    style={{ top: '65%', fontFamily: "'Rancho', cursive" }}
                >
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default Banner;
