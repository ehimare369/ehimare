import { BrowserRouter as Router } from "react-router-dom";
import Aside from "../../components/Aside/Aside";

import "./HomeLayout.scss";

const HomeLayout = ({ children }) => {
  return (
    <div className="HomeLayout">
      <Router>
        <Aside />
      </Router>
      {children}
    </div>
  );
};

export default HomeLayout;
