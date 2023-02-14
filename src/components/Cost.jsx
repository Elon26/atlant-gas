import React from "react";
import PropTypes from "prop-types";

const Cost = ({ openOrderPopap }) => {
    return (
        <section className="cost">
            <div className="cost__container container">
                <h2 className="cost__title title title_blue">
                    Стоимость газа в ваш газгольдер сегодня
                </h2>
                <div className="cost__content">
                    <div className="cost__col cost__col_small">
                        <div className="cost__subtitle">Пропан</div>
                        <div className="cost__price">от 25 рублей за литр</div>
                        <div className="cost__text">
                            Физически испарение происходит до -40 градусов, что
                            позволяет использовать его в наших с вами погодных
                            условиях
                        </div>
                        <button
                            className="button button_small"
                            onClick={openOrderPopap}
                        >
                            Заказать
                        </button>
                    </div>
                    <div className="cost__col cost__col_big">
                        <div className="cost__middleText">
                            Идеальное соотношение
                        </div>
                        <div className="cost__pareto">
                            <div className="cost__gasCol">
                                <p>80%</p>
                                <p>пропана</p>
                            </div>
                            <div className="cost__gasCol">
                                <p>20%</p>
                                <p>бутана</p>
                            </div>
                        </div>
                        <div className="cost__truck">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Atlant%20Gas%2Fcost%2Ftruck.png?alt=media&token=6f927561-10ba-42be-957b-4f45829d8a99"
                                alt="Грузовик"
                            />
                        </div>
                    </div>
                    <div className="cost__col cost__col_small">
                        <div className="cost__subtitle">Бутан</div>
                        <div className="cost__price">от 16 рублей за литр</div>
                        <div className="cost__text">
                            Испарение Бутана происходит только до 0 градусов и
                            годится для использования в тёплое время года
                        </div>
                        <button
                            className="cost__button button button_small"
                            onClick={openOrderPopap}
                        >
                            Заказать
                        </button>
                    </div>
                </div>
                <div className="cost__arrow">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Atlant%20Gas%2Fcost%2Farrows.png?alt=media&token=615be8f9-3675-45ef-91a1-49eb09498413"
                        alt="Стрелка"
                    />
                </div>
            </div>
        </section>
    );
};

Cost.propTypes = {
    openOrderPopap: PropTypes.func
};

export default Cost;
