import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

function Button({ type, label }) {
  return <button type={type}>{label}</button>;
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
