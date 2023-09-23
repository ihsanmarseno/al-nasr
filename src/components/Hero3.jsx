import Card1 from "../assets/img/card1.png";
import Card3 from "../assets/img/card3.png";

const Hero3 = () => {
  const CardFill = [
    {
      id: 1,
      predicateYellow: "Bronze",
      predicateGreen: "Best Seller",
      title: "Al Nasr Special Umrah 9 Days",
      price: "1,950",
      picture: Card1,
    },
    {
      id: 2,
      predicateYellow: "Silver",
      predicateGreen: "Special Seller",
      title: "Al Nasr Special Umrah 17 Days",
      price: "2,750",
      picture: Card3,
    },
    {
      id: 3,
      predicateYellow: "Gold",
      predicateGreen: "Long Trip",
      title: "Al Nasr Special Umrah 25 Days",
      price: "4,250",
      picture: Card1,
    },
    {
      id: 4,
      predicateYellow: "Silver",
      predicateGreen: "Best Seller",
      title: "Al Nasr Special Hajj 30 Days",
      price: "20,000",
      picture: Card1,
    },
    {
      id: 5,
      predicateYellow: "Platinum",
      predicateGreen: "Special Offering",
      title: "Al Nasr Special Hajj 30 Days",
      price: "25,000",
      picture: Card3,
    },
  ];

  return (
    <div className="h-full mx-[100px] mt-[78px]">
      <div className="flex flex-col items-center justify-center">
        <div className="text-[54px] font-bold font-kufam text-[#4A4A4A] w-[700px] h-[152px] text-center">
          Al Nasr Special Umrah and Hajj Packages
        </div>
        <div className="w-[700px] mt-[10px] font-nunito font-semibold text-[24px] text-[#454545] text-center">
          Choose your package according to your needs, guaranteed cheap and
          complete
        </div>
      </div>

      <div className="flex flex-col gap-[78px] mt-[72px]">
        <div className="w-[361px] h-[549px] bg-blue-100">
          <div className="flex justify-center mx-[10px] mt-6">
            <img
              src={CardFill[0].picture}
              alt="Gambar 1"
              className="w-[311px] h-[238px]"
            />
          </div>
          <div className="flex justify-between m-[10px]">
            <p>ss</p>
            <p>ss</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
