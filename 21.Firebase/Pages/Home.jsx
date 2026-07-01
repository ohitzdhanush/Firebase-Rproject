import React from "react";
import { auth } from "../Firebase.js";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Home() {
const navigate = useNavigate();

const logout = async () => {
try {
await signOut(auth);

  localStorage.removeItem(
    "accessToken"
  );

  alert("Logout Successful");

  navigate("/");
} catch (error) {
  alert(error.message);
}


};

return ( <div className="home"> <h1>Welcome To Home Page</h1>
<h2> You Are SuccessFully Done FireBase </h2>


  <button onClick={logout}>
    Logout
  </button>
</div>


);
}

export default Home;
