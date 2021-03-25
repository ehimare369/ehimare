import { Link } from "react-router-dom";
import "./Aside.scss";
// Import Components
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
// Import Nav Links and Follow Data
import { navLinks } from "../../data/links";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Aside = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleToggle = () => {
    setIsOpened(!isOpened);
  };
  return (
    <>
      <button className="drawer" onClick={handleToggle}>
        {isOpened ? <FaTimes /> : <FaBars />}
      </button>
      <aside className={`Aside ${isOpened ? " Opened" : ""}`}>
        <Profile />
        <nav>
          {navLinks.map((link) => {
            const { icon, label, url } = link;
            return (
              <Link className="link" key={url} to={url}>
                {icon} <span>{label}</span>
              </Link>
            );
          })}
        </nav>
        <Footer />
      </aside>
    </>
  );
};

export default Aside;
