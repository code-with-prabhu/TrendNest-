import { useState } from "react";
import Image from "../../Components/image/Image";
import "./AuthPage.css";

const AuthPage = () => {
  const [isRegister, setRegister] = useState(false);
  const [error, setError] = useState("");
  return (
    <div className="authpage">
      <div className="authConatiner">
        <Image path="/general/logo.png" alt="" h={36} w={36}/>
        <h1>{isRegister ? "Create an account" : "Login to your account"}</h1>
        {isRegister ? (
          <form action="" key="regesterFrom">
            <div className="formElement">
              <label htmlFor="username">Username</label>
              <input
                type="username"
                placeholder="Username"
                id="username"
                name="username"
                required
              />
            </div>
            <div className="formElement">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                placeholder="Name"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="formElement">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="formElement">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                required
              />
            </div>
            <button type="submit">Submit</button>
            <p onClick={() => setRegister(false)}>
            Do you have an account <b>Login</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        ) : (
          <form action="" key="loginForm">
            <div className="formElement">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="formElement">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                required
              />
            </div>
            <button type="submit">Submit</button>
            <p onClick={() => setRegister(true)}>
              Don't have an Account? <b>Register</b>
            </p>
            {error && <p className="error">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
