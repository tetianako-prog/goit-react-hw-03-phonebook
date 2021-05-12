import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import FilterStyled from './FilterStyled';

const Filter = ({ value, onChange }) => {
  const filterId = v4();
  return (
    <FilterStyled>
      <label className="label" htmlFor={filterId}>
        Find contacts by name
      </label>
      <input type="text" value={value} onChange={onChange} id={filterId} />
    </FilterStyled>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
