import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
const ContactList = ({ contacts, handleDelete }) => {
  const render = contacts.map((contact) => (
    <ContactCard
      contact={contact}
      key={contact.id}
      handleDelete={handleDelete}
    />
  ));
  return (
    <div className="list-contact">
      <h1 className="heading-sub">List user</h1>
      {render}
      <Link to='/add'>
        <button className="btn">Add user</button>
      </Link>
    </div>
  );
};

export default ContactList;
