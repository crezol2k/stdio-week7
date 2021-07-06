import React from "react";
import { Link } from "react-router-dom";
import image from "../images/image.jpg";
const ContactDetail = (props) => {
  const { name, email } = props.location.state.contact;

  return (
    <div className="contact-detail">
      <img src={image} alt="" />
      <div className="info-user">
        <div className="name-user">User: {name}</div>
        <div className="email-user">Email: {email}</div>
      </div>
      <Link to='/'>
        <button className="btn">Back list user</button>
      </Link>
    </div>
  );
};

export default ContactDetail;
