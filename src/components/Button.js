import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonName, type } = props;
  let color = 'teal';
  if (type === 'sp') {
    color = 'purple';
  } if (type === 'op') {
    color = 'blue';
  }
  return (
    <div className={`ui button ${color}`}>{buttonName}</div>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  buttonName: null,
  type: null,
};

export default Button;
