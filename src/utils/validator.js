const validator = (data, config) => {
    const errors = {};

    function validate(validateMethod, data, config) {
        let statusValidate;

        if (validateMethod === "isRequired") {
            statusValidate = data.trim() === "";
        }

        if (validateMethod === "isFullNumber") {
            statusValidate = data.length !== 18;
        }

        if (statusValidate) return config.message;
    }

    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );

            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }

    return errors;
};

export default validator;
