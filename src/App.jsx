import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./assets/AboutMe";
import ContactMe from "./assets/ContactMe";
import IndustryKnowHow from "./assets/IndustryKnowHow";
import PastProjects from "./assets/PastProjects";
import Thoughts from "./assets/Thoughts";
import Signin from "./assets/Signin";
import Signup from "./assets/Signup";

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Routes path="/Home" element={<Home />} />
    <Routes path="/AboutMe" element={<AboutMe />} />
    <Routes path="/ContactMe" element={<ContactMe />} />
    <Routes path="/IndustryKnowHow" element={<IndustryKnowHow/>} />
    <Routes path="/PastProjects" element={<PastProjects/>} />
    <Routes path="/Thoughts" element={<Thoughts/>} />
    <Routes path="/Signin" element={<Signin/>} />
    <Routes path="/Signup" element={<Signup />} />
  </Routes>
  </BrowserRouter>
}
