import React from "react";
import PropTypes from "prop-types";

const InputItem = ({ type, name, value, onChange, error, placeholder }) => {
    const handleChange = ({ target }) => {
        onChange({
            name: target.name,
            value: target.value
        });
    };

    const calcValue = (name, value) => {
        if (name === "phone") {
            const firstValue = value.slice(1, 3);
            const secondValue = value.slice(3, 4);
            const thirdValue = value.slice(4, 6);
            const fourthValue = value.slice(6, 7);
            const fifthValue = value.slice(7, 8);
            const sixthValue = value.slice(8, 9);
            const seventhValue = value.slice(9, 10);
            const eighthValue = value.slice(10, 11);

            if (value.length <= 3) return `+7 (${firstValue}`;
            if (value.length === 4) return `+7 (${firstValue}${secondValue}) `;
            if (value.length <= 6)
                return `+7 (${firstValue}${secondValue}) ${thirdValue}`;
            if (value.length === 7)
                return `+7 (${firstValue}${secondValue}) ${thirdValue}${fourthValue}-`;
            if (value.length === 8)
                return `+7 (${firstValue}${secondValue}) ${thirdValue}${fourthValue}-${fifthValue}`;
            if (value.length === 9)
                return `+7 (${firstValue}${secondValue}) ${thirdValue}${fourthValue}-${fifthValue}${sixthValue}-`;
            if (value.length === 10)
                return `+7 (${firstValue}${secondValue}) ${thirdValue}${fourthValue}-${fifthValue}${sixthValue}-${seventhValue}`;
            if (value.length === 11)
                return `+7 (${firstValue}${secondValue}) ${thirdValue}${fourthValue}-${fifthValue}${sixthValue}-${seventhValue}${eighthValue}`;
        } else {
            return value;
        }
    };

    return (
        <div className="inputItem">
            <input
                type={type}
                id={name}
                name={name}
                value={calcValue(name, value)}
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
