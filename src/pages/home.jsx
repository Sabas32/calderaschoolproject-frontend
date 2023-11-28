import { Link } from "react-router-dom";
import NavBar from "../Components/navBar";
import homeIMAGE from "../assets/undraw_annotation_re_h774.svg";
import "../css/home.css";


const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <main>
        <div className="left fadeInDown">
          <p className="fadeIn fourth">#Get Ready to learn</p>
          <h1 className="fadeIn third">Enter the world of E-School</h1>
          <p className=" fadeIn second ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            suscipit enim quaerat vero sapiente quia est
          </p>
          <Link className="fadeIn first" target="_top" to="register-login">
            <button className="btn-fill">Get Started</button>
          </Link>
        </div>
        <div className="right fade-in">
          <img src={homeIMAGE} alt="" />
        </div>
      </main>
    </div>
  );
};

export default Home;
