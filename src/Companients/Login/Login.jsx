import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const [Phon, setPhon] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 

    const formData = new FormData();
    formData.append("phone_number", Phon);
    formData.append("password", Password);

    const requestOptions = {
      method: "POST",
      body: formData,
      redirect: "follow",
    };

    fetch("{{SERVER_URL}}auth/signin", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.token) {
          localStorage.setItem("token", result.token);
          navigate("/brends");
        } else {


            alert("Login yoki parol noto'g'ri!");
        }
      })
      .catch((error) => console.log("Xato yuz berdi", error));
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Telefon raqami"
          value={Phon}
          onChange={(e) => setPhon(e.target.value)}
        />
        <input
          type="password"
          placeholder="Parol"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Kirish</button>
      </form>
    </div>
  );
};

export default Login;
