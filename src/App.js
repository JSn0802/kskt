import "bootstrap/dist/css/bootstrap.min.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import BuyTogether from "./pages/BuyTogether";
import Farmer from "./pages/Farmer";
import Farmers from "./pages/Farmers";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import LogReg from "./pages/LogReg";
import PhoneSignUp from "./pages/PhoneSignUp";
import Product from "./pages/Product";
import Track from "./pages/Track";

function App() {
  const [loggedin, setloggedin] = useState({
    isloggedin: false,
    user: null,
  });

  return (
    <div className="App">
      <div className="logoimg">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          style={{ width: "12rem", height: "6rem" }}
        />
      </div>
      <Navbar loggedin={loggedin} setloggedin={setloggedin}></Navbar>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product/:name" element={<Product />}></Route>
          <Route path="/farmers" element={<Farmers />}></Route>
          <Route
            path="/signup"
            element={<LogReg loggedin={loggedin} setloggedin={setloggedin} />}
          ></Route>
          <Route path="/farmer/:name" element={<Farmer />}></Route>
          {/* <Route path="/signup" element={<Signup />}></Route> */}
          <Route path="/buyTogether" element={<BuyTogether loggedin={loggedin} setLoggedIn={setloggedin} />}></Route>
          <Route
            path="/login"
            element={
              <PhoneSignUp loggedin={loggedin} setloggedin={setloggedin} />
            }
          ></Route>
          <Route
            path="/panorama"
            element={<Home2 loggedin={loggedin} />}
          ></Route>
          <Route path="/track" element={<Track loggedin={loggedin} />}></Route>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
