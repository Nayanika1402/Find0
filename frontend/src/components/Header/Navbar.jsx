import "./Navbar.css";
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <header>
      <nav>
        <div className="brand">
          <img
            src="https://img.freepik.com/free-vector/cute-penguin-waving-hand-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-4654.jpg?w=360"
            alt="logo"
          />
          <h2>
            Find <span className="brandO">O</span>.
          </h2>
        </div>
        <ul className={active ? "navListt" : "navList"}>
          <li>
            <Link className="navLinks" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="navLinks" to={"/explore"}>
              Explore
            </Link>
          </li>
          <li>
            <Link className="navLinks" to={"/about"}>
              Resourcs
            </Link>
          </li>
          <li>
            <Link className="navLinks" to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="navLinks" to={"/register"}>
              Register
            </Link>
          </li>
          <div className="navButtonContainer">
            <button className="navButton">
              <Link className="navLinksBtn" to={"/login"}>
                Login
              </Link>
            </button>
          </div>
        </ul>
        <div className="menuButtons">
          {active ? (
            <RxCross1
              onClick={() => {
                setActive(!active);
              }}
              className="cross"
            />
          ) : (
            <CgMenuRightAlt
              onClick={() => {
                setActive(!active);
              }}
              className="menu"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
