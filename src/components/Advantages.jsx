import React from "react";
import AdvantagesDB from "../database/advantages.json";
import Advantage from "./Advantage";

const Advantages = () => {
    return (
        <section className="advantages">
            <div className="advantages__container container">
                <h2 className="advantages__title title">
                    Преимущества работы с нашей компанией
                </h2>
                <div className="advantages__content">
                    {AdvantagesDB.map((advantage, index) => (
                        <Advantage
                            key={advantage.id}
                            advantage={advantage}
                            index={index}
                        />
                    ))}
                </div>
                <div className="advantages__postfix">
                    <div className="advantages__postfixCol advantages__postfixCol_truck">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Atlant%20Gas%2Fadvantages%2Ftruck.png?alt=media&token=5a9f239e-deb1-48e3-a8dd-f3bcc0c4a06d"
                            alt="Грузовик"
                        />
                    </div>
                    <div className="advantages__postfixCol">
                        <div className="advantages__text">
                            {" "}
                            Благодаря нашему собственному автопарку мы можем
                            давать гарантию, что доставим за <span>4 часа</span>
                        </div>
                        <span className="advantages__fakeButton">
                            Это сильное конкурентное преимущество, которым мы
                            дорожим
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;
