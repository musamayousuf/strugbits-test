import React, { useState } from "react";
import { useDataContext } from "../context/dataContext";
import Card from "./card";
import DeleteSvg from "../assets/delete-svg";

const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];
const tabs = ["All Meals", "Week 1", "Week 2", "Week 3", "Week 4"];

function Navbar() {
  const [selected, setSelected] = useState("All Meals");
  const [showModal, setShowModal] = useState(false);

  const {
    selectedCard,
    setSelectedCard,
    recipes,
    selectedWeek,
    setSelectedWeek,
    weekCards,
    addCardToWeek,
    deleteCardFromWeek,
  } = useDataContext();

  const handleCardSelect = (id) => {
    setSelectedCard(id);
  };

  const handleAdd = () => {
    if (selectedCard && selectedWeek !== "All Meals") {
      addCardToWeek(selectedWeek, selectedCard);
      setShowModal(false);
      setSelectedCard(null);
    }
  };

  const handleSelect = (item) => {
    setSelected(item);
  };

  const handleWeekSelect = (week) => {
    setSelectedWeek(week);
  };

  const handleDelete = (week, cardId) => {
    deleteCardFromWeek(week, cardId);
  };

  return (
    <>
      <p className="font-bold text-2xl sm:text-3xl">Week Orders</p>

      <div className="px-4 sm:px-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 font-bold text-xs sm:text-sm mt-10">
        {tabs.map((item) => (
          <div
            key={item}
            className={`cursor-pointer mt-3 text-center ${
              selected === item
                ? "text-blue-950 border-b-2 border-blue-950"
                : ""
            }`}
            onClick={() => handleSelect(item)}
          >
            {item}
          </div>
        ))}

        <div className="col-span-2 sm:col-span-3 md:col-span-2 lg:col-span-1 flex justify-center items-center">
          {selectedCard ? (
            <button
              onClick={() => setShowModal(true)}
              className="cursor-pointer bg-blue-950 text-white text-center py-2 px-7 rounded-sm text-xs"
            >
              Add to Week
            </button>
          ) : (
            <button className="cursor-not-allowed bg-blue-950 text-white text-center py-2 px-7 rounded-sm text-xs">
              Add to Week
            </button>
          )}
        </div>
      </div>

      <div className="mt-6 px-4 sm:px-12">
        {selected === "All Meals" && (
          <div>
            <div className="mt-14">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((item) => (
                  <Card
                    key={item.id}
                    item={item}
                    isSelected={selectedCard === item.id}
                    onSelect={() => handleCardSelect(item.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {weeks.map(
          (week) =>
            selected === week && (
              <div key={week}>
                <p className="font-bold text-lg">{week}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  {weekCards[week].map((item) => (
                    <div key={item.id} className="relative">
                      <Card
                        item={item}
                        isSelected={selectedCard === item.id}
                        onSelect={() => handleCardSelect(item.id)}
                      />
                      <div
                        onClick={() => handleDelete(week, item.id)}
                        className="absolute top-5 left-5 bg-red-200 text-white p-1 "
                      >
                        <DeleteSvg />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full py-10 px-2">
            <div className="px-4 pt-10 mb-5">
              <h3 className="font-semibold text-center text-2xl">
                Select Week
              </h3>
            </div>
            <div className="px-5">
              <div className="grid grid-cols-4 gap-5">
                {weeks.map((week) => (
                  <div
                    key={week}
                    onClick={() => handleWeekSelect(week)}
                    className={`cursor-pointer text-center p-1 rounded-md ${
                      selectedWeek === week ? "bg-[#cafaf5]" : "bg-gray-100"
                    }`}
                  >
                    {week}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center px-4 pt-10">
              <button
                onClick={handleAdd}
                className="px-16 py-1 text-white bg-blue-900 rounded-sm"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
