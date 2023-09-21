import { Component } from 'react';
import ContactList from './components/ContactList/ContactList';
import { nanoid } from 'nanoid';
import FormCreateContact from './components/Forms/CreateContact/CreateContact';
import FormFilterContact from './components/Forms/Filter/Filter';
import css from './components/ContactList/ContactList.module.css';

class App extends Component {
  state = {
    contact: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filteredContact: null,
  };
  handleDelete = id => {
    this.setState(prev => ({
      contact: prev.contact.filter(el => el.id !== id),
    }));
  };

  createContact = dataByForm => {
    const isAlreadyExist = this.state.contact.find(
      el => el.name === dataByForm.name
    );
    if (isAlreadyExist)
      return alert(`${dataByForm.name} is already in contacts`);

    const newContact = {
      ...dataByForm,
      completed: false,
      id: nanoid(),
    };
    this.setState(prev => ({
      contact: [newContact, ...prev.contact],
    }));
  };

  filterContact = filterQuery => {
    this.setState(prev => ({
      filteredContact: prev.contact.filter(el =>
        el.name.toLowerCase().includes(filterQuery.toLowerCase())
      ),
    }));
  };
  render() {
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <FormCreateContact
          createContact={dataByForm => this.createContact(dataByForm)}
        />
        <h2>Contacts</h2>
        <FormFilterContact
          filterContact={filterQuery => this.filterContact(filterQuery)}
        />
        <ContactList
          handleDelete={id => this.handleDelete(id)}
          createContact={dataByForm => this.createContact(dataByForm)}
          filterContact={filterQuery => this.filterContact(filterQuery)}
          contact={this.state.contact}
          filteredContact={this.state.filteredContact}
        />
      </div>
    );
  }
}

export default App;
