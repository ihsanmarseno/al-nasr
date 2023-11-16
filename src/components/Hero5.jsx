import Person1 from "../assets/img/person5_1.png";

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
            <p className="font-bold font-nunito text-[20px] text-[#3F3F3F]">
              Previous
            </p>
          </button>
          <p className="font-semibold text-[24px] text-[#454545] font-nunito mt-8 text-right">
            We have 100.000+ customers, here are our customer{" "}
            <span className="block">testimonials</span>
          </p>
        </div>

        <div className="w-[476px] h-[203px] py-[20px] px-[26px] mt-[60px]">
          <div>
            <img src={Person1} alt="" />
            <button className="flex items-center mt-[18px] justify-center">
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_18_562)">
                  <path
                    d="M6.5 1L8.045 4.13L11.5 4.635L9 7.07L9.59 10.51L6.5 8.885L3.41 10.51L4 7.07L1.5 4.635L4.955 4.13L6.5 1Z"
                    fill="#FFC265"
                    stroke="#FFC265"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_18_562">
                    <rect
                      width="12"
                      height="12"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p>5.9    </p>
            </button>
          </div>
          <div className="flex">
            <p>className</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero5;
