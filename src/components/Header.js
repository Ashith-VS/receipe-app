import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
      <header>
        <div className="logo">
          <h3>
            <Link to="/" >Tasty Food</Link>
          </h3>
        </div>
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/special">Special</NavLink>
              <NavLink to="/checkout">CheckOut</NavLink>
            </nav>
      </header>
  );
};

export default Header;
