import React from 'react';
import PropTypes from 'prop-types';
import styles from './Switcher.css';

const Switcher = ({ value, onSwitcherChange }) => (
  <section className={styles.Switcher}>
    Main <input id="switcher" type="checkbox" checked={value} onChange={onSwitcherChange} /> Monster
    <label htmlFor="switcher"></label>
  </section>
);

Switcher.propTypes = {
  value: PropTypes.bool.isRequired,
  onSwitcherChange: PropTypes.func.isRequired
};

export default Switcher;
