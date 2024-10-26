import React from 'react';

const ResumeDownloadButton = () => {
  const resumePath = "/AkshayRes.pdf"; // Path to the resume in the public folder

  const handleDownload = () => {
    const link = document.createElement('a'); // Create a new anchor element
    link.href = resumePath; // Set the href to the resume path
    link.download = 'AkshayRes.pdf'; // Set the download attribute with a filename
    document.body.appendChild(link); // Append the link to the document
    link.click(); // Programmatically click the link to trigger the download
    document.body.removeChild(link); // Remove the link from the document
  };

  return (
    <button
      onClick={handleDownload} // Trigger the download on button click
      style={{
        display: 'inline-block', // Ensures proper button styling
        padding: '10px 20px',
        backgroundColor: 'purple',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontWeight: 'normal',
        textDecoration: 'none',
        outline: 'none',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#6a0dad')} // Darker purple on hover
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'purple')} // Reset on mouse leave
    >
      Download My Resume
    </button>
  );
};

export default ResumeDownloadButton;
