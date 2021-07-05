import "./App.css";
import "./grid.css";
import React, { useEffect, useState } from "react";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import { v4 } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactDetail from "./components/ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const addContactHandle = (contact) => {
    setContacts([...contacts, { id: v4(), ...contact }]);
  };

  useEffect(() => {
    const refresh = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (refresh) {
      setContacts(refresh);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleDelete = (id) => {
    const newList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newList);
  };

  return (
    <div className="app">
      <h1 className="text-center">Danh sách</h1>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={handleDelete}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandle={addContactHandle} />
            )}
          />
          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>
      </Router>

      {/* <AddContact addContactHandle={addContactHandle} />
        <ContactList contacts={contacts} getContactId={handleDelete} /> */}
    </div>
  );
}

export default App;
