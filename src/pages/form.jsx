import education from "../assets/undraw_education_f8ru.svg";
import onlinelearnig from "../assets/undraw_learning_re_32qv.svg";
import padlockIm from "../assets/padlock-svgrepo-com.svg";
import usernameim from "../assets/user-svgrepo-com.svg";
import classim from "../assets/class-open-door-svgrepo-com.svg";
import numberIm from "../assets/number-phone-call-svgrepo-com.svg";
import emailim from "../assets/email-1572-svgrepo-com.svg";
import homeIm from "../assets/home-1-svgrepo-com (1).svg";

import "../css/forms.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Forms = () => {
  const [secondfromOpen, setsecondfromOpen] = useState(false);
  const [signupOpen, setsignupOpen] = useState(false);
  const [chooseType, setchooseType] = useState(false);
  const [teacher, setTeacher] = useState(false);

  // This is to toggle between the users selection on the signup button
  const handleUserSelect = () => {
    if (chooseType === false) {
      setchooseType(true);
    } else {
      setchooseType(false);
    }
  };

  // This is to handle the refresh of the login form for reset
  const handleresetInput = () => {
    setTimeout(function () {
      window.location.reload(true); // Reloads the current page from the server
    }, 2000);
  };

  return (
    <div>
      <div
        className="cir fadeIn"
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
        {/* The information part of the Login Form */}
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
          <div className="info fadeInDown">
            <h2 className="fadeIn first">New Here ?</h2>
            <p className="fadeIn second">
              "New to our learning community? Join us! Create an account to
              connect with teachers, track your child's educational journey, and
              collaborate with other parents. Let's build a stronger educational
              network together!"
            </p>

            <div className="chooseType ">
              <button
                className="btn"
                onClick={() => {
                  handleUserSelect();
                }}
              >
                sign up
              </button>
              <div
                className="choose"
                style={
                  chooseType === true
                    ? { pointerEvents: "all", opacity: "1" }
                    : { pointerEvents: "none", opacity: "0" }
                }
              >
                <p
                  onClick={() => {
                    setsignupOpen(true);
                    setTeacher(false);
                  }}
                >
                  Register as Student
                </p>
                <p
                  onClick={() => {
                    setsignupOpen(true);
                    setTeacher(true);
                  }}
                >
                  Register as Teacher
                </p>
              </div>
            </div>
          </div>
          <div className=" fadeIn fourth img">
            <img src={education} alt="" />
          </div>
        </div>
        {/* The information part of the Login Form */}

        {/* The information part of the SignUp Form */}
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
            <button
              className="btn"
              onClick={() => {
                handleresetInput();
                setsignupOpen(false);
                setTeacher(false);
                setchooseType(false);
                setsecondfromOpen(false);
              }}
            >
              Login
            </button>
          </div>
          <div className="img">
            <img src={onlinelearnig} alt="" />
          </div>
        </div>
        {/* End The information part of the SignUp Form */}

        {/* END  RIGHT*/}

        {/* THIS IS FOR THE LEFT OF THE LOG IN PAGE */}
        <div className="lt fadeIn fourth">
          <div
            style={
              signupOpen === true
                ? { right: "auto", left: "0" }
                : { right: "0", left: "auto" }
            }
          >
            <Link to="/">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#1c57e1"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6.5 20V11H3L12 5L21 11H17.5V20H14.5V16.5C14.5 15.6716 13.8284 15 13 15H11C10.1716 15 9.5 15.6716 9.5 16.5V20H6.5Z"
                    fill="#1c57e1"
                    stroke="#1c57e1"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </Link>
          </div>

          {/*Specidies which form shows up accoding to need  */}

          {/* Login Form */}
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
              <input type="password" name="" id="" placeholder="password" />
            </div>
            <button className="btn-fill">login</button>
          </form>
          {/* End Login Form */}

          {/* Signin Forms */}
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
            <h1>Sign Up {teacher === true ? "(Teacher)" : "(Student)"}</h1>

            {/* THIS IS FOR CHECK IF ONE IS A TEACHER OR A NORMAL USER*/}
            {teacher === true ? (
              <>
                <form
                  className="teacherForm firstForm"
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
                    <img src={usernameim} alt="" />
                    <input type="text" name="" id="" placeholder="secondName" />
                  </div>

                  <div className="wrapperInput">
                    <img src={numberIm} alt="" />
                    <input
                      type="number"
                      name=""
                      id=""
                      placeholder="school code"
                    />
                  </div>
                  <select className="selectSubject" name="" id="">
                    <option value="">Select subject</option>
                    <option value="">Biology</option>
                    <option value="">Pysics</option>
                    <option value="">Chemistry</option>
                    <option value="">Math</option>
                    <option value="">English</option>
                    <option value="">Literature</option>
                    <option value="">ICT</option>
                    <option value="">Technical Drawing</option>
                  </select>

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
                      ? {
                          transform: "scale(1)",
                          opacity: "1",
                          position: "relative",
                        }
                      : {
                          transform: "scale(0)",
                          opacity: "0",
                          position: "absolute",
                        }
                  }
                >
                  <div className="wrapperInput">
                    <img src={usernameim} alt="" />
                    <input type="text" name="" id="" placeholder="username" />
                  </div>
                  <div className="wrapperInput">
                    <img src={emailim} alt="" />
                    <input type="email" name="" id="" placeholder="email" />
                  </div>
                  <div className="wrapperInput">
                    <img src={padlockIm} alt="" />
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="password"
                    />
                  </div>
                  <div className="wrapperInput">
                    <img src={padlockIm} alt="" />
                    <input
                      type="password"
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
                  <button className="btn-fill">Sign up</button>
                </form>
              </>
            ) : (
              <>
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
                    <img src={usernameim} alt="" />
                    <input type="text" name="" id="" placeholder="secondname" />
                  </div>
                  <div className="wrapperInput classSelect" >
                    <img src={classim} alt="" />
                    <select className="selectSubject" name="" id="">
                      <option value="">Select Class</option>
                      <option value="">Senior 1</option>
                      <option value="">Senior 2</option>
                      <option value="">Senior 3</option>
                      <option value="">Senior 4</option>
                      <option value="">Senior 5</option>
                      <option value="">Senior 6</option>
                    </select>
                  </div>
                  <div className="wrapperInput">
                    <img src={numberIm} alt="" />
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Center Number"
                    />
                  </div>

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
                      ? {
                          transform: "scale(1)",
                          opacity: "1",
                          position: "relative",
                        }
                      : {
                          transform: "scale(0)",
                          opacity: "0",
                          position: "absolute",
                        }
                  }
                >
                  <div className="wrapperInput">
                    <img src={usernameim} alt="" />
                    <input type="text" name="" id="" placeholder="username" />
                  </div>
                  <div className="wrapperInput">
                    <img src={emailim} alt="" />
                    <input type="email" name="" id="" placeholder="email" />
                  </div>
                  <div className="wrapperInput">
                    <img src={padlockIm} alt="" />
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="password"
                    />
                  </div>
                  <div className="wrapperInput">
                    <img src={padlockIm} alt="" />
                    <input
                      type="password"
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
                  <button className="btn-fill">Sign up</button>
                </form>
              </>
            )}
            {/* END CHEAK FOR USERTYPE FORM */}
          </form>
          {/* End Signin Forms */}

          {/* end forms */}
        </div>

        {/* END LEFT */}
      </div>
    </div>
  );
};

export default Forms;
