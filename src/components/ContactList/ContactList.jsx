import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css'

export const ContactList = ({ contacts, filter, deleteContact }) => {
    const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
    
  return (
    <ul className={styles.contactList}>
      {filteredContacts.map((contact) => (
          <li key={contact.id}>
          <span className={styles.contact}>{contact.name}: {contact.number}</span>
          <button onClick={() => deleteContact(contact.id)} className={styles.contactButton}>&#10060;</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};