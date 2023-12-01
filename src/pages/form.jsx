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

  // ********EVENTS INPUTS********

  // // Login form inputs
  const [usernameLogin, setuserNameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  // events
  const handleUsernameLogin = (e) => {
    setuserNameLogin(e.target.value);
  };
  const handlePasswordLogin = (e) => {
    setPasswordLogin(e.target.value);
  };
  // // end login inputs

  // // Signup form inputs
  // **TEACHER FORM EVENTS**
  const [firstnameTr, setfirstnameNameTr] = useState("");
  const [secondnameTr, setsecondnameTr] = useState("");
  const [centerNumberTr, setcenternumberTr] = useState();
  const [subjectTr, setsubjectTr] = useState("");
  const [usernameTr, setusernameTr] = useState("");
  const [emailTr, setemailTr] = useState("");
  const [passwordTr, setpasswordTr] = useState("");
  const [confirmpasswordTr, setconfirmpasswordTr] = useState("");

  // events
  const handlefirstnameTr = (e) => {
    setfirstnameNameTr(e.target.value);
  };
  const handlesecondnameTr = (e) => {
    setsecondnameTr(e.target.value);
  };
  const handlecenterNumberTr = (e) => {
    setcenternumberTr(e.target.value);
  };
  const handlesubjectTr = (e) => {
    setsubjectTr(e.target.value);
  };
  const handleusernameTr = (e) => {
    setusernameTr(e.target.value);
  };
  const handleemailTr = (e) => {
    setemailTr(e.target.value);
  };
  const handlepasswordTr = (e) => {
    setpasswordTr(e.target.value);
  };
  const handleconfirmpasswordTr = (e) => {
    setconfirmpasswordTr(e.target.value);
  };
  // **END TEACHER FORM EVENTS**
  // **STUDENT FORM EVENTS**
  const [firstnameSTd, setfirstnameNameSTd] = useState("");
  const [secondnameSTd, setsecondnameSTd] = useState("");
  const [classSTd, setclassSTd] = useState("");
  const [centerNumberSTd, setcenternumberSTd] = useState();
  const [usernameSTd, setusernameSTd] = useState("");
  const [emailSTd, setemailSTd] = useState("");
  const [passwordSTd, setpasswordSTd] = useState("");
  const [confirmpasswordSTd, setconfirmpasswordSTd] = useState("");

  // events
  const handlefirstnameSTd = (e) => {
    setfirstnameNameSTd(e.target.value);
  };
  const handlesecondnameSTd = (e) => {
    setsecondnameSTd(e.target.value);
  };
  const handleclassSTd = (e) => {
    setclassSTd(e.target.value);
  };
  const handlecenterNumberSTd = (e) => {
    setcenternumberSTd(e.target.value);
  };
  const handleusernameSTd = (e) => {
    setusernameSTd(e.target.value);
  };
  const handleemailSTd = (e) => {
    setemailSTd(e.target.value);
  };
  const handlepasswordSTd = (e) => {
    setpasswordSTd(e.target.value);
  };
  const handleconfirmpasswordSTd = (e) => {
    setconfirmpasswordSTd(e.target.value);
  };
  // **END STUDENT FORM EVENTS**
  // // end signup form inputs

  // ********END EVENTS INPUTS*********

  // Handle Submit Events
  const handlesubmitTeacher = (e) => {
    console.log({
      firstnameTr,
      secondnameTr,
      centerNumberTr,
      subjectTr,
      usernameTr,
      emailTr,
      passwordTr,
      confirmpasswordTr,
    });
  };
  const handlesubmitStudents = (e) => {
    console.log({
      firstnameSTd,
      secondnameSTd,
      classSTd,
      centerNumberSTd,
      usernameSTd,
      emailSTd,
      passwordSTd,
      confirmpasswordSTd,
    });
  };
  // end Handle Submit Events

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
                  strokeLinecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6.5 20V11H3L12 5L21 11H17.5V20H14.5V16.5C14.5 15.6716 13.8284 15 13 15H11C10.1716 15 9.5 15.6716 9.5 16.5V20H6.5Z"
                    fill="#1c57e1"
                    stroke="#1c57e1"
                    stroke-width="2"
                    strokeLinecap="round"
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
              <input
                type="text"
                onChange={handleUsernameLogin}
                name=""
                id=""
                placeholder="username"
              />
            </div>
            <div className="wrapperInput">
              <img src={padlockIm} alt="" />
              <input
                type="password"
                onChange={handlePasswordLogin}
                name=""
                id=""
                placeholder="password"
              />
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
                    <input
                      type="text"
                      onChange={handlefirstnameTr}
                      name="firstnameTr"
                      id="firstnameTr"
                      placeholder="firstname"
                    />
                  </div>

                  <div className="wrapperInput">
                    <img src={usernameim} alt="" />
                    <input
                      type="text"
                      onChange={handlesecondnameTr}
                      name="secondnameTr"
                      id="secondnameTr"
                      placeholder="secondName"
                    />
                  </div>

                  <div className="wrapperInput">
                    <img src={numberIm} alt="" />
                    <input
                      type="number"
                      name="centerNumberTr"
                      id="centerNumberTr"
                      placeholder="Center Code"
                      onChange={handlecenterNumberTr}
                    />
                  </div>
                  <select
                    onChange={handlesubjectTr}
                    className="selectSubject"
                    name="subjectTr"
                    id="subjectTr"
                  >
                    <option value="">Select subject</option>
                    <option value="Biology">Biology</option>
                    <option value="Pysics">Pysics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Math">Math</option>
                    <option value="English">English</option>
                    <option value="Literature">Literature</option>
                    <option value="ICT">ICT</option>
                    <option value="Technical Drawing">Technical Drawing</option>
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
                    <input
                      type="text"
                      onChange={handleusernameTr}
                      name="usernameTr"
                      id="usernameTr"
                      placeholder="username"
                    />
                  </div>
                  <div className="wrapperInput">
                    <img src={emailim} alt="" />
                    <input
                      type="email"
                      onChange={handleemailTr}
                      name="emailTr"
                      id="emailTr"
                      placeholder="email"
                    />
                  </div>
                  <div className="wrapperInput">
                    <img src={padlockIm} alt="" />
                    <input
                      type="password"
                      name="passwordTr"
                      id="passwordTr"
                      placeholder="password"
                      onChange={handlepasswordTr}
                    />
                  </div>
                  <div className="wrapperInput">
                    <img src={padlockIm} alt="" />
                    <input
                      type="password"
                      name="confirmpasswordTr"
                      id="confirmpasswordTr"
                      placeholder="Confirm password"
                      onChange={handleconfirmpasswordTr}
                    />
                  </div>

                  <button
                    className="btn-fill"
                    type="button"
                    onClick={() => setsecondfromOpen(false)}
                  >
                    back
                  </button>
                  <button className="btn-fill" onClick={handlesubmitTeacher}>
                    Sign up
                  </button>
                </form>
              </>
            ) : (
              <>
                {/* ***Students Signup forn*** */}
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
                    <input
                      type="text"
                      onChange={handlefirstnameSTd}
                      name="secondnameSTd"
                      id="firstnameSTd"
                      placeholder="firstname"
                    />
                  </div>
                  <div className="wrapperInput">
                    <img src={usernameim} alt="" />
                    <input
                      type="text"
                      onChange={handlesecondnameSTd}
                      name="secondnameSTd"
                      id="secondnameSTd"
                      placeholder="secondname"
                    />
                  </div>
                  <div className="wrapperInput classSelect">
                    <img src={classim} alt="" />
                    <select
                      onChange={handleclassSTd}
                      className="selectSubject"
                      name="centerNumberSTd"
                      id="classSTd"
                    >
                      <option value="0">Select Class</option>
                      <option value="1">Senior 1</option>
                      <option value="2">Senior 2</option>
                      <option value="3">Senior 3</option>
                      <option value="4">Senior 4</option>
                      <option value="5">Senior 5</option>
                      <option value="6">Senior 6</option>
                    </select>
                  </div>
                  <div className="wrapperInput">
                    <img src={numberIm} alt="" />
                    <input
                      type="number"
                      name="centerNumberSTd"
                      id="centerNumberSTd"
                      placeholder="Center Code"
                      onChange={handlecenterNumberSTd}
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
                    <input
                      type="text"
                      onChange={handleusernameSTd}
                      name="usernameSTd"
                      id="usernameSTd"
                      placeholder="username"
                    />
                  </div>
                  <div className="wrapperInput">
                    <img src={emailim} alt="" />
                    <input
                      type="email"
                      name="emailSTd"
                      id="emailSTd"
                      placeholder="email"
                      onChange={handleemailSTd}
                    />
                  </div>
                  <div className="wrapperInput">
                    <img src={padlockIm} alt="" />
                    <input
                      type="password"
                      name="passwordSTd"
                      id="passwordSTd"
                      placeholder="password"
                      onChange={handlepasswordSTd}
                    />
                  </div>
                  <div className="wrapperInput">
                    <img src={padlockIm} alt="" />
                    <input
                      type="password"
                      name="confirmpasswordSTd"
                      id="confirmpasswordSTd"
                      placeholder="Confirm password"
                      onChange={handleconfirmpasswordSTd}
                    />
                  </div>

                  <button
                    className="btn-fill"
                    type="button"
                    onClick={() => setsecondfromOpen(false)}
                  >
                    back
                  </button>
                  <button className="btn-fill" onClick={handlesubmitStudents}>
                    Sign up
                  </button>
                </form>
                {/* ***End Students Signup forn*** */}
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
