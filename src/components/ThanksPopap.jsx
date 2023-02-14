import React from "react";
import PropTypes from "prop-types";
import "../styles/popap.scss";

const ThanksPopap = ({ isThanksPopapOpen, closeThanksPopap }) => {
    return (
        <section className="thanksPopap">
            <div
                className={
                    "thanksPopap__outer" + (isThanksPopapOpen ? " open" : "")
                }
            >
                <div className="thanksPopap__content">
                    <div className="thanksPopap__logo">
                        <a href="#">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Atlant%20Gas%2Fmain%2Flogo.png?alt=media&token=9978117c-552a-4a71-9e5a-18ff36ac5a17"
                                alt="Логотип"
                            />
                        </a>
                    </div>
                    <div className="thanksPopap__bigText">
                        Спасибо за обращение
                    </div>
                    <div className="thanksPopap__smallText">
                        наш специалист свяжется с вами в ближайшее время
                    </div>
                    <button
                        className="thanksPopap__button button button_big"
                        onClick={closeThanksPopap}
                    >
                        <span className="button_big__text">
                            Вернуться на сайт
                        </span>
                        <div className="button_big__ellipse"></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

ThanksPopap.propTypes = {
    isThanksPopapOpen: PropTypes.bool,
    closeThanksPopap: PropTypes.func
};

export default ThanksPopap;
