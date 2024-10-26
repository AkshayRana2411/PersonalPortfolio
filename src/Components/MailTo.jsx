import React from 'react';
import { CONTACT } from "../constants";

const MailToButton = () => {
  const email = CONTACT.email;  
  const subject = "Subject Here"; 
  const body = "Hello Akshay."; 

  return (
    <a 
      href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} 
      style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'normal' }} // Customized styles
    >
      {email}  
    </a>
  );
};

export default MailToButton;
