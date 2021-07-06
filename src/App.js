import React, { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { v4 } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactDetail from "./components/ContactDetail";

function App() {
  const KEY_LOCAL_STORAGE = "contacts";
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (contact) => {
    setContacts([
      ...contacts,
      {
        id: v4(),
        ...contact,
      },
    ]);
  };
  useEffect(() => {
    const refresh = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));
    if (refresh) {
      setContacts(refresh);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(contacts));
  }, [contacts]);

  const handleDelete = (id) => {
    const newList = contacts.filter((contact) => contact.id !== id);
    setContacts(newList);
  };

  return (
    <div className="app">
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

          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
