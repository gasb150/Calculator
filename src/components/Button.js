import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonName, type } = props;

  return (
    <button className={type}>{buttonName}</button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
};

Button.defaultProps = {
  buttonName: null,
};

export default Button;
