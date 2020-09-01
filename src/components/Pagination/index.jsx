import React from 'react';
import PropTypes from 'prop-types';
import './pagination.scss';

function Pagination({
  handlePrevious,
  handleNext,
  previousDisable,
  nextDisable,
}) {
  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={previousDisable}>
        Previous
      </button>
      <button onClick={handleNext} disabled={nextDisable}>
        Next
      </button>
    </div>
  );
}

Pagination.defaultProps = {
  previousDisable: false,
  nextDisable: false,
};

Pagination.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handlePrevious: PropTypes.func.isRequired,
  previousDisable: PropTypes.bool,
  nextDisable: PropTypes.bool,
};
export default Pagination;
