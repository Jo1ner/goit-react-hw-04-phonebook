import { FormStyle } from './Form.styled';
import { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit = evt => {
    evt.preventDefault();

    const formData = {
      name: this.state.name,
      number: this.state.number,
    };
    this.props.createContact(formData);

    this.setState({
      name: '',
      number: '',
    });
  };

  handleInputChange = evt => {
    const value = evt.target.value;
    const name = evt.target.name;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <FormStyle onSubmit={this.handleSubmit}>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              required
            />
          </label>
          <label>
            <p>Number</p>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              placeholder="XXX-XX-XX"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </FormStyle>
      </div>
    );
  }
}
