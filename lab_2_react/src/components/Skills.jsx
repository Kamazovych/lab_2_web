function Skills() {
    return (
        <section className="bg-white p-8 rounded-xl shadow-md border-t-4 border-slate-500 w-full md:w-1/2 hover:-translate-y-1 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 border-b pb-2">Навички</h2>
            <ul className="list-disc list-inside space-y-3 text-slate-600">
                <li><span className="font-semibold text-slate-800">Розробка:</span> Python, C#, Git, HTML, Tailwind CSS</li>
                <li><span className="font-semibold text-slate-800">Мережі:</span> Cisco Packet Tracer, маршрутизація, VLAN</li>
                <li><span className="font-semibold text-slate-800">Апаратна частина:</span> Збірка ПК, розгін та діагностика (OCCT)</li>
            </ul>
        </section>
    );
}

export default Skills;