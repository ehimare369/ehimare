import Aside from "../components/Aside/Aside";
import { BrowserRouter as Router } from "react-router-dom";

import "./HomeLayout.scss";

const HomeLayout = () => {
  return (
    <div className="HomeLayout">
      <Router>
        <Aside />
      </Router>
    </div>
  );
};

export default HomeLayout;
