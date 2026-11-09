import { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';

function App() {
    const [theme, setTheme] = useState('light');

    // Перевірка часу при завантаженні сайту
    useEffect(() => {
        const currentHour = new Date().getHours();
        // Якщо час від 07:00 до 21:00 - світла тема, інакше - темна
        if (currentHour >= 7 && currentHour < 21) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }, []);

    // Функція для ручного перемикання теми
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    // Зміна кольорів заднього фону всього сайту
    const appClasses = theme === 'dark' 
        ? "min-h-screen bg-slate-900 font-sans text-slate-200 flex flex-col transition-colors duration-500" 
        : "min-h-screen bg-slate-100 font-sans text-slate-800 flex flex-col transition-colors duration-500";

    return (
        <div className={appClasses}>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main className="flex-grow flex flex-col items-center gap-8 p-8 max-w-6xl mx-auto w-full">
                <div className="flex flex-col md:flex-row gap-8 w-full">
                    <Experience theme={theme} />
                    <Skills theme={theme} />
                </div>
                {/* Новий компонент з відгуками */}
                <Reviews theme={theme} />
            </main>
            <Footer theme={theme} />
            
            {/* Новий компонент модального вікна */}
            <ContactForm theme={theme} />
        </div>
    );
}
export default App;