import React from "react";
import Spoiler from "./Spoiler";

const FAQ = () => {
    return (
        <section className="faq">
            <div className="faq__container container">
                <h2 className="faq__title title title_blue">
                    Ответы на часто задаваемые вопросы
                </h2>
                <div className="faq__content">
                    <Spoiler />
                </div>
            </div>
        </section>
    );
};

export default FAQ;
