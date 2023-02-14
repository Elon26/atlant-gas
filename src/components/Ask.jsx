import { send } from "emailjs-com";
import React, { useEffect, useState } from "react";
import phoneMaskHandler from "../utils/phoneMaskHandler";
import InputItem from "./common/InputItem";
import validator from "../utils/validator";
import TextAreaItem from "./common/TextAreaItem";
import clientsDB from "../database/clients.json";
import PropTypes from "prop-types";

const Ask = ({ openThanksPopap, openOrderPopap }) => {
    const defaultObject = {
        name: "",
        phone: "8",
        message: ""
    };

    const [data, setData] = useState(defaultObject);
    const [errors, setErrors] = useState({});
    const [isSubmitPushed, setIsSubmitPushed] = useState(false);

    useEffect(() => {
        if (isSubmitPushed) validate();
    }, [data]);

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
                "template_pvg5gbg",
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
            openThanksPopap();
        }
    };

    return (
        <section className="ask">
            <div className="ask__container container">
                <div className="ask__content">
                    <div className="ask__col">
                        <h2 className="ask__title">
                            Не нашли ответ на свой вопрос? Задайте его нашему
                            специалисту!{" "}
                        </h2>
                        <form className="ask__form" onSubmit={handleSubmit}>
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
                            <TextAreaItem
                                name="message"
                                rows="5"
                                value={data.message}
                                onChange={handleChange}
                                placeholder="Сообщение"
                            />
                            <button className="ask__button button button_small">
                                Задать вопрос
                            </button>
                        </form>
                    </div>
                    <div className="ask__col ask__col_photoCol">
                        <div className="ask__photo">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Atlant%20Gas%2Fask%2Fphoto.png?alt=media&token=6c23dd60-1961-48b1-8769-7d3a20a57421"
                                alt="Фотография"
                            />
                        </div>
                        <div className="ask__label">
                            <p>Роман Ш.</p>
                            <p>Старший менеджер</p>
                        </div>
                    </div>
                </div>
                <div className="ask__clients">
                    {clientsDB.map((client) => (
                        <div
                            key={client.id}
                            className={
                                "ask__client" +
                                (client.needToUp ? " ask__client_up" : "")
                            }
                        >
                            <a href={client.link} target="blank">
                                <img src={client.logo} alt="Логотип" />
                            </a>
                        </div>
                    ))}
                </div>
                <h3 className="ask__callToAction">
                    Закажи прямо сейчас и получи бесплатную установку телеметрии
                </h3>
                <button
                    className="ask__bigButton button button_big"
                    onClick={openOrderPopap}
                >
                    <span className="button_big__text">Заказать газ</span>
                    <div className="button_big__ellipse"></div>
                </button>
                <div className="ask__mapArea">
                    <div className="ask__mapCol ask__mapCol_left">
                        <h3 className="ask__visitHeader">
                            Посетите наш уютный офис
                        </h3>
                        <div className="ask__visitText">
                            где мы сможем полностью проконсультировать вас по
                            всем вопросам
                        </div>
                        <div className="ask__infoBlock ask__infoBlock_office">
                            <p>Офис</p>
                            <p>Видное , Белокаменное шоссе, 20</p>
                        </div>
                        <div className="ask__infoBlock">
                            <p>Телефон</p>
                            <p>
                                <a href="tel:89841470246">+7 984 147-02-46</a>
                            </p>
                        </div>
                    </div>
                    <div className="ask__mapCol ask__mapCol_right">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2257.134111549549!2d37.768082235926265!3d55.547450252909464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab0113b926911%3A0x38d9302dbc9b7c87!2z0JHQtdC70L7QutCw0LzQtdC90L3QvtC1INGILiwgMjAsINCS0LjQtNC90L7QtSwg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC7LiwgMTQyNzAz!5e0!3m2!1sru!2sru!4v1676345627036!5m2!1sru!2sru"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <div className="ask__privacyPolicy">
                    <span>
                        {" "}
                        * Заполняя любые формы, расположенные на сайте, вы
                        автоматически даёте согласие на обработку персональных
                        данных, согласно{" "}
                    </span>
                    <a
                        target="blank"
                        href="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Atlant%20Gas%2FPrivacy-Policy.pdf?alt=media&token=4ad1000c-c1f2-408e-b8d7-7d590eaa25af"
                    >
                        Политике компании.
                    </a>
                </div>
            </div>
        </section>
    );
};

Ask.propTypes = {
    openThanksPopap: PropTypes.func,
    openOrderPopap: PropTypes.func
};

export default Ask;
