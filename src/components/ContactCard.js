import React from "react";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const ContactCard = ({ contact, handleDelete }) => {
  return (
    <div className="user">
      <Link
        to={{ pathname: `/contact/${contact.id}`, state: { contact: contact } }}
        className="nav-link link-user"
      >
        <div className="info-user">
          <div className="name-user">{contact.name}</div>
          <div className="email-user">Email: {contact.email}</div>
        </div>
      </Link>

      <div className="action">
        <Icon.Trash
          onClick={() => handleDelete(contact.id)}
          className="icon-delete"
        />
      </div>

      <Link
        to={{ pathname: "edit", state: { contact: contact } }}
        className="nav-link"
      >
        <div>
          <Icon.PencilSquare className="icon-edit" />
        </div>
      </Link>
    </div>
  );
};

export default ContactCard;
