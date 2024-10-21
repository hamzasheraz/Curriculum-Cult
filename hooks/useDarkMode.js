import { useEffect } from 'react';

const useDarkMode = (darkMode) => {
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);
};

export default useDarkMode;
