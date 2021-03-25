import "./Profile.scss";
import image from "./ehimare.jpg";
import { followLinks } from "../../data/links";

const Profile = () => {
  return (
    <section className="Profile">
      <img src={image} alt="ehimare" />
      <div className="follow">
        {followLinks.map((link) => {
          const { label, icon, url } = link;
          return (
            <a key={label} href="{url}">
              {icon}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Profile;
