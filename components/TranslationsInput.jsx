"use client";


import { useState, useEffect } from "react";

const TranslationInput = ({ id, type, dataTranslateKey }) => {
    const [placeholder, setplaceholder] = useState('');

    useEffect(() => {
        const language = localStorage.getItem('language') || 'en';

        fetch(`/translations/${language}.json`)
            .then(res => res.json())
            .then(data => {
                if (data[dataTranslateKey]) {
                    setplaceholder(data[dataTranslateKey]);
                }
            });
    }, [dataTranslateKey])

    return <input id={id} className="input" placeholder={placeholder} type={type} />

};

export default TranslationInput;