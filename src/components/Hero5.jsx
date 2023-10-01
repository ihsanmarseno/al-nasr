const Hero5 = () => {
  return (
    <div className="bg-white">
      <div className="h-full mx-[100px]">
        <div className="mt-[90px] text-right">
          <p className="font-kufam font-bold text-[54px] text-[#4A4A4A]">
            Testimonial from our <span className="block">customers</span>
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button className="flex gap-2 py-5 px-[30px] bg-[#FFC265] rounded-[10px]  ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12H5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19L5 12L12 5"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-bold font-nunito text-[20px] text-[#3F3F3F]">Previous</p>
          </button>
          <p className="font-semibold text-[24px] text-[#454545] font-nunito mt-8 text-right">
            We have 100.000+ customers, here are our customer{" "}
            <span className="block">testimonials</span>
          </p>
        </div>

        <div className="w-[476px] h-[203px]">
            
        </div>
      </div>
    </div>
  );
};

export default Hero5;
