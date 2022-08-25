import React, { useState } from "react";
import "./Header.css";
import Logo from "../../../assets/logo.png";
import Bars from "../../../assets/bars.png";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;

  const [menuOpened, setMenuOpened] = useState(false);

  const links = [
    { name: "Home", link: "home" },
    { name: "Programs", link: "programs" },
    { name: "Why Us", link: "whyUs" },
    { name: "Plans", link: "plans" },
    { name: "Testimonials", link: "testimonials" },
  ];

  return (
    <div className="header" id="home">
      <img src={Logo} alt="" srcset="" className="logo" />
      {!menuOpened && mobile ? (
        <div
          style={{
            backgroundColor: "grey",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          {links.map(({ name, link }) => (
            <li>
              <Link
                key={link}
                onClick={() => setMenuOpened(false)}
                to={link}
                spy={true}
                smooth={true}
              >
                {" "}
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
