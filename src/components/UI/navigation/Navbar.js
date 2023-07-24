import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/context.js";
import MyButton from "../button/MyButton.js";

export default function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const handleLogoff = () => {
    localStorage.removeItem("auth");
    setIsAuth(false);
  };

  return (
    <div className="navBar">
      <div
        style={{ alignItems: "center" }}
        className="navBar__links"
      >
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        {isAuth && <MyButton onClick={handleLogoff}>Выйти</MyButton>}
      </div>
    </div>
  );
}
