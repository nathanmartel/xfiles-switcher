import React from 'react';
import PropTypes from 'prop-types';

const Switcher = ({ value, onSwitcherChange }) => (
  <section>
    <input id="switcher" type="checkbox" checked={value} onChange={onSwitcherChange} />
  </section>
);

Switcher.propTypes = {
  value: PropTypes.bool.isRequired,
  onSwitcherChange: PropTypes.func.isRequired
};

export default Switcher;
