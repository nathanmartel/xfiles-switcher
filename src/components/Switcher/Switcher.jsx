import React from 'react';
import PropTypes from 'prop-types';

const Switcher = ({ value, onSwitcherChange }) => (
  <section>
    Main <input id="switcher" type="checkbox" checked={value} onChange={onSwitcherChange} /> Monster
  </section>
);

Switcher.propTypes = {
  value: PropTypes.bool.isRequired,
  onSwitcherChange: PropTypes.func.isRequired
};

export default Switcher;
