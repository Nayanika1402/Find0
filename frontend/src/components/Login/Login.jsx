import "./Login.css";
import { useState } from "react";
import axios from "axios";
const Login = () => {
   const [lformData, setLFormData] = useState({
     email: "",
     password: "",
   });

   const handleInputChangeLogin = (event) => {
     const { name, value } = event.target;
     setLFormData({
       ...lformData,
       [name]: value,
     });
   };


       const login = async (e) => {
         e.preventDefault();

         try {
           await axios.post(`http://localhost:8080/api/login`, lformData, {
             withCredentials: true,
           });
           window.alert("Register");
           //  toast.success("Register Done,You Can Login Now!");
           setLFormData({
             ...lformData,
             email: "",
             password: ""
           });
         } catch (error) {
           window.alert("Error");
           console.log(error);
           //  toast.error("Register Failed!");
         }
       };





  return (
    <section>
      <div className="loginTextContainer">
        <h1 className="loginText">
          Login <span>Here</span>
        </h1>
        <p className="welcomeText">
          Welcome Back In
          <span className="black">
            Find <span className="red">O</span>
          </span>
        </p>
      </div>
      <div className="loginOuterContainer">
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzZrbms0MTR0ZGtpaWZoMGZzaGk3eHdhcTNyZms3NDVmb2Zsd2o1eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/IauL6LvGNlT3ffhcqq/giphy.gif"
          alt=""
        />
        <div className="loginContent">
          <form className="loginForm">
            <div className="loginInputs">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email..."
                value={lformData.email}
                onChange={handleInputChangeLogin}
                name="email"
              />
            </div>
            <div className="loginInputs">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password..."
                value={lformData.password}
                onChange={handleInputChangeLogin}
                name="password"
              />
            </div>
            <div className="loginButtonContainer">
              <button className="loginButton" onClick={login}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
