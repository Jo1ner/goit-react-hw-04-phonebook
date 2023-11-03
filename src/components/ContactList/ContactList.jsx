import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactListItem
            key={contact.id}
            contact={contact}
            handleDeleteContact={handleDeleteContact}
          />
        );
      })}
    </ul>
  );
};
