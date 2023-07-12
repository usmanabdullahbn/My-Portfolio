import React from 'react';
import "./Contact-Info.css"
import { FaEnvelope, FaWhatsapp, FaMapMarker } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h2 className='h2-about'>Get in <span style={{color: "#313bac"}}>touch</span> with me</h2>
      <div className="info-item">
        <FaEnvelope className="icon" />
        <span style={{color: "#666"}}>usmanabdullbn@gmail.com</span>
      </div>
      <div className="info-item">
        <FaWhatsapp className="icon" />
        <span style={{color: "#666", marginRight: "60px"}}>+92 349-2045-983</span>
      </div>
      <div className="info-item">
        <FaMapMarker style={{marginLeft:"20px"}} className="icon" />
        <span style={{color: "#666"}}>K.A.E.C.H.s, Karachi, Pakistan</span>
      </div>
    </div>
  );
};

export default ContactInfo;
