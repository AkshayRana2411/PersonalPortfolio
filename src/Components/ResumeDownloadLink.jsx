import React, { useState } from 'react';

const ResumeDownloadButton = () => {
  const resumePath = "/AkshayRes.pdf"; // Ensure this path is correct based on your project structure
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => window.open(resumePath, "_blank")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '10px 20px',
        backgroundColor: isHovered ? '#6a0dad' : 'purple', // Darker purple on hover
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'normal',
        textDecoration: 'none',
        outline: 'none',
        transition: 'background-color 0.3s ease', // Smooth transition
      }}
    >
      Download My Resume
    </button>
  );
};

export default ResumeDownloadButton;
