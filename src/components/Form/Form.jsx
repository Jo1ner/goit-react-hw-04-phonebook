import { FormStyle } from './Form.styled';
import { useState } from 'react';

export const Form = ({ createContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    const formData = {
      name: name,
      number: number,
    };
    createContact(formData);
    setName('');
    setNumber('');
  };

  const handleInputChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <div>
      <FormStyle onSubmit={handleSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleInputChange}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="XXX-XX-XX"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </FormStyle>
    </div>
  );
};
