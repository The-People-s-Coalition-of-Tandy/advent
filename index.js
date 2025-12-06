document.addEventListener('DOMContentLoaded', () => {
    const gifts = document.querySelectorAll('.gift');
    const today = new Date().getDate();

    for (let i = 0; i < today; i++) {
        if (localStorage.getItem(`gift-${i + 1}`)) {
            gifts[i].classList.add('opened');
        } else {
            gifts[i].addEventListener('click', () => {
                openGift(gifts[i], i + 1);
            });
        }
    }
});


function openGift(gift, day) {
    gift.classList.add('opened');
    // downloadGift(gift.querySelector('a').href, `gift-${day}.webp`);
    // store gift opened in local storage
    localStorage.setItem(`gift-${day}`, true);
}

function downloadGift(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error('Error:', error));
}

 // DELETE WHEN DONE IS FOR TESTING ONLY
document.addEventListener('keydown', (event) => {
    if (event.key === 'c' || event.key === 'C') {
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('gift-')) {
                localStorage.removeItem(key);
            }
        });
    }
    location.reload();
});