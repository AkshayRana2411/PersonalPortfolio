import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
const PhoneLink = () => {
  const phoneNumber = CONTACT.phoneNo;
  const linkText = "+917454017221";

  return (
    <a
     
      href={`tel:${phoneNumber}`}
      style={{ textDecoration: "none", color: "#007bff", fontWeight: "normal" }} // Customized styles
    >
      {linkText}
    </a>
  );
};

export default PhoneLink;
