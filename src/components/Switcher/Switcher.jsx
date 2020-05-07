import React from 'react';
import PropTypes from 'prop-types';

const Switcher = ({ switchChange, value }) => (
  <section>
    <input id="switcher" type="checkbox" checked={value} onChange={switchChange} />
  </section>
);

Switcher.propTypes = {
  switchChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired
};

export default Switcher;
