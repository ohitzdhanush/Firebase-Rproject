import React, { useState } from "react";
import { auth } from "../Firebase.js";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import "../Index.css";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = async (e) => {
e.preventDefault();

try {
  const userCredential =
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

  localStorage.setItem(
    "accessToken",
    userCredential.user.accessToken
  );

  alert("Login Successful");
  navigate("/home");
} catch (error) {
  alert(error.message);
}


};

return ( <div className="login-container"> <form onSubmit={handleLogin}> <h1>Login</h1>

    <input
      type="email"
      placeholder="Enter your mail ID"
      onChange={(e) =>
        setEmail(e.target.value)
      }
    />

    <input
      type="password"
      placeholder="Enter your Password"
      onChange={(e) =>
        setPassword(e.target.value)
      }
    />

    <button type="submit">
      Login
    </button>

    <p>
      Don't have an account?
      <Link to="/signup">
        Signup
      </Link>
    </p>
  </form>
</div>


);
}

export default Login;
