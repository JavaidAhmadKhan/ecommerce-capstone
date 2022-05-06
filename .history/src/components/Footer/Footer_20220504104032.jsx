import React, { useState, useEffect } from "react";
import "./footer.styles.scss";

import { useNavigate } from "react-router-dom";

function Footer() {
  let navigate = useNavigate();
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <div className="footer">
      <p> © {date} Wolzon! All rights reserved!</p>
      <button
        onClick={() => {
          navigate("/shop/jackets");
        }}
      >
        Shop
      </button>
      <NavLink
        to="/news"
        style={({ isActive }) => {
          color: isActive ? "blue" : "black";
        }}
      >
        Exchanges
      </NavLink>
    </div>
  );
}

export default Footer;