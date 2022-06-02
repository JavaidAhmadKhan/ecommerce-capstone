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
        style={{
          display: 'flex',
          width: "100px",
          height: "35px",
          backgroundColor: "blue",
          color: "white",
          border: "1px solid blue",
          borderRadius: "5px",
          fontSize: "15px",
          fontWeight: "bold",
        }}
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
