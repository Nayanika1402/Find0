import "./Register.css";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";






const Register = () => {
  // const navigate = useNavigate();


  const [rformData, setRFormData] = useState({
    name: "",
    phone: "",
    email: "",
    collage:"",
    course:"",
    password: "",
    cpassword: "",
  });

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setRFormData({
        ...rformData,
        [name]: value,
      });
    };

     const register = async (e) => {
      e.preventDefault();

         try {
           await axios.post(
             `http://localhost:8080/api/register`,
             rformData,
             {
               withCredentials: true,
             }
           );
          //  window.alert("Register")
           toast.success("Register Done,You Can Login Now!");
           setRFormData({
             ...rformData,
             name: "",
             phone: "",
             email: "",
             password: "",
             cpassword: "",
           });
         } catch (error) {
          //  window.alert("Error");
           console.log(error);
           toast.error("Register Failed!");
         }
     };

  return (
    <section>
      <Toaster/>
      <div className="rloginTextContainer">
        <h1 className="rloginText">
          Register <span>Here</span>
        </h1>
        <p className="rwelcomeText">
          Join
          <span className="black">
            Find <span className="red">O</span>
          </span>
        </p>
      </div>
      <div className="rloginOuterContainer">
        <img
          src="https://camo.githubusercontent.com/a4c584bce1c41271485d28f92aaf9f581b3c88b68ca723b6edfd58b4ba988c2b/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313138373833362f73637265656e73686f74732f363533393432392f70726f6772616d65722e676966"
          alt=""
        />
        <div className="rloginContent">
          <form className="rloginForm">
            <div className="rloginInputs">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name..."
                value={rformData.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>
            <div className="rloginInputs">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                id="phone"
                placeholder="Enter Your Phone No..."
                value={rformData.phone}
                onChange={handleInputChange}
                name="phone"
              />
            </div>
            <div className="rloginInputs">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email..."
                value={rformData.email}
                onChange={handleInputChange}
                name="email"
              />
            </div>
            <div className="rloginInputs">
              <label htmlFor="collage">University/Collage</label>
              <input
                type="text"
                id="collage"
                placeholder="Enter Your Collage..."
                value={rformData.collage}
                onChange={handleInputChange}
                name="collage"
              />
            </div>
            <div className="rloginInputs">
              <label htmlFor="course">Course</label>
              <input
                type="text"
                id="course"
                placeholder="Enter Your Course..."
                value={rformData.course}
                onChange={handleInputChange}
                name="course"
              />
            </div>
            <div className="rloginInputs">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter Your Password..."
                value={rformData.password}
                onChange={handleInputChange}
                name="password"
              />
            </div>
            <div className="rloginInputs">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                type="password"
                id="cpassword"
                placeholder="Enter Your Confirm Password..."
                value={rformData.cpassword}
                onChange={handleInputChange}
                name="cpassword"
              />
            </div>
            <div className="rloginButtonContainer">
              <button className="rloginButton" onClick={register}>Register</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
