import React from 'react';
import PropTypes from 'prop-types';
import './label.scss';

function Label({ labelValue }) {
  return <label>{labelValue}</label>;
}

Label.propTypes = {
  labelValue: PropTypes.string.isRequired,
};

export default Label;
