import './App.css';
import {
    BrowserRouter,
    Routes,
    Route, NavLink,
} from "react-router-dom";

import * as PropTypes from "prop-types";
import Kanye from "./pages/Kanye";



Routes.propTypes = {children: PropTypes.node};

function App() {
  return (
      <BrowserRouter>
          <div className={"header"}>
              <NavLink to={"/"}>Kanye</NavLink>
              <NavLink to={"about"}>About</NavLink>
          </div>
        <Routes>
          <Route path={"/"} element={<Kanye />} />
          <Route path={"/about"} element={<p>About</p>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
