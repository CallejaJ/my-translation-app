"use client";


const languageSelector = () => {
    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        localStorage.setItem('language', selectedLanguage);
        window.location.reload();
    };

    return (
        <select onChange={handleLanguageChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
        </select>
    );
};

export default languageSelector;