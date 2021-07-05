import React from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";

const ContactCard = ({ contact, index, ClickHandleDelete }) => {
  return (
    <div className="user">
      <Link
        to={{ pathname: `/contact/${contact.id}`, state: { contact: contact } }}
        className="nav-link"
      >
        <ul className="contact-list">
          <li className="contact-item">{index + 1} </li>
          <li className="contact-item"> {contact.name}</li>
          <li className="contact-item">{contact.email}</li>
          <li className="contact-item">{contact.age}</li>
        </ul>
      </Link>
      <Icon.Trash
        className={contact.isCompleted ? "isDetele" : ""}
        onClick={() => ClickHandleDelete(contact.id)}
      />
    </div>
  );
};

export default ContactCard;
