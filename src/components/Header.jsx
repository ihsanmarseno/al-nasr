import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="mx-[100px] mt-[80px] font-nunito">
      <div className="flex items-center justify-between">
        <svg
          width="143"
          height="71"
          viewBox="0 0 143 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="M2.91345 68L10.71 58.3569C11.5733 57.2892 12.0442 55.9577 12.0442 54.5846L12.0442 23.8826C12.0442 22.4276 12.5729 21.0222 13.5319 19.928L25.7892 5.94204C28.3406 3.03085 32.9402 3.26175 35.1872 6.41381L48.0866 24.5088"
            stroke="#FFC265"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M2.91345 68L2.91345 23.6278C2.91345 22.2275 3.40318 20.8714 4.29783 19.7942L15.6784 6.09187C18.2185 3.03356 22.9767 3.24643 25.2335 6.51934L34.9018 20.5403C35.8052 21.8505 37.1921 22.748 38.7574 23.0355L48.0866 24.7491"
            stroke="#1DA599"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M27.3665 66L29.9265 50.8C30.1825 49.2853 30.5665 48.016 31.0785 46.992C31.6119 45.968 32.2945 45.136 33.1265 44.496C33.9799 43.856 34.9932 43.3973 36.1665 43.12C37.3612 42.8427 38.7479 42.704 40.3265 42.704C41.1799 42.704 42.0652 42.7573 42.9825 42.864C43.9212 42.9493 44.8172 43.088 45.6705 43.28L45.7345 43.664C45.6492 44.0693 45.5852 44.592 45.5425 45.232C45.5212 45.872 45.5105 46.5227 45.5105 47.184C45.5105 47.824 45.5105 48.3573 45.5105 48.784V66H40.9345V48.4C40.9345 47.8453 40.9452 47.344 40.9665 46.896C41.0092 46.4267 41.0732 46 41.1585 45.616L41.7985 46.8C41.5425 46.7147 41.2119 46.6613 40.8065 46.64C40.4225 46.5973 40.0385 46.576 39.6545 46.576C38.4812 46.576 37.5425 46.736 36.8385 47.056C36.1559 47.3547 35.6332 47.824 35.2705 48.464C34.9079 49.104 34.6412 49.9147 34.4705 50.896L31.9745 66H27.3665ZM31.0785 59.632V55.856H42.9825V59.632H31.0785ZM50.9628 66V47.088C50.9628 46.6613 50.9521 46.1173 50.9308 45.456C50.9308 44.7733 50.9095 44.112 50.8668 43.472C50.8241 42.832 50.7495 42.32 50.6428 41.936L50.7388 41.68H55.4428V66H50.9628ZM68.7128 66V42.96H72.3928L84.5848 55.536V61.68L71.9768 48.656L73.2568 48.144V66H68.7128ZM82.8888 66V42.96H87.4328V66H82.8888ZM99.685 66.384C97.0184 66.384 95.0024 65.9467 93.637 65.072C92.293 64.1973 91.621 62.7787 91.621 60.816C91.621 59.5573 91.9304 58.5227 92.549 57.712C93.189 56.9013 94.0744 56.304 95.205 55.92C96.357 55.5147 97.6797 55.312 99.173 55.312C100.09 55.312 100.89 55.3867 101.573 55.536C102.256 55.664 102.874 55.8027 103.429 55.952V58.832C103.002 58.6827 102.458 58.5547 101.797 58.448C101.136 58.32 100.496 58.256 99.877 58.256C98.4904 58.256 97.4557 58.448 96.773 58.832C96.1117 59.216 95.781 59.8667 95.781 60.784C95.781 61.6587 96.1117 62.288 96.773 62.672C97.4344 63.056 98.3837 63.248 99.621 63.248C100.368 63.248 101.082 63.184 101.765 63.056C102.469 62.9067 103.088 62.6827 103.621 62.384L102.981 63.632C102.896 63.376 102.821 63.12 102.757 62.864C102.693 62.608 102.64 62.3413 102.597 62.064C102.576 61.7867 102.554 61.4773 102.533 61.136C102.533 60.7733 102.533 60.336 102.533 59.824V55.44C102.533 54.352 102.362 53.5307 102.021 52.976C101.68 52.4213 101.178 52.0587 100.517 51.888C99.8557 51.696 99.0344 51.6 98.053 51.6C97.157 51.6 96.293 51.696 95.461 51.888C94.629 52.0587 93.957 52.2613 93.445 52.496H93.125V48.944C93.893 48.6667 94.757 48.464 95.717 48.336C96.677 48.1867 97.637 48.112 98.597 48.112C99.7917 48.112 100.89 48.2187 101.893 48.432C102.917 48.6453 103.802 49.0187 104.549 49.552C105.296 50.0853 105.872 50.8427 106.277 51.824C106.704 52.784 106.917 54.032 106.917 55.568V59.6C106.917 60.048 106.917 60.6133 106.917 61.296C106.938 61.9573 106.97 62.608 107.013 63.248C107.056 63.888 107.12 64.4 107.205 64.784L107.109 65.04C106.384 65.3173 105.594 65.5627 104.741 65.776C103.909 65.968 103.056 66.1173 102.181 66.224C101.306 66.3307 100.474 66.384 99.685 66.384ZM110.938 61.584H111.194C111.962 61.904 112.858 62.1813 113.882 62.416C114.927 62.6507 115.973 62.768 117.018 62.768C117.381 62.768 117.775 62.7573 118.202 62.736C118.629 62.6933 119.023 62.6187 119.386 62.512C119.77 62.4053 120.079 62.2133 120.314 61.936C120.57 61.6587 120.698 61.2853 120.698 60.816C120.698 60.2187 120.453 59.8027 119.962 59.568C119.471 59.3333 118.714 59.1307 117.69 58.96L116.186 58.704C114.479 58.4053 113.167 57.8933 112.25 57.168C111.333 56.4213 110.874 55.3227 110.874 53.872C110.874 52.8267 111.151 51.8773 111.706 51.024C112.282 50.1707 113.167 49.4987 114.362 49.008C115.578 48.496 117.167 48.24 119.13 48.24C120.047 48.24 120.89 48.304 121.658 48.432C122.447 48.5387 123.194 48.6987 123.898 48.912V52.592H123.642C122.831 52.272 122.053 52.048 121.306 51.92C120.559 51.792 119.791 51.728 119.002 51.728C117.807 51.728 116.869 51.8773 116.186 52.176C115.525 52.4533 115.194 52.9547 115.194 53.68C115.194 54.2347 115.439 54.6293 115.93 54.864C116.442 55.0987 117.178 55.3013 118.138 55.472L119.61 55.728C120.613 55.8773 121.519 56.144 122.33 56.528C123.162 56.912 123.823 57.4453 124.314 58.128C124.805 58.7893 125.05 59.6427 125.05 60.688C125.05 62.544 124.357 63.9413 122.97 64.88C121.605 65.7973 119.535 66.256 116.762 66.256C115.738 66.256 114.714 66.1707 113.69 66C112.666 65.8293 111.749 65.616 110.938 65.36V61.584ZM128.869 66V54.832C128.869 54.4053 128.858 53.8613 128.837 53.2C128.816 52.5173 128.784 51.856 128.741 51.216C128.72 50.5547 128.656 50.032 128.549 49.648L128.645 49.392C129.242 49.1787 129.936 48.9867 130.725 48.816C131.536 48.6453 132.378 48.5173 133.253 48.432C134.149 48.3253 135.045 48.272 135.941 48.272C136.325 48.272 136.741 48.2827 137.189 48.304C137.637 48.3253 138.085 48.368 138.533 48.432V52.08H138.245C137.925 51.9947 137.562 51.9413 137.157 51.92C136.752 51.8773 136.357 51.856 135.973 51.856C135.29 51.856 134.618 51.9093 133.957 52.016C133.296 52.1227 132.73 52.2507 132.261 52.4L132.933 51.376C133.21 51.952 133.349 52.944 133.349 54.352V66H128.869Z"
            fill="#1DA599"
          />
        </svg>
        <ul className="flex gap-[44px] font-[600] text-[20px] text-[#525252]">
          <li className="text-[#FFC265] font-semibold cursor-pointer">
            Home
          </li>
          <li className="hover:text-[#FFC265] cursor-pointer">
            <Link
              to="hero1"
              smooth={true}
              spy={true}
              offset={640}
              duration={500}
            >
             About Us
            </Link>
          </li>
          <li className="hover:text-[#FFC265]">Package</li>
          <li className="hover:text-[#FFC265]">Facilities</li>
          <li className="hover:text-[#FFC265]">Gallery</li>
        </ul>
        <button className="bg-[#FFC265] py-[20px] px-[48px] rounded-[10px] font-semibold text-[20px] hover:bg-[#d6983b] hover:text-white">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;
