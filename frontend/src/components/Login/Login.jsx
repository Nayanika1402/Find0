import "./Login.css";

const Login = () => {
  return (
    <section>
      <div className="loginTextContainer">
        <h1 className="loginText">
          Login <span>Here</span>
        </h1>
        <p className="welcomeText">
          Welcome Back In{" "}
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
              />
            </div>
            <div className="loginInputs">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" 
              placeholder="Enter Your Password..."/>
            </div>
            <div className="loginButtonContainer">
              <button className="loginButton">Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
