import { ContactItem, ButtonDelete } from './ContactListItem.styled';

export const ContactListItem = ({ contact, handleDeleteContact }) => {
  return (
    <ContactItem>
      <span>{contact.name}: </span>
      <span>{contact.number}</span>
      <ButtonDelete
        type="button"
        onClick={() => handleDeleteContact(contact.id)}
      >
        Delete
      </ButtonDelete>
    </ContactItem>
  );
};
