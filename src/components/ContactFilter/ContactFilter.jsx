import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactFilter.module.css'

export const ContactFilter = ({ filter, setFilter }) => {
    const handleFilterChange = (e) => {
    setFilter(e.target.value);
    };
    
  return (
    <div>
      <label className={styles.formFilter}>
        <span className={styles.formTitle}>Find contacts by name</span>
        <input
          className={styles.filterInput}
          type="text"
          placeholder="Search contacts"
          value={filter}
          onChange={handleFilterChange}
        />
        </label>
    </div>
  );
};

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};