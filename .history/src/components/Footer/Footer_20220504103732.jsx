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
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        go home
      </button>
      <p> © {date} Wolzon! All rights reserved!</p>
    </div>
  );
}

export default Footer;
