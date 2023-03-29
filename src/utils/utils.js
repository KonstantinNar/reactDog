import { useEffect, useState } from "react";

export const getIssues = (numb) => {
    const tmp = numb % 10;
    if (tmp === 1) return ' товар';
    if (tmp > 1 && tmp < 5) return ' товара';
    if (tmp > 4 || !numb) return ' товаров';
};

export const useDebounce = (value, delay = 500) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => clearTimeout(timeout)
    }, [value])
    return debounceValue
}