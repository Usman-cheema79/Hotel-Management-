import React, { useState } from "react";
import addres from "../../assets/pics/addres.svg";
import addyourleam from "../../assets/pics/addyourleam.svg";
import venuedetail from "../../assets/pics/venuedetail.svg";
import Popup from "./Popup";
import { Link, useNavigate } from "react-router-dom";
export default function DashboardBody(props) {
  const [HotelProfileInprogress, setHotelProfileInprogress] = useState(true);
  const [HotelProfileICompleted, setHotelProfileICompleted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handlegetstarted = () => {
    if (HotelProfileInprogress) {
      //  navigate('/hostelListingForm');
      setHotelProfileInprogress(false);
    } else {
      navigate("/hostel-Listing-Form");
      setHotelProfileInprogress(true);
      setHotelProfileICompleted(true);
    }
  };
  const setupProfileStyle =
    !HotelProfileInprogress && !HotelProfileICompleted
      ? { backgroundColor: "#FFF6E6", border: "1px solid #FFDC99" }
      : HotelProfileICompleted
        ? { backgroundColor: "#d0e8e8", border: "1px solid #27C2B0" }
        : { backgroundColor: "white" };
  const svgFillColor = HotelProfileICompleted
    ? "#27C2B0"
    : !HotelProfileInprogress
      ? "#F5B948"
      : "#FFF5F5";
  const svgStrokeColor =
    HotelProfileICompleted || !HotelProfileInprogress ? "white" : "#FE4747";

  const { handleVenues } = props;
  return (
    <>
      <main className="pt-6">
        <div className="text-center flex flex-col items-center justify-center w-full">
          <h1 className="text-3xl font-bold mb-4">Welcome to Findmyvenue</h1>
          <p className="text-gray-600 mb-8">
            Let's get started on creating your profile.
          </p>
          <div className="grid lg:w-4/5 w-full px-5 grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5  justify-center">
            {handleVenues === "dashboard" ? (
              <div
                style={setupProfileStyle}
                className="p-3 w-full rounded-lg shadow-md"
              >
                <svg
                  width="208"
                  height="73"
                  viewBox="0 0 208 73"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="0.262695"
                    width="72"
                    height="72"
                    rx="8"
                    fill={svgFillColor}
                  />

                  <g clip-path="url(#clip0_96_25764)">
                    <path
                      d="M21.0996 50.4032V26.3398H26.573"
                      stroke={svgStrokeColor}
                      stroke-width="2.34368"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M50.922 50.4032V26.3398H45.4531"
                      stroke={svgStrokeColor}
                      stroke-width="2.34368"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M36.0645 31.2617V34.6212"
                      stroke={svgStrokeColor}
                      stroke-width="2.34368"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M31.248 31.2617V34.6212"
                      stroke={svgStrokeColor}
                      stroke-width="2.34368"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M36.0645 25.5586V28.918"
                      stroke={svgStrokeColor}
                      stroke-width="2.34368"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M40.752 31.2617V34.6212"
                      stroke={svgStrokeColor}
                      stroke-width="2.34368"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M40.752 25.5586V28.918"
                      stroke={svgStrokeColor}
                      stroke-width="2.34368"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M31.248 25.5586V28.918"
                      stroke={svgStrokeColor}
                      stroke-width="2.34368"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M36.0645 36.9648V40.3244"
                      stroke={svgStrokeColor}
                      stroke-width="2.34368"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M31.248 36.9648V40.3244"
                      stroke={svgStrokeColor}
                      stroke-width="2.34368"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M40.752 36.9648V40.3244"
                      stroke={svgStrokeColor}
                      stroke-width="2.34368"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M33.6055 50.4028V46.8184C33.6055 45.4883 34.6837 44.4102 36.0138 44.4102C37.3439 44.4102 38.422 45.4884 38.422 46.8184V50.4028"
                      stroke={svgStrokeColor}
                      stroke-width="2.34368"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M54.8282 50.4033H17.1719V55.091H54.8282V50.4033Z"
                      stroke={svgStrokeColor}
                      stroke-width="2.34368"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M40.766 21.652V17.4355H31.2617V21.652"
                      stroke={svgStrokeColor}
                      stroke-width="2.34368"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M26.5723 50.4033V21.6523H45.4519V50.4033"
                      stroke={svgStrokeColor}
                      stroke-width="2.34368"
                      stroke-miterlimit="10"
                    />
                  </g>
                  <g opacity="0.5">
                    <mask
                      id="path-17-outside-1_96_25764"
                      maskUnits="userSpaceOnUse"
                      x="163"
                      y="19.7627"
                      width="44"
                      height="32"
                      fill="black"
                    >
                      <rect
                        fill="white"
                        x="163"
                        y="19.7627"
                        width="44"
                        height="32"
                      />
                      <path d="M176.402 50.2027C174.136 50.2027 172.082 49.5894 170.242 48.3627C168.402 47.136 166.949 45.4294 165.882 43.2427C164.842 41.0294 164.322 38.4827 164.322 35.6027C164.322 32.696 164.842 30.1627 165.882 28.0027C166.922 25.816 168.349 24.1227 170.162 22.9227C171.976 21.696 174.029 21.0827 176.322 21.0827C178.642 21.0827 180.709 21.696 182.522 22.9227C184.336 24.1227 185.762 25.816 186.802 28.0027C187.869 30.1894 188.402 32.736 188.402 35.6427C188.402 38.5494 187.869 41.096 186.802 43.2827C185.762 45.4694 184.336 47.176 182.522 48.4027C180.736 49.6027 178.696 50.2027 176.402 50.2027ZM176.362 44.6427C177.536 44.6427 178.549 44.3094 179.402 43.6427C180.256 42.9494 180.909 41.936 181.362 40.6027C181.842 39.2427 182.082 37.5894 182.082 35.6427C182.082 33.6694 181.842 32.016 181.362 30.6827C180.909 29.3494 180.256 28.3494 179.402 27.6827C178.549 26.9894 177.522 26.6427 176.322 26.6427C175.176 26.6427 174.162 26.976 173.282 27.6427C172.429 28.3094 171.776 29.3094 171.322 30.6427C170.869 31.976 170.642 33.6294 170.642 35.6027C170.642 37.576 170.869 39.2294 171.322 40.5627C171.776 41.896 172.429 42.9094 173.282 43.6027C174.162 44.296 175.189 44.6427 176.362 44.6427ZM199.123 49.7627V21.5227H205.363V49.7627H199.123ZM193.683 26.8427V21.5227H204.963V26.8427H193.683Z" />
                    </mask>
                    <path
                      d="M170.242 48.3627L169.687 49.1947L170.242 48.3627ZM165.882 43.2427L164.977 43.668L164.98 43.6746L164.983 43.6811L165.882 43.2427ZM165.882 28.0027L166.783 28.4365L166.785 28.4322L165.882 28.0027ZM170.162 22.9227L170.714 23.7567L170.722 23.751L170.162 22.9227ZM182.522 22.9227L181.962 23.751L181.97 23.7566L182.522 22.9227ZM186.802 28.0027L185.899 28.4322L185.903 28.4411L186.802 28.0027ZM186.802 43.2827L185.903 42.8442L185.899 42.8532L186.802 43.2827ZM182.522 48.4027L183.08 49.2328L183.082 49.231L182.522 48.4027ZM179.402 43.6427L180.018 44.4307L180.025 44.4248L180.033 44.4188L179.402 43.6427ZM181.362 40.6027L180.419 40.2699L180.415 40.2808L181.362 40.6027ZM181.362 30.6827L180.415 31.0046L180.418 31.013L180.421 31.0214L181.362 30.6827ZM179.402 27.6827L178.772 28.4588L178.779 28.4648L178.787 28.4707L179.402 27.6827ZM173.282 27.6427L172.678 26.8456L172.672 26.8501L172.667 26.8547L173.282 27.6427ZM171.322 30.6427L172.269 30.9646L171.322 30.6427ZM171.322 40.5627L172.269 40.2408L171.322 40.5627ZM173.282 43.6027L172.652 44.3788L172.657 44.3835L172.663 44.3882L173.282 43.6027ZM176.402 49.2027C174.328 49.2027 172.468 48.6449 170.797 47.5306L169.687 49.1947C171.696 50.5338 173.943 51.2027 176.402 51.2027V49.2027ZM170.797 47.5306C169.119 46.412 167.778 44.848 166.781 42.8043L164.983 43.6811C166.12 46.0108 167.685 47.86 169.687 49.1947L170.797 47.5306ZM166.787 42.8174C165.82 40.7587 165.322 38.3616 165.322 35.6027H163.322C163.322 38.6038 163.864 41.3 164.977 43.668L166.787 42.8174ZM165.322 35.6027C165.322 32.8148 165.821 30.4355 166.783 28.4365L164.981 27.5689C163.864 29.8899 163.322 32.5772 163.322 35.6027H165.322ZM166.785 28.4322C167.756 26.3906 169.069 24.8452 170.714 23.7566L169.61 22.0888C167.629 23.4002 166.088 25.2415 164.979 27.5732L166.785 28.4322ZM170.722 23.751C172.362 22.6417 174.219 22.0827 176.322 22.0827V20.0827C173.839 20.0827 171.589 20.7503 169.602 22.0944L170.722 23.751ZM176.322 22.0827C178.455 22.0827 180.324 22.6431 181.962 23.751L183.082 22.0944C181.094 20.749 178.829 20.0827 176.322 20.0827V22.0827ZM181.97 23.7566C183.615 24.8452 184.928 26.3906 185.899 28.4322L187.705 27.5732C186.596 25.2415 185.056 23.4002 183.074 22.0888L181.97 23.7566ZM185.903 28.4411C186.892 30.4672 187.402 32.8587 187.402 35.6427H189.402C189.402 32.6134 188.846 29.9116 187.701 27.5643L185.903 28.4411ZM187.402 35.6427C187.402 38.4267 186.892 40.8182 185.903 42.8443L187.701 43.7211C188.846 41.3738 189.402 38.672 189.402 35.6427H187.402ZM185.899 42.8532C184.927 44.8963 183.612 46.4581 181.962 47.5744L183.082 49.231C185.059 47.894 186.597 46.0424 187.705 43.7122L185.899 42.8532ZM181.965 47.5726C180.354 48.6544 178.511 49.2027 176.402 49.2027V51.2027C178.88 51.2027 181.117 50.551 183.08 49.2328L181.965 47.5726ZM176.362 45.6427C177.739 45.6427 178.974 45.2465 180.018 44.4307L178.787 42.8547C178.124 43.3722 177.332 43.6427 176.362 43.6427V45.6427ZM180.033 44.4188C181.068 43.5777 181.812 42.3867 182.309 40.9246L180.415 40.2808C180.006 41.4854 179.443 42.321 178.772 42.8666L180.033 44.4188ZM182.305 40.9355C182.834 39.4385 183.082 37.6657 183.082 35.6427H181.082C181.082 37.513 180.851 39.0469 180.419 40.2699L182.305 40.9355ZM183.082 35.6427C183.082 33.5958 182.834 31.8194 182.303 30.344L180.421 31.0214C180.85 32.2126 181.082 33.7429 181.082 35.6427H183.082ZM182.309 30.3608C181.812 28.8978 181.064 27.7124 180.018 26.8947L178.787 28.4707C179.447 28.9864 180.006 29.8009 180.415 31.0046L182.309 30.3608ZM180.033 26.9066C178.985 26.0549 177.729 25.6427 176.322 25.6427V27.6427C177.315 27.6427 178.113 27.9238 178.772 28.4588L180.033 26.9066ZM176.322 25.6427C174.967 25.6427 173.739 26.0419 172.678 26.8456L173.886 28.4398C174.585 27.9101 175.385 27.6427 176.322 27.6427V25.6427ZM172.667 26.8547C171.62 27.6724 170.873 28.8578 170.375 30.3208L172.269 30.9646C172.678 29.7609 173.238 28.9464 173.898 28.4307L172.667 26.8547ZM170.375 30.3208C169.876 31.7902 169.642 33.5603 169.642 35.6027H171.642C171.642 33.6984 171.862 32.1619 172.269 30.9646L170.375 30.3208ZM169.642 35.6027C169.642 37.6451 169.876 39.4152 170.375 40.8846L172.269 40.2408C171.862 39.0435 171.642 37.507 171.642 35.6027H169.642ZM170.375 40.8846C170.873 42.3466 171.616 43.5377 172.652 44.3788L173.913 42.8266C173.241 42.281 172.679 41.4454 172.269 40.2408L170.375 40.8846ZM172.663 44.3882C173.728 45.2274 174.976 45.6427 176.362 45.6427V43.6427C175.402 43.6427 174.596 43.3647 173.901 42.8172L172.663 44.3882ZM199.123 49.7627H198.123V50.7627H199.123V49.7627ZM199.123 21.5227V20.5227H198.123V21.5227H199.123ZM205.363 21.5227H206.363V20.5227H205.363V21.5227ZM205.363 49.7627V50.7627H206.363V49.7627H205.363ZM193.683 26.8427H192.683V27.8427H193.683V26.8427ZM193.683 21.5227V20.5227H192.683V21.5227H193.683ZM204.963 21.5227H205.963V20.5227H204.963V21.5227ZM204.963 26.8427V27.8427H205.963V26.8427H204.963ZM200.123 49.7627V21.5227H198.123V49.7627H200.123ZM199.123 22.5227H205.363V20.5227H199.123V22.5227ZM204.363 21.5227V49.7627H206.363V21.5227H204.363ZM205.363 48.7627H199.123V50.7627H205.363V48.7627ZM194.683 26.8427V21.5227H192.683V26.8427H194.683ZM193.683 22.5227H204.963V20.5227H193.683V22.5227ZM203.963 21.5227V26.8427H205.963V21.5227H203.963ZM204.963 25.8427H193.683V27.8427H204.963V25.8427Z"
                      fill="#717171"
                      mask="url(#path-17-outside-1_96_25764)"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_96_25764">
                      <rect
                        width="40"
                        height="40"
                        fill="white"
                        transform="translate(16 16.2627)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <Link
                  to="/hostel-Listing-Form"
                  className="text-xl block lg:mt-14 lg:mb-6 font-bold mb-2"
                >
                  Setup Hotel Profile
                </Link>
                {!HotelProfileInprogress && !HotelProfileICompleted && (
                  <h6 style={{ marginTop: "-23px" }}>In progress</h6>
                )}
                {HotelProfileICompleted && (
                  <h6 style={{ marginTop: "-23px" }}>Completed</h6>
                )}
              </div>
            ) : (
              <></>
            )}
            <div className="bg-white p-3 rounded-lg w-full shadow-md">
              <img src={venuedetail} alt="" />
              <Link to='/venu-Listing-Form' className="text-xl block lg:mt-14 lg:mb-6  font-bold mb-2">
                Add Venue Details
              </Link>
            </div>
            {handleVenues === "kids&Single-venues" ? (
              <></>
            ) : (
              <div className="bg-white p-3 rounded-lg shadow-md">
                <img src={addres} alt="" />
                <h2 className="text-xl lg:mt-14 lg:mb-6  font-bold mb-2">
                  Add Restaurants
                </h2>
                <p className="text-sm text-gray-600">(if applicable)</p>
              </div>
            )}
            <div className="bg-white p-3 w-full rounded-lg shadow-md">
              <img src={addyourleam} alt="" />
              <h2 className="text-xl lg:mt-14 lg:mb-6 font-bold mb-2">
                Add Your Team
              </h2>
            </div>
          </div>
          <button
            style={{ width: "350px" }}
            onClick={handlegetstarted}
            className="mt-8 bg-red-500 text-white py-2 px-4 rounded"
          >
            {HotelProfileInprogress ? "Get Started" : "Continue"}
          </button>
          {/* Render PopupComponent conditionally */}
          {showPopup && <Popup onClose={togglePopup} />}
          <p
            style={{ cursor: "pointer" }}
            onClick={togglePopup}
            className="mt-4 text-black-500 underline"
          >
            Required Documents List
          </p>
        </div>
      </main>
    </>
  );
}
