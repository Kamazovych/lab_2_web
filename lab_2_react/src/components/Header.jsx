function Header({ theme, toggleTheme }) {
    return (
        <header className={`flex flex-col items-center p-10 shadow-lg border-b-4 transition-colors duration-500 relative ${theme === 'dark' ? 'bg-slate-950 text-white border-slate-700' : 'bg-slate-900 text-white border-slate-700'}`}>
            <button 
                onClick={toggleTheme}
                className="absolute top-4 right-4 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-sm font-bold shadow transition"
            >
                {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
            </button>
            <h1 className="text-4xl font-bold mb-3 tracking-wide text-center mt-4">Штельма Владислав-Рустам Орестович</h1>
            <p className="text-lg text-slate-300 font-light">Студент спеціальності «Кібербезпека» | Львівська політехніка</p>
        </header>
    );
}
export default Header;