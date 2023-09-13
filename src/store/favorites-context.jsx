import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorities: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  const [userfavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userfavorites.some(meetup => meetup.id === meetupId);
  }

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
