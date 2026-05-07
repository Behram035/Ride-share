import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "20B, Rawalpindi, islamabad",
    "21C, Rawalpindi, islamabad",
    "22D, Rawalpindi, islamabad",
    "23E, Rawalpindi, islamabad",
  ];
  return (
    <div>
      {locations.map((elem, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
          >
            <div className="flex gap-4 border-2 p-3 border-gray-50 active:border-black my-2 rounded-lg items-center justify-start">
              <h2 className="bg-[#eee] h-8 w-8 flex items-center justify-center rounded-full">
                <i className="ri-map-pin-fill"></i>
              </h2>
              <h4 className="font-medium">{elem} </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
