import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.css';

const Input = ({
    id, className, label, error, ...attrs
}) => {

    const classes = classNames(
        'input',
        'className',
        { error }
    )

    return (
        <div className="inputWrapper">
            {label &&
                <label className="inputLabel" htmlFor={id}>{label}</label>
            }
            {
                attrs.required &&
                <span className="inputRequired">Required</span>
            }
            <input
                id={id}
                name={id}
                className={classes}
                {...attrs}
            />
            {error &&
                <span className="inputError">{error}</span>
            }
        </div>
    )
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
}


Input.defaultProps = {
    className: '',
    label: '',
    error: ''
}

export default Input; 