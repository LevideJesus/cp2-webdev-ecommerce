import { Link } from "react-router-dom";

export default function CardProducts({ title, price, image, rating, id }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <img src={image} alt={title} className="w-32 h-32 object-contain mb-2 cursor-pointer" onClick={() => window.location.href = `/produto/${id}`} />
      <h3 className="font-semibold text-lg mb-1 text-center">{title}</h3>
      <p className="text-yellow-700 font-bold mb-1">R$ {price}</p>
      <div className="flex items-center gap-1">
        <span>⭐</span>
        <span className="text-sm">{rating}</span>
      </div>
    </div>
  );
}