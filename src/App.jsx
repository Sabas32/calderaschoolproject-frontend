import Forms from "./pages/form";
import "./css/App.css";
import "./css/forms.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/contactUs";
import Footer from "./Components/footer";
import AboutUs from "./pages/aboutus";
import "./css/animations.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-login" element={<Forms />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
