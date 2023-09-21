import css from './Contact.module.css';
const Contact = ({ contact, handleDelete }) => {
  return (
    <li className={css.list_group_item}>
      {contact.name + ' : ' + contact.number}
      <button
        type="button"
        className={css.btn}
        aria-label="Close"
        onClick={() => handleDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
