import Rectangle from "../assets/img/rectangle.png";
import Person2 from "../assets/img/person2.png";
import Person1 from "../assets/img/person1.png"

const Hero = () => {
  return (
    <div className="mx-[100px] mt-[78px] grid grid-cols-3" id="hero1">
      <div className="w-[671px] h-[538px] col-span-2">
        <button className="font-medium text-[24px] text-[#1DA599] py-[14px] px-10 bg-[#C1FFFA] rounded-full">
          No. 1 in Indonesia
        </button>
        <div className="mt-[35px] font-bold font-kufam text-[54px] text-[#4A4A4A]">
          Make it easy for your Umrah worship with Al Nasr Travel
        </div>
        <div className="mt-[15px] font-semibold font-nunito  text-[24px] text-[#454545]">
          Facilitate your Umrah pilgrimage with us, we already have hundreds of
          thousands of customers, you can go for Umrah to Mecca and Medina
        </div>
        <button className="mt-[32px] py-[22px] px-[62px] bg-[#FFC265] text-[20px] text-[#3F3F3F] rounded-[10px] font-nunito font-extrabold hover:bg-[#d6983b] hover:text-white">
          Contact Us
        </button>
      </div>

      <div className="relative">
        <div className="absolute mt-[135px] w-[533px] h-[245px] bg-[#1DA599] rounded-[10px] z-0 -translate-x-20"></div>
        <img src={Rectangle} className="absolute z-10" alt="Gambar Hotel" />

        <div className="absolute bottom-0 left-0 z-20 w-[229px] h-[80px] bg-white rounded-[10px] border-2 border-[#1DA599] -translate-x-24 translate-y-6">
          <div className="flex py-1">
            <img src={Person2} alt="Gambar 2" />
            <div className="pl-[14px] pt-2">
              <p className="text-[12px] font-semibold font-nunito pr-5">
                “The most amazing city of Mecca”.
              </p>
              <p className="font-semibold font-kufam text-[12px] pt-[2px]">
                Mohammad Qassem
              </p>
            </div>
          </div>
        </div>

        <div>
        <div className="absolute top-0 right-0 z-20 w-[229px] h-[80px] bg-white rounded-[10px]  shadow-sm -translate-x-12 translate-y-6">
          <div className="flex py-1">
            <img src={Person1} alt="Gambar 1" className="pl-[5px] pt-[2px] transition-opacity ease-in-out" />
            <div className="pl-[14px] pt-2">
              <p className="text-[12px] font-semibold font-nunito pr-5">
                “Let{`'`}s worship as good Muslims”.
              </p>
              <p className="font-semibold font-kufam text-[12px] pt-[2px]">
                Mohammad Qassem
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
