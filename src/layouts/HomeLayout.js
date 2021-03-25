import { BrowserRouter as Router } from "react-router-dom";
import Aside from "../components/Aside/Aside";

import "./HomeLayout.scss";

const HomeLayout = () => {
  return (
    <div className="HomeLayout">
      <Router>
        <Aside />
      </Router>

      <h1>HomeLayout1</h1>
    </div>
  );
};

export default HomeLayout;
