import { Component } from 'react';
import Contact from '../Contact/Contact';

import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    return (
      <>
        <ul className={css.list_group}>
          {(this.props.filteredContact
            ? this.props.filteredContact
            : this.props.contact
          ).map(el => (
            <Contact
              contact={el}
              key={el.id}
              handleDelete={id => this.props.handleDelete(id)}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default ContactList;
