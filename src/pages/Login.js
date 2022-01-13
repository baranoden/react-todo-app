import React from "react";
import { useState } from "react/cjs/react.development";
import account from "../account.json";
import { useNavigate } from "react-router-dom";

function Login({ auth }) {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = account.accounts.filter((e) =>
      e.name === username ? e : null
    );

    if (user[0].password === pass) {
      return navigate("todo") & auth();
    } else {
      return alert("Wrong Password");
    }
  };

  return (
    <div className="App">
      <div className="center">
        <h1> TODO !</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputbox">
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
          </div>
          <div className="inputbox">
            <input
              placeholder="Password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              required
            />
          </div>
          <button>log in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
