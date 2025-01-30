const Card = ({ title, value }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg text-center">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default Card;
