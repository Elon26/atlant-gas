import React, { useState } from "react";
import PropTypes from "prop-types";

const Capacity = ({ openOrderPopap }) => {
    const [capacity, SetCapacity] = useState(2);

    return (
        <section className="capacity">
            <div className="capacity__container container">
                <h2 className="capacity__title title title_blue">
                    Выберите свой объём Газовоза
                </h2>
                <div className="capacity__content">
                    <div className="capacity__buttons">
                        <button
                            className={
                                "capacity__button" +
                                (capacity === 2 ? " active" : "")
                            }
                            onClick={() => SetCapacity(2)}
                        >
                            <p>Малый</p>
                            <p>2 000 л.</p>
                        </button>
                        <button
                            className={
                                "capacity__button" +
                                (capacity === 6 ? " active" : "")
                            }
                            onClick={() => SetCapacity(6)}
                        >
                            <p>Средний</p>
                            <p>6 000 л.</p>
                        </button>
                        <button
                            className={
                                "capacity__button" +
                                (capacity === 10 ? " active" : "")
                            }
                            onClick={() => SetCapacity(10)}
                        >
                            <p>Стандартный</p>
                            <p>10 000 л.</p>
                        </button>
                        <button
                            className={
                                "capacity__button" +
                                (capacity === 40 ? " active" : "")
                            }
                            onClick={() => SetCapacity(40)}
                        >
                            <p>Оптовый</p>
                            <p>40 000 л.</p>
                        </button>
                    </div>
                    <div className="capacity__truckContainer">
                        <div
                            className={
                                "capacity__truck" +
                                (capacity === 2 ? " active" : "")
                            }
                        >
                            {capacity === 2 && (
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Atlant%20Gas%2Fcapacity%2Ftruck-1.png?alt=media&token=6f6a730c-c37d-40d5-a27b-dc332eeb1d4a"
                                    alt="Газовоз"
                                />
                            )}
                        </div>
                        <div
                            className={
                                "capacity__truck" +
                                (capacity === 6 ? " active" : "")
                            }
                        >
                            {capacity === 6 && (
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Atlant%20Gas%2Fcapacity%2Ftruck-2.png?alt=media&token=27d497ab-39f8-409c-a368-726f18380840"
                                    alt="Газовоз"
                                />
                            )}
                        </div>
                        <div
                            className={
                                "capacity__truck" +
                                (capacity === 10 ? " active" : "")
                            }
                        >
                            {capacity === 10 && (
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Atlant%20Gas%2Fcapacity%2Ftruck-3.png?alt=media&token=8af94f1f-8868-4411-83b7-760135182171"
                                    alt="Газовоз"
                                />
                            )}
                        </div>
                        <div
                            className={
                                "capacity__truck" +
                                (capacity === 40 ? " active" : "")
                            }
                        >
                            {capacity === 40 && (
                                <img
                                    src="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Atlant%20Gas%2Fcapacity%2Ftruck-4.png?alt=media&token=e59dba5c-d8c0-4254-b15a-b5d00bd6c545"
                                    alt="Газовоз"
                                />
                            )}
                        </div>
                    </div>
                    <button
                        className="capacity__orderButton button button_big"
                        onClick={openOrderPopap}
                    >
                        <span className="button_big__text">Заказать газ</span>
                        <div className="button_big__ellipse"></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

Capacity.propTypes = {
    openOrderPopap: PropTypes.func
};

export default Capacity;
