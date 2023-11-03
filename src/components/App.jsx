import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

//
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  createContact = formData => {
    if (this.state.contacts.some(contact => contact.name === formData.name)) {
      alert(`${formData.name} is already in contacts`);
      return;
    }
    const newContact = {
      ...formData,
      id: nanoid(),
    };
    console.log(newContact);
    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  handleInputFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  handleDeleteContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  getFindContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    const stringContacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(stringContacts) ?? this.state.contacts;
    this.setState({
      contacts: parseContacts,
    });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      console.log('contacts was updated');
      const stringifiedContacts = JSON.stringify(this.state.contacts);
      localStorage.setItem('contacts', stringifiedContacts);
    }
  }

  render() {
    const findContacts = this.getFindContact();
    return (
      <div>
        <h2>Phonebook</h2>
        <Form createContact={this.createContact} />
        <h2>Contacts</h2>
        <Filter
          filterValue={this.state.filter}
          handleInputFilterChange={this.handleInputFilterChange}
        />
        <ContactList
          handleDeleteContact={this.handleDeleteContact}
          contacts={findContacts}
        />
      </div>
    );
  }
}
