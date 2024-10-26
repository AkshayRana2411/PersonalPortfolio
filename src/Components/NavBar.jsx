import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

function NavBar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex items-center flex-shrink-0'>
        {/* <img className='mx-2 w-10 ' src={logo} alt="logo" /> */}
        <span className='text-4xl font-sans hover:cursor-default'>Ar.</span>
      </div>

      <div className='flex items-center justify-center gap-4 text-2xl m-8'>
        <a
          href="https://www.linkedin.com/in/akshay-rana-155b31292/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/AkshayRana2411"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/aksh___1524?igsh=MW5mYjYyd3g0Nmw2ZA=="
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
