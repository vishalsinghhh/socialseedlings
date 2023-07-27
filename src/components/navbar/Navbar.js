import React from "react";
import Image from "next/image";
import logo from "../../images/logo.svg";
import "../components.css";

const Navbar = () => {
  return (
    <div>
      <div className="logoMain">
        <Image src={logo} alt="logo" />
        <div>SocialSeedlings</div>
        <div className="midTagLine">Fostering Societal Change</div>
        <div className="endTagLine">Eat. Socialize. Sleep <br/>xRepeat</div>
      </div>
    </div>
  );
};

export default Navbar;
