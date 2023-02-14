import React from "react";
import { useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import FAQDB from "../database/faq.json";
import "../styles/spoiler.scss";

const Spoiler = () => {
    const [activeSpoiler, setActiveSpoiler] = useState(-1);

    const toggleSpoiler = (spoilerNumber) => {
        if (activeSpoiler === spoilerNumber) {
            setActiveSpoiler(-1);
        } else {
            setActiveSpoiler(spoilerNumber);
        }
    };

    return (
        <div className="spoiler">
            {FAQDB.map((FAQItem, index) => (
                <div
                    key={FAQItem.id}
                    className={
                        "spoiler__item" +
                        (activeSpoiler === index ? " active" : "")
                    }
                >
                    <h3
                        className={
                            "spoiler__titleBlock" +
                            (activeSpoiler === index ? " active" : "")
                        }
                        onClick={() => toggleSpoiler(index)}
                    >
                        <BsFillCaretRightFill
                            className={
                                "spoiler__icon" +
                                (activeSpoiler === index ? " active" : "")
                            }
                        />
                        <span className="spoiler__title">{FAQItem.title}</span>
                    </h3>
                    {activeSpoiler === index && (
                        <div className="spoiler__body">{FAQItem.text}</div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Spoiler;
