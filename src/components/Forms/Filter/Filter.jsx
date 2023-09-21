import React from 'react';
import css from './Filter.module.css';

const FormFilterContact = ({ filterContact }) => {
  const handleChange = ({ target: { value } }) => {
    filterContact(value);
  };
  return (
    <div className={css.filter}>
      <label htmlFor="inputName" className={css.form_label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        className={css.form_control}
        id="inputName"
      />
    </div>
  );
};

export default FormFilterContact;
