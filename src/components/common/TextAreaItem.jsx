import React from "react";
import { PropTypes } from "prop-types";

const TextAreaItem = ({ name, rows, value, onChange, placeholder }) => {
    const handleChange = ({ target }) => {
        onChange({
            name: target.name,
            value: target.value
        });
    };

    return (
        <div className="inputItem">
            <textarea
                className="inputItem__input"
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                rows={rows}
            />
        </div>
    );
};

TextAreaItem.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    rows: PropTypes.string
};

export default TextAreaItem;
