import React, { useState } from "react";
import PropTypes from "prop-types";

const PhoneItem = ({
    name,
    value,
    error,
    handleChangePhone,
    placeholder
}) => {
    const [oldValue, setOldValue] = useState(value);

    const handleChangePhoneHandler = (value) => {
        handleChangePhone({
            name: name,
            value: value
        });
    };

    const handleFocus = () => {
        if (value.length <= 4) {
            handleChangePhoneHandler("+7 (");
        }
    };

    const handleBlur = () => {
        if (value.length <= 4) {
            handleChangePhoneHandler("");
        }
    };

    const handleChange = (e) => {
        const newValue = e.target.value;

        if (newValue.length > oldValue.length) {
            const numbers = getNumbers(newValue);
            const convertedNumbers = convertNumbers(numbers);
            handleChangePhoneHandler(convertedNumbers);
            setOldValue(convertedNumbers);
        } else {
            if (oldValue.length - newValue.length === 1 && oldValue.slice(-1) === "-") {
                handleChangePhoneHandler(newValue.slice(0, -1));
                setOldValue(newValue.slice(0, -1));
            } else {
                if (oldValue.length - newValue.length === 1 && oldValue.slice(-1) === " ") {
                    handleChangePhoneHandler(newValue.slice(0, -2));
                    setOldValue(newValue.slice(0, -2));
                } else {
                    const numbers = getNumbers(newValue);
                    const convertedNumbers = convertNumbers(numbers);
                    handleChangePhoneHandler(convertedNumbers);
                    setOldValue(convertedNumbers);
                }
            }
        }
    };

    const getNumbers = (value) => {
        const unclearedNumbers = value.slice(4).split("");

        const cleardArr = [];
        unclearedNumbers.forEach(item => {
            if (isFinite(+item) && item !== " ") {
                cleardArr.push(item.toString());
            }
        });

        return cleardArr.join("");
    };

    const convertNumbers = (value) => {
        let result = "+7 (";
        for (let i = 0; i < value.length; i++) {
            const char = value[i];
            result += char;
            if (i === 2) {
                result += ") ";
            }
            if (i === 5 || i === 7) {
                result += "-";
            }
            if (i === 9) break;
        }
        return result;
    };

    return (
        <div className="inputItem">
            <input
                className={
                    "inputItem__input" +
                    (error ? " inputItem__input_error" : "")
                }
                type="text"
                name={name}
                value={value}
                onChange={handleChange}
                autoComplete="off"
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={placeholder}
            />
            {error && <div className="inputItem__errorMessage">{error}</div>}
        </div>
    );
};

PhoneItem.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
    handleChangePhone: PropTypes.func,
    placeholder: PropTypes.string,
};

export default PhoneItem;
