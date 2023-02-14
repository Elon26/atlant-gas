import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const windowDimensionsContext = React.createContext({});

export const useWindowDimensions = () => {
    return useContext(windowDimensionsContext);
};

const WindowDimensionsProvider = ({ children }) => {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () =>
            setwindowWidth(window.innerWidth)
        );
    }, []);

    return (
        <windowDimensionsContext.Provider value={{ windowWidth }}>
            {children}
        </windowDimensionsContext.Provider>
    );
};

WindowDimensionsProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default WindowDimensionsProvider;
