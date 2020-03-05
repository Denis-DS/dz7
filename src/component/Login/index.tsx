import React from "react";
import history from "../../history";
import style from "./index.module.scss";

const Login = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const loginForm = (e: React.FormEvent<HTMLFormElement>) => {
    if (login === "admin" && password === "1234") {
      console.log("Success Login");
      localStorage.setItem("isLoggedIn", "true");
      setTimeout(() => history.replace("/users"), 100);
    } else {
      alert("Error");
    }
    e.preventDefault();
  };

  const inputWithForm = [
    {
      type: "text",
      placeholder: "Login",
      value: login,
      onChange: setLogin,
      key: "login"
    },
    {
      type: "password",
      placeholder: "Password",
      value: password,
      onChange: setPassword,
      key: "password"
    }
  ];

  return (
    <form className={style.Form} onSubmit={loginForm}>
      {inputWithForm.map(e => (
        <input
          key={e.key}
          type={e.type}
          placeholder={e.placeholder}
          value={e.value}
          onChange={elem => e.onChange(elem.target.value)}
        />
      ))}
      <button type="submit">Login</button>
    </form>
  );
};

export default React.memo(Login);
