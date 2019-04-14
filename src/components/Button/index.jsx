// react libraires
import React from 'react';

// third-party labraries
import PropTypes from 'prop-types';

// style
import './Button.scss';

const Button = ({
  type,
  disabled,
  classes,
  name
}) => (
  <button
    className={classes}
    type={type ? type : 'button'}
    disabled={disabled}
  >
    {name}
  </button>
)

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  classes: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Button;

