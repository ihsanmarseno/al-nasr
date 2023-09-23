import Card1 from "../assets/img/card1.png";
import Card2 from "../assets/img/card2.png";
import Card3 from "../assets/img/card3.png";
import Garuda from "../assets/img/garuda.png"
import Qatar from "../assets/img/qatar.png"
import Fly from "../assets/img/fly.png"
import Saudia from "../assets/img/saudia.png"
import Lion from "../assets/img/lionair.png"



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
      picture: Card2,
    },
    {
      id: 3,
      predicateYellow: "Gold",
      predicateGreen: "Long Trip",
      title: "Al Nasr Special Umrah 25 Days",
      price: "4,250",
      picture: Card3,
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
      picture: Card2,
    },
  ];

  return (
    <div>
      <div className="h-full ml-[100px] mt-[78px]">
        <div className="mr-[100px]">
        <div className="flex flex-col items-center justify-center">
          <div className="text-[54px] font-bold font-kufam text-[#4A4A4A] w-[700px] h-[152px] text-center">
            Al Nasr Special Umrah and Hajj Packages
          </div>
          <div className="w-[700px] mt-[10px] font-nunito font-semibold text-[24px] text-[#454545] text-center">
            Choose your package according to your needs, guaranteed cheap and
            complete
          </div>
        </div>

        <div className="flex flex-row justify-between mt-[72px]">
          <div className="w-[361px] h-[549px] bg-white rounded-[10px] shadow-xl">
            <div className="ml-[10px]">
              <div className="flex justify-center mx-[10px] mt-6">
                <img
                  src={CardFill[0].picture}
                  alt="Gambar 1"
                  className="w-[311px] h-[238px] mr-[10px]"
                />
              </div>
              <div className="flex justify-between ml-[15px] my-[15px] items-center">
                <p className="text-[#FFC265] font-nunito font-bold text-[16px] items-center">
                  Bronze
                </p>
                <p className="font-nunito font-bold text-[16px] text-[#1DA599] bg-[#C1FFFA] p-[10px] rounded-l-[30px] py-[10px] px-[30px]">
                  Best Seller
                </p>
              </div>
              <div className="font-kufam font-extrabold mt-5 ml-[15px]">
                <p className="text-[16px] text-[#4A4A4A]">
                  Al Nasr Special Umrah 9 Days
                </p>
                <p className="pt-[10px] text-[20px] text-[#4A4A4A]">
                  $ 1,950/ <span className="text-[#1DA599]">person</span>
                </p>
              </div>
              <div className="mt-5 w-[204px] ml-[15px] flex justify-between">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    d="M8.50003 25.0001H27.5V27.0001H8.50003V25.0001ZM28.07 15.6401C27.86 14.8401 27.03 14.3601 26.23 14.5801L20.92 16.0001L14 9.57007L12.09 10.0801L16.23 17.2501L11.26 18.5801L9.29003 17.0401L7.84003 17.4301L9.66003 20.5901L10.43 21.9201L12.03 21.5001L17.34 20.0701L21.69 18.9101L27 17.5001C27.81 17.2601 28.28 16.4401 28.07 15.6401Z"
                    fill="#1DA599"
                  />
                </svg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.008 25.003L20.014 23C20.014 22.7341 20.1196 22.4791 20.3076 22.2911C20.4956 22.1031 20.7506 21.9975 21.0165 21.9975C21.2824 21.9975 21.5374 22.1031 21.7254 22.2911C21.9134 22.4791 22.019 22.7341 22.019 23V24.977C22.019 25.458 22.019 25.699 22.173 25.847C22.328 25.994 22.563 25.984 23.036 25.964C24.899 25.885 26.044 25.634 26.85 24.828C27.66 24.022 27.911 22.877 27.99 21.011C28.005 20.641 28.013 20.455 27.944 20.332C27.874 20.209 27.599 20.055 27.047 19.746C26.7361 19.5727 26.4771 19.3194 26.2968 19.0125C26.1165 18.7055 26.0214 18.356 26.0214 18C26.0214 17.644 26.1165 17.2945 26.2968 16.9875C26.4771 16.6806 26.7361 16.4273 27.047 16.254C27.599 15.946 27.875 15.791 27.944 15.668C28.013 15.545 28.005 15.36 27.989 14.989C27.911 13.123 27.659 11.979 26.85 11.172C25.973 10.296 24.695 10.075 22.528 10.019C22.4617 10.0173 22.3956 10.0288 22.3338 10.053C22.272 10.0772 22.2157 10.1136 22.1681 10.1599C22.1206 10.2062 22.0828 10.2616 22.057 10.3228C22.0313 10.3839 22.018 10.4496 22.018 10.516V13C22.018 13.2659 21.9124 13.5209 21.7244 13.7089C21.5364 13.8969 21.2814 14.0025 21.0155 14.0025C20.7496 14.0025 20.4946 13.8969 20.3066 13.7089C20.1186 13.5209 20.013 13.2659 20.013 13L20.006 10.499C20.0057 10.3666 19.9529 10.2396 19.8592 10.1461C19.7655 10.0525 19.6384 10 19.506 10H15.994C12.214 10 10.324 10 9.14901 11.172C8.33901 11.978 8.08801 13.123 8.00901 14.989C7.99401 15.359 7.98601 15.545 8.05501 15.668C8.12501 15.791 8.40001 15.946 8.95201 16.254C9.26294 16.4273 9.52195 16.6806 9.70225 16.9875C9.88256 17.2945 9.97762 17.644 9.97762 18C9.97762 18.356 9.88256 18.7055 9.70225 19.0125C9.52195 19.3194 9.26294 19.5727 8.95201 19.746C8.40001 20.055 8.12401 20.209 8.05501 20.332C7.98601 20.455 7.99401 20.64 8.01001 21.01C8.08801 22.877 8.34001 24.022 9.14901 24.828C10.324 26 12.214 26 15.995 26H19.005C19.477 26 19.712 26 19.859 25.854C20.006 25.708 20.007 25.474 20.008 25.003ZM22.018 19V17C22.018 16.7341 21.9124 16.4791 21.7244 16.2911C21.5364 16.1031 21.2814 15.9975 21.0155 15.9975C20.7496 15.9975 20.4946 16.1031 20.3066 16.2911C20.1186 16.4791 20.013 16.7341 20.013 17V19C20.013 19.266 20.1187 19.5211 20.3068 19.7092C20.4949 19.8973 20.75 20.003 21.016 20.003C21.282 20.003 21.5371 19.8973 21.7252 19.7092C21.9133 19.5211 22.018 19.266 22.018 19Z"
                    fill="#1DA599"
                  />
                </svg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    d="M23 25H25V17H19V25H21V19H23V25ZM9 25V10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9H24C24.2652 9 24.5196 9.10536 24.7071 9.29289C24.8946 9.48043 25 9.73478 25 10V15H27V25H28V27H8V25H9ZM13 17V19H15V17H13ZM13 21V23H15V21H13ZM13 13V15H15V13H13Z"
                    fill="#1DA599"
                  />
                </svg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.756 12.342C10.344 11.56 8.733 10.93 6.931 10.494L6.99 10.144H14.397C15.394 10.18 16.201 10.499 16.479 11.566L18.089 19.309V19.31L18.569 21.645L23.066 10.154H27.931L20.7 26.974L15.84 26.979L11.756 12.342Z"
                    fill="#1DA599"
                  />
                </svg>
              </div>
              <div className="mt-[20px] ml-[15px] mb-[30px]">
                <button className="text-[#FFC265] bg-white font-nunito font-semibold text-[12px] py-3 px-9 border-[#FFC265] border-[2px] rounded-[5px]">
                  View Detail
                </button>
              </div>
            </div>
          </div>

          <div className="w-[361px] h-[549px] bg-white rounded-[10px] shadow-xl">
            <div className="ml-[10px]">
              <div className="flex justify-center mx-[10px] mt-6">
                <img
                  src={CardFill[1].picture}
                  alt="Gambar 1"
                  className="w-[311px] h-[238px] mr-[10px]"
                />
              </div>
              <div className="flex justify-between ml-[15px] my-[15px] items-center">
                <p className="text-[#FFC265] font-nunito font-bold text-[16px] items-center">
                  Bronze
                </p>
                <p className="font-nunito font-bold text-[16px] text-[#1DA599] bg-[#C1FFFA] p-[10px] rounded-l-[30px] py-[10px] px-[30px]">
                  Special Seller
                </p>
              </div>
              <div className="font-kufam font-extrabold mt-5 ml-[15px]">
                <p className="text-[16px] text-[#4A4A4A]">
                  Al Nasr Special Umrah 17 Days
                </p>
                <p className="pt-[10px] text-[20px] text-[#4A4A4A]">
                  $ 2,750/ <span className="text-[#1DA599]">person</span>
                </p>
              </div>
              <div className="mt-5 w-[204px] ml-[15px] flex justify-between">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    d="M8.50003 25.0001H27.5V27.0001H8.50003V25.0001ZM28.07 15.6401C27.86 14.8401 27.03 14.3601 26.23 14.5801L20.92 16.0001L14 9.57007L12.09 10.0801L16.23 17.2501L11.26 18.5801L9.29003 17.0401L7.84003 17.4301L9.66003 20.5901L10.43 21.9201L12.03 21.5001L17.34 20.0701L21.69 18.9101L27 17.5001C27.81 17.2601 28.28 16.4401 28.07 15.6401Z"
                    fill="#1DA599"
                  />
                </svg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.008 25.003L20.014 23C20.014 22.7341 20.1196 22.4791 20.3076 22.2911C20.4956 22.1031 20.7506 21.9975 21.0165 21.9975C21.2824 21.9975 21.5374 22.1031 21.7254 22.2911C21.9134 22.4791 22.019 22.7341 22.019 23V24.977C22.019 25.458 22.019 25.699 22.173 25.847C22.328 25.994 22.563 25.984 23.036 25.964C24.899 25.885 26.044 25.634 26.85 24.828C27.66 24.022 27.911 22.877 27.99 21.011C28.005 20.641 28.013 20.455 27.944 20.332C27.874 20.209 27.599 20.055 27.047 19.746C26.7361 19.5727 26.4771 19.3194 26.2968 19.0125C26.1165 18.7055 26.0214 18.356 26.0214 18C26.0214 17.644 26.1165 17.2945 26.2968 16.9875C26.4771 16.6806 26.7361 16.4273 27.047 16.254C27.599 15.946 27.875 15.791 27.944 15.668C28.013 15.545 28.005 15.36 27.989 14.989C27.911 13.123 27.659 11.979 26.85 11.172C25.973 10.296 24.695 10.075 22.528 10.019C22.4617 10.0173 22.3956 10.0288 22.3338 10.053C22.272 10.0772 22.2157 10.1136 22.1681 10.1599C22.1206 10.2062 22.0828 10.2616 22.057 10.3228C22.0313 10.3839 22.018 10.4496 22.018 10.516V13C22.018 13.2659 21.9124 13.5209 21.7244 13.7089C21.5364 13.8969 21.2814 14.0025 21.0155 14.0025C20.7496 14.0025 20.4946 13.8969 20.3066 13.7089C20.1186 13.5209 20.013 13.2659 20.013 13L20.006 10.499C20.0057 10.3666 19.9529 10.2396 19.8592 10.1461C19.7655 10.0525 19.6384 10 19.506 10H15.994C12.214 10 10.324 10 9.14901 11.172C8.33901 11.978 8.08801 13.123 8.00901 14.989C7.99401 15.359 7.98601 15.545 8.05501 15.668C8.12501 15.791 8.40001 15.946 8.95201 16.254C9.26294 16.4273 9.52195 16.6806 9.70225 16.9875C9.88256 17.2945 9.97762 17.644 9.97762 18C9.97762 18.356 9.88256 18.7055 9.70225 19.0125C9.52195 19.3194 9.26294 19.5727 8.95201 19.746C8.40001 20.055 8.12401 20.209 8.05501 20.332C7.98601 20.455 7.99401 20.64 8.01001 21.01C8.08801 22.877 8.34001 24.022 9.14901 24.828C10.324 26 12.214 26 15.995 26H19.005C19.477 26 19.712 26 19.859 25.854C20.006 25.708 20.007 25.474 20.008 25.003ZM22.018 19V17C22.018 16.7341 21.9124 16.4791 21.7244 16.2911C21.5364 16.1031 21.2814 15.9975 21.0155 15.9975C20.7496 15.9975 20.4946 16.1031 20.3066 16.2911C20.1186 16.4791 20.013 16.7341 20.013 17V19C20.013 19.266 20.1187 19.5211 20.3068 19.7092C20.4949 19.8973 20.75 20.003 21.016 20.003C21.282 20.003 21.5371 19.8973 21.7252 19.7092C21.9133 19.5211 22.018 19.266 22.018 19Z"
                    fill="#1DA599"
                  />
                </svg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    d="M23 25H25V17H19V25H21V19H23V25ZM9 25V10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9H24C24.2652 9 24.5196 9.10536 24.7071 9.29289C24.8946 9.48043 25 9.73478 25 10V15H27V25H28V27H8V25H9ZM13 17V19H15V17H13ZM13 21V23H15V21H13ZM13 13V15H15V13H13Z"
                    fill="#1DA599"
                  />
                </svg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.756 12.342C10.344 11.56 8.733 10.93 6.931 10.494L6.99 10.144H14.397C15.394 10.18 16.201 10.499 16.479 11.566L18.089 19.309V19.31L18.569 21.645L23.066 10.154H27.931L20.7 26.974L15.84 26.979L11.756 12.342Z"
                    fill="#1DA599"
                  />
                </svg>
              </div>
              <div className="mt-[20px] ml-[15px] mb-[30px]">
                <button className="text-[#FFC265] bg-white font-nunito font-semibold text-[12px] py-3 px-9 border-[#FFC265] border-[2px] rounded-[5px]">
                  View Detail
                </button>
              </div>
            </div>
          </div>

          <div className="w-[361px] h-[549px] bg-white rounded-[10px] shadow-xl">
            <div className="ml-[10px]">
              <div className="flex justify-center mx-[10px] mt-6">
                <img
                  src={CardFill[2].picture}
                  alt="Gambar 1"
                  className="w-[311px] h-[238px] mr-[10px]"
                />
              </div>
              <div className="flex justify-between ml-[15px] my-[15px] items-center">
                <p className="text-[#FFC265] font-nunito font-bold text-[16px] items-center">
                  Gold
                </p>
                <p className="font-nunito font-bold text-[16px] text-[#1DA599] bg-[#C1FFFA] p-[10px] rounded-l-[30px] py-[10px] px-[30px]">
                  Long Trip
                </p>
              </div>
              <div className="font-kufam font-extrabold mt-5 ml-[15px]">
                <p className="text-[16px] text-[#4A4A4A]">
                  Al Nasr Special Umrah 25 Days
                </p>
                <p className="pt-[10px] text-[20px] text-[#4A4A4A]">
                  $ 4,250/ <span className="text-[#1DA599]">person</span>
                </p>
              </div>
              <div className="mt-5 w-[204px] ml-[15px] flex justify-between">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    d="M8.50003 25.0001H27.5V27.0001H8.50003V25.0001ZM28.07 15.6401C27.86 14.8401 27.03 14.3601 26.23 14.5801L20.92 16.0001L14 9.57007L12.09 10.0801L16.23 17.2501L11.26 18.5801L9.29003 17.0401L7.84003 17.4301L9.66003 20.5901L10.43 21.9201L12.03 21.5001L17.34 20.0701L21.69 18.9101L27 17.5001C27.81 17.2601 28.28 16.4401 28.07 15.6401Z"
                    fill="#1DA599"
                  />
                </svg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.008 25.003L20.014 23C20.014 22.7341 20.1196 22.4791 20.3076 22.2911C20.4956 22.1031 20.7506 21.9975 21.0165 21.9975C21.2824 21.9975 21.5374 22.1031 21.7254 22.2911C21.9134 22.4791 22.019 22.7341 22.019 23V24.977C22.019 25.458 22.019 25.699 22.173 25.847C22.328 25.994 22.563 25.984 23.036 25.964C24.899 25.885 26.044 25.634 26.85 24.828C27.66 24.022 27.911 22.877 27.99 21.011C28.005 20.641 28.013 20.455 27.944 20.332C27.874 20.209 27.599 20.055 27.047 19.746C26.7361 19.5727 26.4771 19.3194 26.2968 19.0125C26.1165 18.7055 26.0214 18.356 26.0214 18C26.0214 17.644 26.1165 17.2945 26.2968 16.9875C26.4771 16.6806 26.7361 16.4273 27.047 16.254C27.599 15.946 27.875 15.791 27.944 15.668C28.013 15.545 28.005 15.36 27.989 14.989C27.911 13.123 27.659 11.979 26.85 11.172C25.973 10.296 24.695 10.075 22.528 10.019C22.4617 10.0173 22.3956 10.0288 22.3338 10.053C22.272 10.0772 22.2157 10.1136 22.1681 10.1599C22.1206 10.2062 22.0828 10.2616 22.057 10.3228C22.0313 10.3839 22.018 10.4496 22.018 10.516V13C22.018 13.2659 21.9124 13.5209 21.7244 13.7089C21.5364 13.8969 21.2814 14.0025 21.0155 14.0025C20.7496 14.0025 20.4946 13.8969 20.3066 13.7089C20.1186 13.5209 20.013 13.2659 20.013 13L20.006 10.499C20.0057 10.3666 19.9529 10.2396 19.8592 10.1461C19.7655 10.0525 19.6384 10 19.506 10H15.994C12.214 10 10.324 10 9.14901 11.172C8.33901 11.978 8.08801 13.123 8.00901 14.989C7.99401 15.359 7.98601 15.545 8.05501 15.668C8.12501 15.791 8.40001 15.946 8.95201 16.254C9.26294 16.4273 9.52195 16.6806 9.70225 16.9875C9.88256 17.2945 9.97762 17.644 9.97762 18C9.97762 18.356 9.88256 18.7055 9.70225 19.0125C9.52195 19.3194 9.26294 19.5727 8.95201 19.746C8.40001 20.055 8.12401 20.209 8.05501 20.332C7.98601 20.455 7.99401 20.64 8.01001 21.01C8.08801 22.877 8.34001 24.022 9.14901 24.828C10.324 26 12.214 26 15.995 26H19.005C19.477 26 19.712 26 19.859 25.854C20.006 25.708 20.007 25.474 20.008 25.003ZM22.018 19V17C22.018 16.7341 21.9124 16.4791 21.7244 16.2911C21.5364 16.1031 21.2814 15.9975 21.0155 15.9975C20.7496 15.9975 20.4946 16.1031 20.3066 16.2911C20.1186 16.4791 20.013 16.7341 20.013 17V19C20.013 19.266 20.1187 19.5211 20.3068 19.7092C20.4949 19.8973 20.75 20.003 21.016 20.003C21.282 20.003 21.5371 19.8973 21.7252 19.7092C21.9133 19.5211 22.018 19.266 22.018 19Z"
                    fill="#1DA599"
                  />
                </svg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    d="M23 25H25V17H19V25H21V19H23V25ZM9 25V10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9H24C24.2652 9 24.5196 9.10536 24.7071 9.29289C24.8946 9.48043 25 9.73478 25 10V15H27V25H28V27H8V25H9ZM13 17V19H15V17H13ZM13 21V23H15V21H13ZM13 13V15H15V13H13Z"
                    fill="#1DA599"
                  />
                </svg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.756 12.342C10.344 11.56 8.733 10.93 6.931 10.494L6.99 10.144H14.397C15.394 10.18 16.201 10.499 16.479 11.566L18.089 19.309V19.31L18.569 21.645L23.066 10.154H27.931L20.7 26.974L15.84 26.979L11.756 12.342Z"
                    fill="#1DA599"
                  />
                </svg>
              </div>
              <div className="mt-[20px] ml-[15px] mb-[30px]">
                <button className="text-[#FFC265] bg-white font-nunito font-semibold text-[12px] py-3 px-9 border-[#FFC265] border-[2px] rounded-[5px]">
                  View Detail
                </button>
              </div>
            </div>
          </div>

          <div className="w-[361px] h-[549px] bg-white rounded-[10px] shadow-xl">
            <div className="ml-[10px]">
              <div className="flex justify-center mx-[10px] mt-6">
                <img
                  src={CardFill[0].picture}
                  alt="Gambar 1"
                  className="w-[311px] h-[238px] mr-[10px]"
                />
              </div>
              <div className="flex justify-between ml-[15px] my-[15px] items-center">
                <p className="text-[#FFC265] font-nunito font-bold text-[16px] items-center">
                  Diamond
                </p>
                <p className="font-nunito font-bold text-[16px] text-[#1DA599] bg-[#C1FFFA] p-[10px] rounded-l-[30px] py-[10px] px-[30px]">
                  Best Seller
                </p>
              </div>
              <div className="font-kufam font-extrabold mt-5 ml-[15px]">
                <p className="text-[16px] text-[#4A4A4A]">
                  Al Nasr Special Umrah 30 Days
                </p>
                <p className="pt-[10px] text-[20px] text-[#4A4A4A]">
                  $ 20,000/ <span className="text-[#1DA599]">person</span>
                </p>
              </div>
              <div className="mt-5 w-[204px] ml-[15px] flex justify-between">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    d="M8.50003 25.0001H27.5V27.0001H8.50003V25.0001ZM28.07 15.6401C27.86 14.8401 27.03 14.3601 26.23 14.5801L20.92 16.0001L14 9.57007L12.09 10.0801L16.23 17.2501L11.26 18.5801L9.29003 17.0401L7.84003 17.4301L9.66003 20.5901L10.43 21.9201L12.03 21.5001L17.34 20.0701L21.69 18.9101L27 17.5001C27.81 17.2601 28.28 16.4401 28.07 15.6401Z"
                    fill="#1DA599"
                  />
                </svg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.008 25.003L20.014 23C20.014 22.7341 20.1196 22.4791 20.3076 22.2911C20.4956 22.1031 20.7506 21.9975 21.0165 21.9975C21.2824 21.9975 21.5374 22.1031 21.7254 22.2911C21.9134 22.4791 22.019 22.7341 22.019 23V24.977C22.019 25.458 22.019 25.699 22.173 25.847C22.328 25.994 22.563 25.984 23.036 25.964C24.899 25.885 26.044 25.634 26.85 24.828C27.66 24.022 27.911 22.877 27.99 21.011C28.005 20.641 28.013 20.455 27.944 20.332C27.874 20.209 27.599 20.055 27.047 19.746C26.7361 19.5727 26.4771 19.3194 26.2968 19.0125C26.1165 18.7055 26.0214 18.356 26.0214 18C26.0214 17.644 26.1165 17.2945 26.2968 16.9875C26.4771 16.6806 26.7361 16.4273 27.047 16.254C27.599 15.946 27.875 15.791 27.944 15.668C28.013 15.545 28.005 15.36 27.989 14.989C27.911 13.123 27.659 11.979 26.85 11.172C25.973 10.296 24.695 10.075 22.528 10.019C22.4617 10.0173 22.3956 10.0288 22.3338 10.053C22.272 10.0772 22.2157 10.1136 22.1681 10.1599C22.1206 10.2062 22.0828 10.2616 22.057 10.3228C22.0313 10.3839 22.018 10.4496 22.018 10.516V13C22.018 13.2659 21.9124 13.5209 21.7244 13.7089C21.5364 13.8969 21.2814 14.0025 21.0155 14.0025C20.7496 14.0025 20.4946 13.8969 20.3066 13.7089C20.1186 13.5209 20.013 13.2659 20.013 13L20.006 10.499C20.0057 10.3666 19.9529 10.2396 19.8592 10.1461C19.7655 10.0525 19.6384 10 19.506 10H15.994C12.214 10 10.324 10 9.14901 11.172C8.33901 11.978 8.08801 13.123 8.00901 14.989C7.99401 15.359 7.98601 15.545 8.05501 15.668C8.12501 15.791 8.40001 15.946 8.95201 16.254C9.26294 16.4273 9.52195 16.6806 9.70225 16.9875C9.88256 17.2945 9.97762 17.644 9.97762 18C9.97762 18.356 9.88256 18.7055 9.70225 19.0125C9.52195 19.3194 9.26294 19.5727 8.95201 19.746C8.40001 20.055 8.12401 20.209 8.05501 20.332C7.98601 20.455 7.99401 20.64 8.01001 21.01C8.08801 22.877 8.34001 24.022 9.14901 24.828C10.324 26 12.214 26 15.995 26H19.005C19.477 26 19.712 26 19.859 25.854C20.006 25.708 20.007 25.474 20.008 25.003ZM22.018 19V17C22.018 16.7341 21.9124 16.4791 21.7244 16.2911C21.5364 16.1031 21.2814 15.9975 21.0155 15.9975C20.7496 15.9975 20.4946 16.1031 20.3066 16.2911C20.1186 16.4791 20.013 16.7341 20.013 17V19C20.013 19.266 20.1187 19.5211 20.3068 19.7092C20.4949 19.8973 20.75 20.003 21.016 20.003C21.282 20.003 21.5371 19.8973 21.7252 19.7092C21.9133 19.5211 22.018 19.266 22.018 19Z"
                    fill="#1DA599"
                  />
                </svg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    d="M23 25H25V17H19V25H21V19H23V25ZM9 25V10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9H24C24.2652 9 24.5196 9.10536 24.7071 9.29289C24.8946 9.48043 25 9.73478 25 10V15H27V25H28V27H8V25H9ZM13 17V19H15V17H13ZM13 21V23H15V21H13ZM13 13V15H15V13H13Z"
                    fill="#1DA599"
                  />
                </svg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.756 12.342C10.344 11.56 8.733 10.93 6.931 10.494L6.99 10.144H14.397C15.394 10.18 16.201 10.499 16.479 11.566L18.089 19.309V19.31L18.569 21.645L23.066 10.154H27.931L20.7 26.974L15.84 26.979L11.756 12.342Z"
                    fill="#1DA599"
                  />
                </svg>
              </div>
              <div className="mt-[20px] ml-[15px] mb-[30px]">
                <button className="text-[#FFC265] bg-white font-nunito font-semibold text-[12px] py-3 px-9 border-[#FFC265] border-[2px] rounded-[5px]">
                  View Detail
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-[46px]">
          <div className="w-[361px] h-[549px] bg-white rounded-[10px] shadow-xl">
            <div className="ml-[10px] pt-[2px]">
              <div className="flex justify-center mx-[10px] mt-6">
                <img
                  src={CardFill[1].picture}
                  alt="Gambar 1"
                  className="w-[311px] h-[238px] mr-[10px]"
                />
              </div>
              <div className="flex justify-between ml-[15px] my-[15px] items-center">
                <p className="text-[#FFC265] font-nunito font-bold text-[16px] items-center">
                  Diamond
                </p>
                <p className="font-nunito font-bold text-[16px] text-[#1DA599] bg-[#C1FFFA] p-[10px] rounded-l-[30px] py-[10px] px-[30px]">
                  Best Seller
                </p>
              </div>
              <div className="font-kufam font-extrabold mt-5 ml-[15px]">
                <p className="text-[16px] text-[#4A4A4A]">
                  Al Nasr Special Umrah 30 Days
                </p>
                <p className="pt-[10px] text-[20px] text-[#4A4A4A]">
                  $ 20,000/ <span className="text-[#1DA599]">person</span>
                </p>
              </div>
              <div className="mt-5 w-[204px] ml-[15px] flex justify-between">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    d="M8.50003 25.0001H27.5V27.0001H8.50003V25.0001ZM28.07 15.6401C27.86 14.8401 27.03 14.3601 26.23 14.5801L20.92 16.0001L14 9.57007L12.09 10.0801L16.23 17.2501L11.26 18.5801L9.29003 17.0401L7.84003 17.4301L9.66003 20.5901L10.43 21.9201L12.03 21.5001L17.34 20.0701L21.69 18.9101L27 17.5001C27.81 17.2601 28.28 16.4401 28.07 15.6401Z"
                    fill="#1DA599"
                  />
                </svg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.008 25.003L20.014 23C20.014 22.7341 20.1196 22.4791 20.3076 22.2911C20.4956 22.1031 20.7506 21.9975 21.0165 21.9975C21.2824 21.9975 21.5374 22.1031 21.7254 22.2911C21.9134 22.4791 22.019 22.7341 22.019 23V24.977C22.019 25.458 22.019 25.699 22.173 25.847C22.328 25.994 22.563 25.984 23.036 25.964C24.899 25.885 26.044 25.634 26.85 24.828C27.66 24.022 27.911 22.877 27.99 21.011C28.005 20.641 28.013 20.455 27.944 20.332C27.874 20.209 27.599 20.055 27.047 19.746C26.7361 19.5727 26.4771 19.3194 26.2968 19.0125C26.1165 18.7055 26.0214 18.356 26.0214 18C26.0214 17.644 26.1165 17.2945 26.2968 16.9875C26.4771 16.6806 26.7361 16.4273 27.047 16.254C27.599 15.946 27.875 15.791 27.944 15.668C28.013 15.545 28.005 15.36 27.989 14.989C27.911 13.123 27.659 11.979 26.85 11.172C25.973 10.296 24.695 10.075 22.528 10.019C22.4617 10.0173 22.3956 10.0288 22.3338 10.053C22.272 10.0772 22.2157 10.1136 22.1681 10.1599C22.1206 10.2062 22.0828 10.2616 22.057 10.3228C22.0313 10.3839 22.018 10.4496 22.018 10.516V13C22.018 13.2659 21.9124 13.5209 21.7244 13.7089C21.5364 13.8969 21.2814 14.0025 21.0155 14.0025C20.7496 14.0025 20.4946 13.8969 20.3066 13.7089C20.1186 13.5209 20.013 13.2659 20.013 13L20.006 10.499C20.0057 10.3666 19.9529 10.2396 19.8592 10.1461C19.7655 10.0525 19.6384 10 19.506 10H15.994C12.214 10 10.324 10 9.14901 11.172C8.33901 11.978 8.08801 13.123 8.00901 14.989C7.99401 15.359 7.98601 15.545 8.05501 15.668C8.12501 15.791 8.40001 15.946 8.95201 16.254C9.26294 16.4273 9.52195 16.6806 9.70225 16.9875C9.88256 17.2945 9.97762 17.644 9.97762 18C9.97762 18.356 9.88256 18.7055 9.70225 19.0125C9.52195 19.3194 9.26294 19.5727 8.95201 19.746C8.40001 20.055 8.12401 20.209 8.05501 20.332C7.98601 20.455 7.99401 20.64 8.01001 21.01C8.08801 22.877 8.34001 24.022 9.14901 24.828C10.324 26 12.214 26 15.995 26H19.005C19.477 26 19.712 26 19.859 25.854C20.006 25.708 20.007 25.474 20.008 25.003ZM22.018 19V17C22.018 16.7341 21.9124 16.4791 21.7244 16.2911C21.5364 16.1031 21.2814 15.9975 21.0155 15.9975C20.7496 15.9975 20.4946 16.1031 20.3066 16.2911C20.1186 16.4791 20.013 16.7341 20.013 17V19C20.013 19.266 20.1187 19.5211 20.3068 19.7092C20.4949 19.8973 20.75 20.003 21.016 20.003C21.282 20.003 21.5371 19.8973 21.7252 19.7092C21.9133 19.5211 22.018 19.266 22.018 19Z"
                    fill="#1DA599"
                  />
                </svg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    d="M23 25H25V17H19V25H21V19H23V25ZM9 25V10C9 9.73478 9.10536 9.48043 9.29289 9.29289C9.48043 9.10536 9.73478 9 10 9H24C24.2652 9 24.5196 9.10536 24.7071 9.29289C24.8946 9.48043 25 9.73478 25 10V15H27V25H28V27H8V25H9ZM13 17V19H15V17H13ZM13 21V23H15V21H13ZM13 13V15H15V13H13Z"
                    fill="#1DA599"
                  />
                </svg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="36" height="36" rx="10" fill="#C1FFFA" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.756 12.342C10.344 11.56 8.733 10.93 6.931 10.494L6.99 10.144H14.397C15.394 10.18 16.201 10.499 16.479 11.566L18.089 19.309V19.31L18.569 21.645L23.066 10.154H27.931L20.7 26.974L15.84 26.979L11.756 12.342Z"
                    fill="#1DA599"
                  />
                </svg>
              </div>
              <div className="mt-[20px] ml-[15px] mb-[30px]">
                <button className="text-[#FFC265] bg-white font-nunito font-semibold text-[12px] py-3 px-9 border-[#FFC265] border-[2px] rounded-[5px]">
                  View Detail
                </button>
              </div>
            </div>
          </div>

          <div className="w-[361px] h-[549px] bg-white rounded-[10px] shadow-xl flex justify-center items-center font-semibold text-[#1DA599] text-[20px] font-kufam">
            <p>Soon Program</p>
          </div>
          <div className="w-[361px] h-[549px] bg-white rounded-[10px] shadow-xl flex justify-center items-center font-semibold text-[#1DA599] text-[20px] font-kufam">
            <p>Soon Program</p>
          </div>
          <div className="w-[361px] h-[549px] bg-white rounded-[10px] shadow-xl flex justify-center items-center font-semibold text-[#1DA599] text-[20px] font-kufam">
            <p>Soon Program</p>
          </div>
        </div>
        </div>

        <div className="flex grid-cols-2 mt-[100px]">
          <div className="w-[300px]">
            <p className="font-kufam font-extrabold text-[32px] text-[#4A4A4A]">
              Airways Accomadation
            </p>
            <p className="font-medium font-nunito text-[24px] text-[#4A4A4A] pt-[10px] pb-5">
              We cooperate with several airlines for Umrah and Hajj
            </p>
            <button className="flex gap-[6px] py-[10px] px-[20px] bg-[#C1FFFA] rounded-[20px]">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.5L15.09 8.76L22 9.77L17 14.64L18.18 21.52L12 18.27L5.82 21.52L7 14.64L2 9.77L8.91 8.76L12 2.5Z"
                  fill="#FFC265"
                  stroke="#FFC265"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
                <p className="font-nunito text-[20px] font-semibold text-[#1DA599]">5.0</p>
                <p className="font-nunito text-[20px] font-semibold text-[#1DA599]">Rating</p>
            </button>
          </div>
            <div className="flex justify-between items-center pl-[80px] gap-[50px] overflow-x-auto">
              <img src={Garuda} alt="" />
              <img src={Qatar} alt="" />
              <img src={Fly} alt="" />
              <img src={Saudia} alt="" />
              <img src={Lion} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
