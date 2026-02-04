const Cards = ({ cardName }) => {
  return (
      <div className="w-40 h-40 bg-red-500 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold">
        {cardName}
      </div>
  );
};

export default Cards;
