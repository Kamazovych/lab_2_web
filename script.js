const VARIANT = 25;

document.addEventListener('DOMContentLoaded', () => {
    setupTheme();
    saveSystemInfo();
    showSystemInfo();
    loadComments();
    setupModal();
});

// 1. Інформація про систему в LocalStorage
function saveSystemInfo() {
    const info = {
        'ОС': navigator.platform,
        'Браузер': navigator.userAgent
    };
    localStorage.setItem('userSystemInfo', JSON.stringify(info));
}

function showSystemInfo() {
    const footerInfo = document.getElementById('system-info');
    const info = JSON.parse(localStorage.getItem('userSystemInfo')) || {};
    footerInfo.innerHTML = `<strong>LocalStorage:</strong> ОС: ${info['ОС']} | Браузер: ${info['Браузер']}`;
}

// 2. Отримання відгуків із сервера (Варіант 25)
async function loadComments() {
    const container = document.getElementById('comments-container');
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`);
        const comments = await response.json();
        
        container.innerHTML = '';
        comments.forEach(comment => {
            const card = document.createElement('div');
            card.className = 'comment-card';
            card.innerHTML = `
                <strong>${comment.name}</strong><br>
                <small>${comment.email}</small>
                <p>${comment.body}</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Помилка:', error);
        container.innerHTML = 'Не вдалося завантажити відгуки.';
    }
}

// 3. Модальне вікно (таймер 60 секунд)
function setupModal() {
    const modal = document.getElementById('feedback-modal');
    const closeBtn = document.getElementById('close-modal');
    
    // 60000 мілісекунд = 1 хвилина (зміни на 5000 для тестування)
    setTimeout(() => {
        modal.style.display = 'block';
    }, 60000);

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// 4. Розумна зміна теми
function setupTheme() {
    const currentHour = new Date().getHours();
    const body = document.body;
    const themeBtn = document.getElementById('theme-toggle');

    // Денна тема від 07:00 до 21:00
    if (currentHour >= 7 && currentHour < 21) {
        body.classList.add('light');
    } else {
        body.classList.add('dark');
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark');
        body.classList.toggle('light');
    });
}