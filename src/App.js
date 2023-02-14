import React, { useState } from "react";
import Advantages from "./components/Advantages";
import Ask from "./components/Ask";
import Capacity from "./components/Capacity";
import Cost from "./components/Cost";
import FAQ from "./components/FAQ";
import Feedback from "./components/Feedback";
import Main from "./components/Main";
import OrderPopap from "./components/OrderPopap";
import ThanksPopap from "./components/ThanksPopap";
import WindowDimensionsProvider from "./hooks/useWindowDimensions";

function App() {
    const [isOrderPopapOpen, setIsOrderPopapOpen] = useState(false);
    const openOrderPopap = () => setIsOrderPopapOpen(true);
    const closeOrderPopap = () => setIsOrderPopapOpen(false);
    const [isThanksPopapOpen, setIsThanksPopapOpen] = useState(false);
    const openThanksPopap = () => setIsThanksPopapOpen(true);
    const closeThanksPopap = () => setIsThanksPopapOpen(false);

    return (
        <div className="App">
            <WindowDimensionsProvider>
                <Main openOrderPopap={openOrderPopap} />
                <Cost openOrderPopap={openOrderPopap} />
                <Advantages />
                <Capacity openOrderPopap={openOrderPopap} />
                <Feedback />
                <FAQ />
                <Ask
                    openThanksPopap={openThanksPopap}
                    openOrderPopap={openOrderPopap}
                />

                <OrderPopap
                    isOrderPopapOpen={isOrderPopapOpen}
                    closeOrderPopap={closeOrderPopap}
                    openThanksPopap={openThanksPopap}
                />
                <ThanksPopap
                    isThanksPopapOpen={isThanksPopapOpen}
                    closeThanksPopap={closeThanksPopap}
                />
            </WindowDimensionsProvider>
        </div>
    );
}

export default App;
