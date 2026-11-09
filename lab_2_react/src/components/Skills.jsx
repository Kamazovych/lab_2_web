function Skills({ theme }) {
    const cardBg = theme === 'dark' ? 'bg-slate-800 border-slate-500 text-slate-300' : 'bg-white border-slate-500 text-slate-600';
    const textHeader = theme === 'dark' ? 'text-white' : 'text-slate-900';
    const highlight = theme === 'dark' ? 'text-blue-300' : 'text-slate-800';

    return (
        <section className={`p-8 rounded-xl shadow-md border-t-4 w-full md:w-1/2 hover:-translate-y-1 transition duration-300 ${cardBg}`}>
            <h2 className={`text-2xl font-bold mb-4 border-b pb-2 ${textHeader}`}>Навички</h2>
            <ul className="list-disc list-inside space-y-3">
                <li><span className={`font-semibold ${highlight}`}>Розробка:</span> Python, C#, Git, HTML, Tailwind CSS, React</li>
                <li><span className={`font-semibold ${highlight}`}>Мережі:</span> Cisco Packet Tracer, маршрутизація, VLAN</li>
                <li><span className={`font-semibold ${highlight}`}>Апаратна частина:</span> Збірка ПК, розгін та діагностика (OCCT)</li>
            </ul>
        </section>
    );
}
export default Skills;