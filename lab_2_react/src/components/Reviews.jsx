import { useState, useEffect } from 'react';

function Reviews({ theme }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Fetch API - Запит на безкоштовний сервер, цифра 25 - це твій варіант
        fetch('https://jsonplaceholder.typicode.com/posts/25/comments')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Помилка при завантаженні відгуків:', error));
    }, []);

    const cardBg = theme === 'dark' ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-slate-600';

    return (
        <section className="w-full mt-4">
            <h2 className={`text-2xl font-bold mb-6 text-center ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Відгуки попередніх клієнтів (З сервера)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map(review => (
                    <div key={review.id} className={`p-6 rounded-xl shadow-md border hover:scale-105 transition-transform ${cardBg}`}>
                        <h3 className="font-bold mb-2 text-blue-500 break-words">{review.name}</h3>
                        <p className="text-sm mb-4 opacity-60">{review.email}</p>
                        <p className="italic">"{review.body}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Reviews;