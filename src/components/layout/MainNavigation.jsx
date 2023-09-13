import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <div>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All meetups</Link>
          </li>
          <li>
            <Link to="/NewMeetUpPage">New Meet up Page</Link>
          </li>
          <li>
            <Link to="/FavoritesPage">Favorites Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
