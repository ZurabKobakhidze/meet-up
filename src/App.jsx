import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeeUps";
import NewMeetUpPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}></Route>
        <Route path="/NewMeetUpPage" element={<NewMeetUpPage />}></Route>
        <Route path="/FavoritesPage" element={<FavoritesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
