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
  name,
  hasIcon,
  iconClass,
}) => (
  <React.Fragment>
    <button
      className={classes}
      type={type ? type : 'button'}
      disabled={disabled}
    >
      {name}
      { hasIcon && iconClass &&
        <span className="btn__icon">
          <i className={iconClass}></i>
        </span>
      }
    </button>
  </React.Fragment>
)

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  classes: PropTypes.string.isRequired,
  name: PropTypes.string,
};

Button.defaultProps = {
  hasIcon: false
};

export default Button;

