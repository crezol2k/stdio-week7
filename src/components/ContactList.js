import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, getContactId }) => {
  const deleteContact = (id) => {
    getContactId(id);
  };

  const renderContactList = contacts.map((contact, index) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        index={index}
        ClickHandleDelete={deleteContact}
      />
    );
  });

  return (
    <div className="py-24 contact-main">
      {renderContactList}

      <Link to="/add" className="nav-link">
        <button className="btn btn-success inl-block mt-24">Thêm</button>
      </Link>
    </div>
  );
};

export default ContactList;
