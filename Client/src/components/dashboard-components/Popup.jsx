import React from "react";
import "./Popup.css";
import fileloader from "../../assets/pics/Fileloader.svg";
import canel from "../../assets/pics/cancel 1.svg";
const Popup = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <img src={fileloader} alt="file loader" />
          </div>
          <div>
            <img
              style={{ cursor: "pointer" }}
              src={canel}
              alt="cancel"
              onClick={onClose}
            />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-xl mt-8 mb-2 ml-0 text-left">
            Documents to Keep In Handy!
          </h1>
          <p className="text-left">1. Trade License</p>
          <p className="text-left">2. Photos & Videosp</p>
          <p className="text-left">3. Awards</p>
          <p className="text-left">4. Alcohol License (if applicable)</p>
        </div>
        <button
          style={{ width: "300px" }}
          onClick={onClose}
          className="mt-8 bg-red-500 text-white py-2 px-4 rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Popup;
