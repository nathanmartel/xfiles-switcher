import React from 'react';
import PropTypes from 'prop-types';
import styles from './Switcher.css';

const Switcher = ({ value, onSwitcherChange }) => (
  <section className={styles.Switcher}>
    <span>Main</span> <input id="switcher" type="checkbox" checked={value} onChange={onSwitcherChange} />
    <label htmlFor="switcher"></label>
    <span>Monster</span>
  </section>
);

Switcher.propTypes = {
  value: PropTypes.bool.isRequired,
  onSwitcherChange: PropTypes.func.isRequired
};

export default Switcher;
