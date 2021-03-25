import { useState } from "react";
import { Link } from "react-router-dom";
import "./Aside.scss";
// Import Components
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
// Import Nav Links and Follow Data
import { navLinks } from "../../data/links";

const Aside = () => {
  return (
    <section className="Aside">
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
    </section>
  );
};

export default Aside;
