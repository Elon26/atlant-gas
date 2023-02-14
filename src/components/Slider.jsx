import React from "react";
import SlickSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/slider.scss";
import feedback from "../database/feedback.json";
import PropTypes from "prop-types";

function PrevArrow({ className, style, onClick }) {
    return (
        <img
            src="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Atlant%20Gas%2Farrow-prev.png?alt=media&token=42304ce3-f88b-4d00-ade9-8c90c8c4cf78"
            alt="Следующий слайд"
            className={className + " slider__arrow slider__arrow_prev"}
            style={style}
            onClick={onClick}
        />
    );
}

function NextArrow({ className, style, onClick }) {
    return (
        <img
            src="https://firebasestorage.googleapis.com/v0/b/porfolio-f48be.appspot.com/o/Atlant%20Gas%2Farrow-next.png?alt=media&token=3b750168-5dda-473a-b12f-af09eadef0ed"
            alt="Следующий слайд"
            className={className + " slider__arrow slider__arrow_next"}
            style={style}
            onClick={onClick}
        />
    );
}

const Slider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        dotsClass: "slider__dots"
    };

    return (
        <div className="slider">
            <SlickSlider {...settings}>
                {feedback.map((feedbackItem) => (
                    <div className="slider__slide slide" key={feedbackItem.id}>
                        <div className="slide__backScreen"></div>
                        <div className="slide__middleScreen"></div>
                        <div className="slide__frontScreen">
                            <div className="slide__photoCol">
                                <div className="slide__photo">
                                    <img
                                        src={feedbackItem.photo}
                                        alt="Фотография"
                                    />
                                </div>
                            </div>
                            <div className="slide__contentCol">
                                <div className="slide__name">
                                    {feedbackItem.name}{" "}
                                </div>
                                <div className="slide__city">
                                    {feedbackItem.city}{" "}
                                </div>
                                <div className="slide__text">
                                    {feedbackItem.text}{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </SlickSlider>
        </div>
    );
};

PrevArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
};

NextArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
};

export default Slider;
