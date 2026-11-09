import { useState, useEffect } from 'react';

function ContactForm({ theme }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Вікно вискочить через 60 секунд (60000 мс)
        // Для тестування можеш змінити 60000 на 5000 (5 секунд), щоб не чекати довго!
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000); 

        // Очищення таймера
        return () => clearTimeout(timer);
    }, []);

    // Якщо isOpen дорівнює false, компонент нічого не малює на екрані
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className={`p-8 rounded-xl shadow-2xl w-full max-w-md relative ${theme === 'dark' ? 'bg-slate-900 text-white border border-slate-700' : 'bg-white text-slate-900'}`}>
                <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-red-500 font-bold hover:scale-125 transition-transform"
                >
                    ✖
                </button>
                <h2 className="text-2xl font-bold mb-6 text-center">Залишити відгук</h2>
                
                {/* ТУТ ВСТАВ СВІЙ ENDPOINT ЗАМІСТЬ YOUR_ENDPOINT */}
                <form action="https://formspree.io/f/mdeerrjy" method="POST" className="flex flex-col gap-4">
                    <input type="text" name="name" placeholder="Ваше ім'я" required className={`p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                    <input type="email" name="email" placeholder="Ваш Email" required className={`p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                    <input type="tel" name="phone" placeholder="Номер телефону" required className={`p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} />
                    <textarea name="message" placeholder="Ваше повідомлення" rows="4" required className={`p-3 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === 'dark' ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}></textarea>
                    
                    <button type="submit" className="bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition mt-2">
                        Надіслати
                    </button>
                </form>
            </div>
        </div>
    );
}
export default ContactForm;