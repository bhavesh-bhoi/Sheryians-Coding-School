const Card = (props) => {
  return (
    <div
      key={props.index}
      className="w-70 bg-zinc-900 border border-zinc-800 p-6 rounded-2xl flex items-center flex-col text-center shadow-lg hover:shadow-emerald-500/10 transition duration-300"
    >
      <img
        className="h-28 w-28 rounded-full object-cover border-4 border-emerald-500"
        src={props.elem.userImageURL}
        alt="USer Image"
      />

      <h1 className="text-xl font-bold mt-4 text-white">
        {props.elem.userName}
      </h1>

      <h4 className="text-sm text-emerald-400 font-semibold mt-1">
        {props.elem.userRole}
      </h4>

      <p className="text-sm text-zinc-400 mt-3">{props.elem.userDescription}</p>

      <button
        onClick={() => {
          // card wala index pass kiya hai
          props.deleteHandler(props.index);
        }}
        className="mt-5 px-5 py-2 bg-red-500 hover:bg-red-600 transition rounded-lg font-semibold cursor-pointer active:scale-95"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;
