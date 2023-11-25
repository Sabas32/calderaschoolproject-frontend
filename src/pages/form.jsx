import education from "../assets/undraw_education_f8ru.svg";
import onlinelearnig from "../assets/undraw_learning_re_32qv.svg";
import padlockIm from "../assets/padlock-svgrepo-com.svg";
import usernameim from "../assets/user-svgrepo-com.svg";
import homeIm from "../assets/home-1-svgrepo-com (1).svg";

import "../css/forms.css";
import { useState } from "react";

const Forms = () => {
  const [secondfromOpen, setsecondfromOpen] = useState(false);
  const [signupOpen, setsignupOpen] = useState(false);

  return (
    <div>
      <div
        className="cir"
        style={
          signupOpen === true
            ? { transform: "rotate(500deg) translate(-60%, -5%)" }
            : { transform: "translate(-50%, -50%)" }
        }
      ></div>
      <div
        className="forms"
        style={
         signupOpen === true
            ? { flexDirection: "row-reverse" }
            : { flexDirection: "row" }
        }
      >
        {/* THIS IS FOR THE RIGHT OF THE LOG IN PAGE */}

        <div
          className="rt loginformtxt"
          style={
            signupOpen === true
              ? {
                  transform: "scale(0)",
                  position: "absolute",
                  transition: "0s",
                }
              : { transform: "scale(1)", position: "relative" }
          }
        >
          <div className="info">
            <h2>New Here ?</h2>
            <p>
              "New to our learning community? Join us! Create an account to
              connect with teachers, track your child's educational journey, and
              collaborate with other parents. Let's build a stronger educational
              network together!"
            </p>
            <button className="btn homebtn" onClick={() => setsignupOpen(true)}>
              sign up
            </button>
          </div>
          <div className="img">
            <img src={education} alt="" />
          </div>
        </div>
        <div
          className="rt signupformtxt"
          style={
            signupOpen === false
              ? {
                  transform: "scale(0)",
                  position: "absolute",
                  transition: "0s",
                }
              : { transform: "scale(1)", position: "relative" }
          }
        >
          <div className="info">
            <h2>One of Us ?</h2>
            <p>
              If you have an account with the system we prefer you just login
              into you account in the system, Thank you.
            </p>
            <button className="btn" onClick={() => setsignupOpen(false)}>
              Login
            </button>
          </div>
          <div className="img">
            <img src={onlinelearnig} alt="" />
          </div>
        </div>
        {/* END  RIGHT*/}

        {/* THIS IS FOR THE LEFT OF THE LOG IN PAGE */}
        <div className="lt">
          <div
            className="btn"
            style={
              signupOpen === true
                ? { right: "auto", left: "0" }
                : { right: "0", left: "auto" }
            }
          >
            <img src={homeIm} alt="" /> Back home
          </div>

          {/*Specidies which form shows up accoding to need  */}

          <form
            className="login"
            style={
              signupOpen === true
                ? {
                    transform: "scale(0)",
                    position: "absolute",
                    transition: "0s",
                  }
                : { transform: "scale(1)", position: "relative" }
            }
          >
            <h1>Login</h1>
            <div className="wrapperInput">
              <img src={usernameim} alt="" />
              <input type="text" name="" id="" placeholder="username" />
            </div>
            <div className="wrapperInput">
              <img src={padlockIm} alt="" />
              <input type="text" name="" id="" placeholder="password" />
            </div>
            <button className="btn-fill">login</button>
          </form>

          <form
            className="signup"
            style={
              signupOpen === false
                ? {
                    transform: "scale(0)",
                    position: "absolute",
                    transition: "0s",
                  }
                : { transform: "scale(1)", position: "relative" }
            }
          >
            <h1>Sign Up</h1>

            <form
              className="firstForm"
              style={
                secondfromOpen === false
                  ? { transform: "scale(1)", position: "relative" }
                  : { transform: "scale(0)", position: "absolute" }
              }
            >
              <div className="wrapperInput">
                <img src={usernameim} alt="" />
                <input type="text" name="" id="" placeholder="firstname" />
              </div>
              <div className="wrapperInput">
                <img src={padlockIm} alt="" />
                <input type="text" name="" id="" placeholder="secondname" />
              </div>
              <div className="wrapperInput">
                <img src={padlockIm} alt="" />
                <input type="text" name="" id="" placeholder="Class" />
              </div>
              <div className="wrapperInput">
                <img src={padlockIm} alt="" />
                <input type="text" name="" id="" placeholder="Std Stream" />
              </div>
              <div className="wrapperInput">
                <img src={padlockIm} alt="" />
                <input type="text" name="" id="" placeholder="Center Number" />
              </div>
              {/* <div className="wrapperInput">
                <img src={padlockIm} alt="" />
                <input type="text" name="" id="" placeholder="Mather's Name" />
              </div> */}

              <button
                type="button"
                className="btn-fill"
                onClick={() => setsecondfromOpen(true)}
              >
                NEXT
              </button>
            </form>
            <form
              className="SecondForm"
              style={
                secondfromOpen === true
                  ? { transform: "scale(1)", position: "relative" }
                  : { transform: "scale(0)", position: "absolute" }
              }
            >
              <div className="wrapperInput">
                <img src={usernameim} alt="" />
                <input type="text" name="" id="" placeholder="username" />
              </div>
              <div className="wrapperInput">
                <img src={padlockIm} alt="" />
                <input type="text" name="" id="" placeholder="email" />
              </div>
              <div className="wrapperInput">
                <img src={padlockIm} alt="" />
                <input type="text" name="" id="" placeholder="password" />
              </div>
              <div className="wrapperInput">
                <img src={padlockIm} alt="" />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Confirm password"
                />
              </div>

              <button
                className="btn-fill"
                type="button"
                onClick={() => setsecondfromOpen(false)}
              >
                back
              </button>
              <button className="btn-fill">NEXT</button>
            </form>
          </form>

          {/* end forms */}
        </div>

        {/* END LEFT */}
      </div>
    </div>
  );
};

export default Forms;
