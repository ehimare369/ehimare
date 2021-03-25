import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Drawer = () => {
  const [isOpened, setIsOpened] = useState(false);
  const handleToggle = () => {
    setIsOpened(!isOpened);
  };
  return (
    <button onClick={handleToggle}>
      {isOpened ? <FaTimes /> : <FaBars />}
    </button>
  );
};

export default Drawer;
