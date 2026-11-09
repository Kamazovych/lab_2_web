import { useState, useEffect } from 'react';

function Footer({ theme }) {
    const [systemInfo, setSystemInfo] = useState({ os: '', browser: '' });

    useEffect(() => {
        // Збираємо дані
        const info = {
            os: navigator.platform,
            browser: navigator.userAgent
        };
        // Зберігаємо в браузері
        localStorage.setItem('userSystemInfo', JSON.stringify(info));
        
        // Одразу дістаємо їх назад для перевірки
        const savedInfo = JSON.parse(localStorage.getItem('userSystemInfo'));
        if (savedInfo) {
            setSystemInfo(savedInfo);
        }
    }, []);

    return (
        <footer className={`p-6 text-center shadow-inner mt-auto transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950 text-slate-400' : 'bg-slate-200 text-slate-700'}`}>
            <p className="font-medium mb-3">Контакти:</p>
            <a href="mailto:vladyslav@example.com" className="inline-block bg-slate-800 text-white px-6 py-2 rounded-lg shadow hover:bg-slate-700 transition">
                Написати мені
            </a>
            
            {/* Блок із виведенням даних з LocalStorage */}
            <div className="mt-6 text-xs opacity-60 border-t border-slate-500 pt-4 max-w-2xl mx-auto break-words">
                <p className="font-bold mb-1">Інформація з LocalStorage:</p>
                <p>ОС: {systemInfo.os}</p>
                <p>Браузер: {systemInfo.browser}</p>
            </div>
        </footer>
    );
}
export default Footer;