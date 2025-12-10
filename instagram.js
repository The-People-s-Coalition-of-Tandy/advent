document.addEventListener('DOMContentLoaded', () => {
    const giftSquare = document.getElementById('giftSquare');
    const giftContent = document.getElementById('giftContent');
    
    giftSquare.addEventListener('click', () => {
        if (!giftSquare.classList.contains('opened')) {
            giftSquare.classList.add('opened');
            giftContent.classList.remove('hidden');
        }
    });
});

