import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { name, email, age } = props.location.state.contact;
  return (
    <div className="user">
      <div className="info-user">
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{age}</p>
      </div>
      <Link to="/">
        <button className="btn inl-block btn-success">Back list contact</button>
      </Link>
    </div>
  );
};

export default ContactCard;
