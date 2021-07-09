import React, { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import api from "./api/contacts";
import { v4 } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactDetail from "./components/ContactDetail";
import EditContact from "./components/EditContact";

function App() {
  //state contact
  const [contacts, setContacts] = useState([]);

  //useEffect data

  const tryGetContact = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  useEffect(() => {
    const getAllContact = async () => {
      const allContacts = await tryGetContact();
      if (allContacts) setContacts(allContacts);
    };
    getAllContact();
  }, []);

  // Add new contact
  const handleAddContact = async (contact) => {
    const request = {
      id: v4(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };

  // Delete contact
  const handleDelete = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newList = contacts.filter((contact) => contact.id !== id);
    setContacts(newList);
  };

  // Update contact
  const handleEditContact = async (contact) => {
    const response = await api.put(`contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  return (
    <div className="app">
      <h1 className="heading-main">Contact Manage</h1>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                handleDelete={handleDelete}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} handleAddContact={handleAddContact} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditContact {...props} handleEditContact={handleEditContact} />
            )}
          />

          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
