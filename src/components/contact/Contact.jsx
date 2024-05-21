import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  const send_email = () => {
    window.open('mailto:30307356usingnel@gmail.com', '_blank');
  };
  const send_linkeld = () => {
    window.open('http://www.linkedin.com/in/nelarrieta27', '_blank');
  };
  const send_github = () => {
    window.open('https://github.com/Nelman27', '_blank');
  };
  const send_instagram = () => {
    window.open(
      'https://www.instagram.com/nelson27jp?utm_source=qr&igsh=MTNiMGwxZmhzZGEzcQ==',
      '_blank'
    );
  };

  return (
    <div className="mb-5 mr-2 mt-[-10px] leading-3 inline-block">
      <MdOutlineMailOutline size="2rem" className="m-4 inline-block border-2 border-black rounded-lg object-fit-cover" onClick={send_email} />
      <IoLogoLinkedin size="2rem" className="m-4 inline-block border-2 border-black rounded-lg object-fit-cover" onClick={send_linkeld} />
      <FaGithubSquare size="2rem" className="m-4 inline-block  border-2 border-black rounded-lg object-fit-cover" onClick={send_github} />
      <FaInstagram size="2rem" className="m-4 inline-block  border-2 border-black rounded-lg object-fit-cover" onClick={send_instagram} />
    </div>
  );
}

export default Contact;
