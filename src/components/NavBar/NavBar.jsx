import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <Link to="/">Movies List Page</Link>
      &nbsp; | &nbsp;
      {/* <Link to="/movies/:movieName">Movie Detail Page</Link> */}
      &nbsp; | &nbsp;
      <Link to="/actors">Actors List Page</Link>
    </nav>
  );
}

export default NavBar;