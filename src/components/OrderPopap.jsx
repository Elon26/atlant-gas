import React, { useEffect, useState } from "react";
import { BsXLg } from "react-icons/bs";
import InputItem from "./common/InputItem";
import validator from "../utils/validator";
import PropTypes from "prop-types";
import "../styles/popap.scss";
import { send } from "emailjs-com";
import phoneMaskHandler from "../utils/phoneMaskHandler";

const OrderPopap = ({ isOrderPopapOpen, closeOrderPopap, openThanksPopap }) => {
    const defaultObject = {
        name: "",
        phone: "8"
    };

    const [data, setData] = useState(defaultObject);
    const [errors, setErrors] = useState({});
    const [isSubmitPushed, setIsSubmitPushed] = useState(false);

    useEffect(() => {
        if (isSubmitPushed) validate();
    }, [data]);

    const catchClick = ({ target }) => {
        if (!target.closest(".orderPopap__content")) {
            closeOrderPopap();
        }
    };

    const handleChange = (target) => {
        if (target.name === "phone") {
            const handledValue = phoneMaskHandler(target.value);
            if (handledValue) {
                setData((prevState) => ({
                    ...prevState,
                    [target.name]: handledValue
                }));
            }
        } else {
            setData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
        }
    };

    const validatorConfig = {
        name: {
            isRequired: {
                message: "Введите имя"
            }
        },
        phone: {
            isFullNumber: {
                message: "Введите номер телефона"
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);

        setErrors(errors);
        return !Object.keys(errors).length;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitPushed(true);
        const isValid = validate();
        if (isValid) {
            send(
                "service_qb74c3z",
                "template_xso7nva",
                data,
                "omHUDjCn2WjDLmNlN"
            )
                .then((response) => {
                    console.log("SUCCESS!", response.status, response.text);
                })
                .catch((err) => {
                    console.log("FAILED...", err);
                });

            setData(defaultObject);
            setIsSubmitPushed(false);

            closeOrderPopap();
            openThanksPopap();
        }
    };

    return (
        <section className="orderPopap">
            <div
                className={
                    "orderPopap__outer" + (isOrderPopapOpen ? " open" : "")
                }
                onClick={catchClick}
            >
                <div className="orderPopap__content">
                    <div
                        className="orderPopap__closeIcon"
                        onClick={closeOrderPopap}
                    >
                        <BsXLg />
                    </div>
                    <h3 className="orderPopap__header">
                        Доставим газ за 4 часа
                    </h3>
                    <form className="orderPopap__form" onSubmit={handleSubmit}>
                        <InputItem
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            error={errors.name}
                            placeholder="Имя"
                        />
                        <InputItem
                            type="tel"
                            name="phone"
                            value={data.phone}
                            onChange={handleChange}
                            error={errors.phone}
                            placeholder="Телефон"
                        />
                        <button
                            type="submit"
                            className="orderPopap__button button button_big"
                        >
                            <span className="button_big__text">
                                Заказать доставку газа
                            </span>
                            <div className="button_big__ellipse"></div>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

OrderPopap.propTypes = {
    isOrderPopapOpen: PropTypes.bool,
    closeOrderPopap: PropTypes.func,
    openThanksPopap: PropTypes.func
};

export default OrderPopap;
