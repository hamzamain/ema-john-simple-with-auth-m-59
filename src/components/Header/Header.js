import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handlerSignOut = () => {
    logOut();
  };
  return (
    <nav className="header">
      <div className="link-container">
        <img src={logo} alt="" />
        {user?.email && <p className="user-name">{user.displayName}</p>}
      </div>{" "}
      <div className="link-container">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user?.uid ? (
          <button className="btn-logout" onClick={logOut}>
            LogOut
          </button>
        ) : (
          <>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>SignUp</Link>
          </>
        )}
        {user?.email && <img className="user-photo" src={user.photoURL} />}
      </div>
    </nav>
  );
};

export default Header;
