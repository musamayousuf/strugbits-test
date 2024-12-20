import React from "react";
import { useDataContext } from "../context/dataContext";

function Card({ item }) {
  const { selectedCard, setSelectedCard } = useDataContext();

  const handleSelectCard = () => {
    setSelectedCard(item);
    console.log(item, "itemms");
  };

  const isSelected = selectedCard?.id === item.id;
  return (
    <div
      className={`${
        isSelected ? "border-blue-900 border-2" : "border-gray-300 border"
      }`}
      onClick={handleSelectCard}
    >
      <div className=" cursor-pointer p-5 shadow-xl max-w-[90%] md:max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white mx-auto flex flex-col h-full">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="rounded-t-lg w-full h-auto object-cover"
            src={item.image}
            alt={item.name || "Card Image"}
          />
          <div className="absolute top-4 right-1">
            <div className="bg-black px-5 py-[0.6px]">
              <p className="text-white text-xs ">{item.mealType}</p>
            </div>
          </div>
        </div>
        <div className="p-4 md:p-6 flex-1">
          <div className="text-base">
            <p className="font-bold text-lg md:text-xl mb-2">{item.name}</p>
            <p className="text-xs text-gray-700 dark:text-gray-300 line-clamp-6 overflow-hidden h-[4.5rem] md:h-[5rem]">
              {item.instructions}
            </p>
          </div>
        </div>
        <div className="flex justify-between px-4 md:px-6 items-center">
          <div>
            <p className="font-bold text-xs md:text-sm">
              Cuisine: <span className="font-normal">{item.cuisine}</span>
            </p>
          </div>
          <div className="text-xs font-bold md:text-sm">
            Rating: <span className="font-normal">{item.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
