import "./Login.css";
import { useState, useContext } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { GlobalContext } from '../../states/GlobalStates'
import { useNavigate } from "react-router-dom";
const Login = () => {

  const navigate = useNavigate();

  const [lformData, setLFormData] = useState({
    email: "",
    password: "",
  });

  const { dispatch } = useContext(GlobalContext);

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
      const res = await axios.post(`https://find0.onrender.com/api/login`, lformData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
      );
      dispatch({
        type: "LOGIN",
        payload: {
          userNameState: res.data.name,
        },
      });
      navigate('/');
      toast.success("Login Done!");
      setLFormData({
        ...lformData,
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Login Failed!");
    }
  };

  return (
    <section>
      <Toaster />
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
              <button className="loginButton" onClick={login}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
