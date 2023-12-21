import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import IndustryKnowHow from "./pages/IndustryKnowHow";
import PastProjects from "./pages/PastProjects";
import Thoughts from "./pages/Thoughts";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

export default function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/AboutMe" element={<AboutMe />} />
    <Route path="/ContactMe" element={<ContactMe />} />
    <Route path="/IndustryKnowHow" element={<IndustryKnowHow />} />
    <Route path="/PastProjects" element={<PastProjects />} />
    <Route path="/Thoughts" element={<Thoughts />} />
    <Route path="/Signin" element={<Signin />} />
    <Route path="/Signup" element={<Signup />} />
  </Routes>
  </BrowserRouter>
  );
}
 