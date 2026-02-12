import React from "react";

const Card = () => {
  return (
    <div className="w-[20vw] h-fit bg-white text-white p-5 rounded-xl flex items-center flex-col text-justify">
      <img
        className="h-30 w-30 rounded-full object-center object-cover"
        src="https://images.pexels.com/photos/35884616/pexels-photo-35884616.jpeg"
        alt="USer Image"
      />
      <h1 className="text-xl font-bold mt-4 text-black">Bhavesh Bhoi</h1>
      <h4 className="text-base text-emerald-500 font-semibold my-3">
        Frontend Developer
      </h4>
      <p className="text-small font-medium text-gray-800">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, suscipit.
      </p>
      <button className="px-4 py-2 bg-red-500 mt-3 cursor-pointer font-semibold active:scale-95 rounded-md">
        Remove
      </button>
    </div>
  );
};

export default Card;
