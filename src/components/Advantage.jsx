import React from "react";
import PropTypes from "prop-types";

const Advantage = ({ advantage, index }) => {
    return (
        <article className="advantage">
            <div
                className={
                    "advantage__body" +
                    (index % 3 === 1 ? " advantage__body_middle" : "")
                }
            >
                <div className="advantage__img">
                    <img src={advantage.img} alt="Картинка" />
                </div>
                <div className="advantage__title">{advantage.title}</div>
                <div className="advantage__text">{advantage.text}</div>
            </div>
        </article>
    );
};

Advantage.propTypes = {
    advantage: PropTypes.object,
    index: PropTypes.number
};

export default Advantage;
