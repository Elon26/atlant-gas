import React from "react";
import Slider from "./Slider";

const Feedback = () => {
    return (
        <section className="feedback">
            <div className="feedback__container container">
                <h2 className="feedback__title title">Отзывы наших клиентов</h2>
                <div className="feedback__slider">
                    <Slider />
                </div>
            </div>
        </section>
    );
};

export default Feedback;
