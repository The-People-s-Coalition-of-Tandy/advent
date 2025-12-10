document.addEventListener('DOMContentLoaded', () => {
    const gift = document.querySelector('.gift');
    const today = new Date().getDate();

   

                gift.addEventListener('click', () => {
                    openGift(gift);});
});
function openGift(gift, day) {
    gift.classList.add('opened');

    // localStorage.setItem(`gift-${day}`, true);
}

 // DELETE WHEN DONE IS FOR TESTING ONLY
document.addEventListener('keydown', (event) => {
    // Press 'c' or 'C' to clear all opened gifts and test mode
    if (event.key === 'c' || event.key === 'C') {
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('gift-') || key === 'test-mode') {
                localStorage.removeItem(key);
            }
        });
        location.reload();
    }
});