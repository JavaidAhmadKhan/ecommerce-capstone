import React, { useState, useEffect } from "react";
import "./footer.styles.scss";

import { NavLink, useNavigate } from "react-router-dom";

function Footer() {
  let navigate = useNavigate();
  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <div className="footer">
      <NavLink
        to="/checkout"
        style={({ isActive }) => {
          color: isActive ? "blue" : "black";
        }}
      >
        Exchanges
      </NavLink>
      <p> © {date} Wolzon! All rights reserved!</p>
      <button
        onClick={() => {
          navigate("/shop/jackets");
        }}
      >
        Shop
      </button>
    </div>
  );
}

export default Footer;
