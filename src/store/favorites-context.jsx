import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorities: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  const [userfavorites, setUserFavorites] = useState([]);

  const context = {
    favorites: userfavorites,
    totalFavorites: userfavorites.length,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}
