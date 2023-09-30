import SafetyLogo from "../assets/svg/safety.svg";
import ConselingLogo from "../assets/svg/conseling.svg";
import VehicleLogo from "../assets/svg/vehicle.svg";
import HealthLogo from "../assets/svg/health.svg";
import HostelLogo from "../assets/svg/hostel.svg";
import FoodLogo from "../assets/svg/foodndrink.svg";
import MembershipLogo from "../assets/svg/membership.svg";
import VaccineLogo from "../assets/svg/vaccine.svg";

const Hero4 = () => {
  const CardFill = [
    {
      id: 1,
      logo: SafetyLogo,
      title: "Safety & Security",
      text: "We take care of your security in 24 hours",
    },
    {
      id: 2,
      logo: ConselingLogo,
      title: "Conseling",
      text: "Provide counseling to stay fit spiritually and religius",
    },
    {
      id: 3,
      logo: VehicleLogo,
      title: "Vehicle In Saudi",
      text: "Bus and Car Vehicles While in Saudi",
    },
    {
      id: 4,
      logo: HealthLogo,
      title: "Health In Saudi",
      text: "Free Health Facilities for every customer",
    },
    {
      id: 5,
      logo: HostelLogo,
      title: "Hostel Rate 5",
      text: "5 star hotel accommodation every customer",
    },
    {
      id: 6,
      logo: FoodLogo,
      title: "Food & Drink",
      text: "Provide food and drinks while in Saudi",
    },
    {
      id: 7,
      logo: MembershipLogo,
      title: "Membership",
      text: "Obtain a membership card for each customer",
    },
    {
      id: 8,
      logo: VaccineLogo,
      title: "Vaccine",
      text: "Free meningitis vaccine for all customers",
    }
  ];
  return (
    <div className="bg-[#F3FFFE]">
      <div className="h-full mx-[100px]">
        <div className="pt-[90px] flex justify-center">
          <div className="text-center">
            <p className="font-kufam font-extrabold text-[54px] text-[#4A4A4A] pb-3">
              Facilities We Provide For You
            </p>
            <p className="block font-nunito text-[24px] text-[#454545] font-semibold text-center mb-[50px]">
              We provide comfort for our customers, with the various{" "}
              <span className="block"></span>
              facilities we provide that we provide
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-10">
          {CardFill.map((card, index) => (
            <div
              key={card.id}
              className={`w-[282px] h-[112px] rounded-[10px] bg-white shadow-lg ${
                index >= 4 ? "block mt-[50px]" : "flex"
              }`}
            >
              <div className="flex p-5">
                <div>
                  <img src={card.logo} alt="" />
                </div>
                <div className="ml-[10px]">
                  <p className="text-[20px] font-semibold font-kufam text-[#4A4A4A]">
                    {card.title}
                  </p>
                  <p className="font-nunito font-medium text-[14px] text-[#454545]">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero4;
