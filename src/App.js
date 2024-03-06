import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

import Navbar from "./components/layout/Navbar";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Container customClass="min-height">
              <Home />
            </Container>
          }
        />
        <Route
          exact
          path="/projects"
          element={
            <Container customClass="min-height">
              <Projects />
            </Container>
          }
        />
        <Route
          exact
          path="/company"
          element={
            <Container customClass="min-height">
              <Company />
            </Container>
          }
        />
        <Route
          exact
          path="/contact"
          element={
            <Container customClass="min-height">
              <Contact />
            </Container>
          }
        />
        <Route
          exact
          path="/newproject"
          element={
            <Container customClass="min-height">
              <NewProject />
            </Container>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
