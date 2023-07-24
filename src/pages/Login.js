import React, { useContext } from "react";
import MyInput from "../components/UI/input/MyInput.js";
import MyButton from "../components/UI/button/MyButton.js";
import { AuthContext } from "../context/context.js";

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    localStorage.setItem("auth", "true");
    setIsAuth(true);
  };

  return (
    <div>
      <h1>Страница логина</h1>
      <form onSubmit={login}>
        <MyInput
          type="text"
          placeholder="введите логин"
        />
        <MyInput
          type="password"
          placeholder="введите пароль"
        />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
}
