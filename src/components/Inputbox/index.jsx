import React from 'react';
import PropTypes from 'prop-types';
import './inputbox.scss';

function Inputbox({ type, name, setValue, placeholder }) {
  return (
    <input
      type={type}
      name={name}
      onChange={(event) => setValue(event.target.value)}
      placeholder={placeholder}
    />
  );
}

Inputbox.defaultProps = {
  placeholder: 'Search By Id',
};

Inputbox.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};

export default Inputbox;
