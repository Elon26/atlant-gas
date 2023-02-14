const phoneMaskHandler = (value) => {
    const firstValue = value.slice(4, 7);
    const secondValue = value.slice(9, 12);
    const thirdValue = value.slice(13, 15);
    const fourthValue = value.slice(16, 18);

    if (value.length <= 7 && isFinite(firstValue)) return 8 + firstValue;
    if (value.length > 7 && value.length <= 12 && isFinite(secondValue))
        return 8 + firstValue + secondValue;
    if (value.length > 12 && value.length <= 15 && isFinite(thirdValue))
        return 8 + firstValue + secondValue + thirdValue;
    if (value.length > 15 && value.length <= 18 && isFinite(fourthValue))
        return 8 + firstValue + secondValue + thirdValue + fourthValue;

    return false;
};

export default phoneMaskHandler;
