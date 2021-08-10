import React from "react";

const Footer = () => {
  return (
    <div
      className="container-fluid bg-light "
      style={{
        width: "100%",
        height: "70px",
        position: "fixed",
        bottom: 0,
        backgroundColor: "hsl(176, 82%, 81%)",
      }}
    >
      <center style={{ lineHeight: "70px", fontWeight: "bold" }}>
        Made By : Shivam Sharma
      </center>
    </div>
  );
};

export default Footer;
