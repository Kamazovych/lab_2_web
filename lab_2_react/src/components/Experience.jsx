function Experience({ theme }) {
    const cardBg = theme === 'dark' ? 'bg-slate-800 border-slate-600 text-slate-200' : 'bg-white border-slate-800 text-slate-600';
    const textHeader = theme === 'dark' ? 'text-white' : 'text-slate-900';

    return (
        <section className={`p-8 rounded-xl shadow-md border-t-4 w-full md:w-1/2 hover:-translate-y-1 transition duration-300 ${cardBg}`}>
            <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${textHeader}`}>Досвід роботи</h2>
            <ul className="list-disc list-inside space-y-3">
                <li>Сфера логістики та обслуговування (Близенько, Купава).</li>
                <li>Діагностика, обслуговування та налаштування комп'ютерної техніки.</li>
            </ul>
        </section>
    );
}
export default Experience;