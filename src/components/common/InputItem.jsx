import React from "react";
import PropTypes from "prop-types";

const InputItem = ({ type, name, value, onChange, error, placeholder }) => {
    const handleChange = ({ target }) => {
        onChange({
            name: target.name,
            value: target.value
        });
    };

    return (
        <div className="inputItem">
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className={
                    "inputItem__input" +
                    (error ? " inputItem__input_error" : "")
                }
            />
            {error && <div className="inputItem__errorMessage">{error}</div>}
        </div>
    );
};

InputItem.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default InputItem;
