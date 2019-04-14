// react library
import React from 'react';

// third party libraries
import PropTypes from 'prop-types';

// style
import './InputBox.scss';

const InputBox = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  name,
  type,
  placeholder,
  hasIcon,
  iconClass
}) => (
  <div className="form-input">
    <div className="form-input__input">
      <input
        type={type}
        className={
          errors[name] && touched[name] ? 'input input__error' : 'input'
        }
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        placeholder={placeholder}
      />
      { hasIcon && iconClass && <span className="form-input__icon"><i class={iconClass}></i></span> }
      {
        errors[name] && touched[name] && <span className="input__error--message">{errors[name]}</span>
      }
    </div>
  </div>
)

InputBox.propTypes = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
  touched: PropTypes.objectOf(PropTypes.bool).isRequired,
  errors: PropTypes.objectOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  iconText: PropTypes.string,
};

InputBox.defaultProps = {
  type: 'text',
  values: {},
  touched: {},
  errors: {},
  isSubmitting: false,
  hasIcon: false
};


export default InputBox;
