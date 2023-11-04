import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const stringContacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(stringContacts) ?? [];
    return parseContacts;
  });
  const [filter, setFilter] = useState('');

  const createContact = formData => {
    if (contacts.some(contact => contact.name === formData.name)) {
      alert(`${formData.name} is already in contacts`);
      return;
    }
    const newContact = {
      ...formData,
      id: nanoid(),
    };
    console.log(newContact);
    setContacts([...contacts, newContact]);
  };

  const handleInputFilterChange = evt => setFilter(evt.target.value);

  const handleDeleteContact = contactId =>
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactId);
    });

  const getFindContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  const findContacts = getFindContact();
  return (
    <div>
      <h2>Phonebook</h2>
      <Form createContact={createContact} />
      <h2>Contacts</h2>
      <Filter
        filterValue={filter}
        handleInputFilterChange={handleInputFilterChange}
      />
      <ContactList
        handleDeleteContact={handleDeleteContact}
        contacts={findContacts}
      />
    </div>
  );
};
