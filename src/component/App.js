import React, { Component } from "react";
import ContactList from "./contsctList/ContactList";
import Form from "./form/Form";
import Filter from "./filter/Filter";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>

        <Filter />
        <ContactList />
      </div>
    );
  }
}
