import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeeUps";
import NewMeetUpPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation/>
    <Routes>
      <Route path="/" element={<AllMeetupsPage />}></Route>
      <Route path="/NewMeetUpPage" element={<NewMeetUpPage />}></Route>
      <Route path="/FavoritesPage" element={<FavoritesPage />}></Route>
    </Routes>
    </div>
  );
}

export default App;
