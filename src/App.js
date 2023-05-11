import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollTop";
import { useNavigate } from "react-router-dom";

const Home = lazy(() => import("./pages/Homepage"));
const Logo = lazy(() => import("./pages/Logopage"));
const Typography = lazy(() => import("./pages/Typography"));
const Color = lazy(() => import("./pages/Color"));
const Imagery = lazy(() => import("./pages/Imagery"));
const Mockups = lazy(() => import("./pages/Mockups"));

const App = () => (
  <div>
    <Router forceRefresh={true}>
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/logo" element={<Logo />}></Route>
            <Route exact path="/typography" element={<Typography />}></Route>
            <Route exact path="/color" element={<Color />}></Route>
            <Route exact path="/photography" element={<Imagery />}></Route>
            <Route exact path="/brand-mockups" element={<Mockups />}></Route>
          </Routes>
        </ScrollToTop>
      </Suspense>
    </Router>
  </div>
);

export default App;
