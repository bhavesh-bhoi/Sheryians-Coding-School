const Card = (props) => {
  return (
    <div
      key={props.index}
      className="w-[20vw] h-fit bg-white p-5 rounded-xl flex items-center flex-col text-justify"
    >
      <img
        className="h-30 w-30 rounded-full object-center object-cover"
        src={props.elem.userImageURL}
        alt="USer Image"
      />
      <h1 className="text-xl font-bold mt-4 text-black">
        {props.elem.userName}
      </h1>
      <h4 className="text-base text-emerald-500 font-semibold my-3">
        {props.elem.userRole}
      </h4>
      <p className="text-small font-medium text-gray-800">
        {props.elem.userDescription}
      </p>
      <button
        onClick={() => {
          // card wala index pass kiya hai
          props.deleteHandler(props.index);
        }}
        className="px-4 py-2 bg-red-500 mt-3 cursor-pointer font-semibold active:scale-95 rounded-md"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
