import { Component } from 'react';
import css from './CreateContact.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
  isValid: true,
};

class FormCreateContact extends Component {
  state = INITIAL_STATE;

  // handleChange = ({ target: { value, name } }) => {
  //   this.setState({ [name]: value });
  // };
  handleChangeName = ({ target: { value } }) => {
    this.setState({ name: value });
  };

  handleChangeNumber = ({ target: { value } }) => {
    this.setState({ number: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.name || !this.state.number)
      return this.setState({ isValid: false });
    this.props.createContact(this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <form className={css.form_contact} onSubmit={this.handleSubmit}>
        <div className={css.input_contact}>
          <label htmlFor="inputName" className={css.form_label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChangeName}
            className={`${css.form_control} ${
              !this.state.isValid && 'is-invalid'
            }`}
            id="inputName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className={css.input_contact}>
          <label htmlFor="inputNumber" className={css.form_label}>
            Number
          </label>
          <input
            type="tel"
            name="number"
            onChange={this.handleChangeNumber}
            className={`${css.form_control} ${
              !this.state.isValid && 'is-invalid'
            }`}
            id="inputNumber"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default FormCreateContact;
