import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState("All Meals");
  const [weekCards, setWeekCards] = useState({
    "Week 1": [],
    "Week 2": [],
    "Week 3": [],
    "Week 4": [],
  });

  const addCardToWeek = (week, card) => {
    setWeekCards((prevWeekCards) => ({
      ...prevWeekCards,
      [week]: [...prevWeekCards[week], card],
    }));
  };

  const deleteCardFromWeek = (week, cardId) => {
    setWeekCards((prevWeekCards) => ({
      ...prevWeekCards,
      [week]: prevWeekCards[week].filter((card) => card.id !== cardId),
    }));
  };

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes").then((res) => {
      setRecipes(res.data.recipes);
      console.log(res.data, "response");
    });
  }, []);

  return (
    <DataContext.Provider
      value={{
        data,
        recipes,
        selectedCard,
        setSelectedCard,
        selectedWeek,
        setSelectedWeek,
        weekCards,
        addCardToWeek,
        deleteCardFromWeek,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
