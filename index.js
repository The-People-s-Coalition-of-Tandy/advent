document.addEventListener('DOMContentLoaded', () => {
    const gifts = document.querySelectorAll('.gift');
    const today = new Date().getDate();
    const testMode = localStorage.getItem('test-mode') === 'true';

    if (testMode) {
        // In test mode, enable all gifts
        gifts.forEach((gift, i) => {
            const day = i + 1;
            if (localStorage.getItem(`gift-${day}`)) {
                gift.classList.add('opened');
            }
            gift.addEventListener('click', () => {
                openGift(gift, day);
            });
        });
    } else {
        // Normal mode: only enable gifts up to today
        for (let i = 0; i < today; i++) {
            if (localStorage.getItem(`gift-${i + 1}`)) {
                gifts[i].classList.add('opened');
            } else {
                gifts[i].addEventListener('click', () => {
                    openGift(gifts[i], i + 1);
                });
            }
        }
    }

    // get the album of the day
    const albumOfTheDay = document.getElementById('albumOfTheDay');

    const albums = [
        {
            name: 'Tetso Cube Lightride',
            artist: 'elie mcafee-hahn',
            image: 'https://f4.bcbits.com/img/a0407768854_16.jpg',
            link: 'https://31i3.bandcamp.com/album/tetso-cube-lightride',
            number: 'PCoT0002'
        },
        {
            name: 'Centre St',
            artist: 'Sam Walters',
            image: 'https://f4.bcbits.com/img/a3214195086_16.jpg',
            link: 'https://tandy.bandcamp.com/album/centre-st',
            number: 'PCoT0005'
        },
        {
            name: 'Slow Gold',
            artist: 'Nick Bisceglia',
            image: 'https://f4.bcbits.com/img/a2054536668_16.jpg',
            link: 'https://tandy.bandcamp.com/album/slow-gold',
            number: 'PCoT0007'
        },
        {
            name: 'Lands End',
            artist: 'Ko T. C.',
            image: 'https://f4.bcbits.com/img/a1236336834_16.jpg',
            link: 'https://kot-c.bandcamp.com/track/lands-end-3',
            number: 'PCoT0008'
        },
        {
            name: 'EV1',
            artist: 'LE1',
            image: 'https://f4.bcbits.com/img/a1584703535_16.jpg',
            link: 'https://tandy.bandcamp.com/album/ev1',
            number: 'PCoT0009'
        },
        {
            name: 'Into the Blue',
            artist: 'BLUE DiSH',
            image: 'https://f4.bcbits.com/img/a0620327589_16.jpg',
            link: 'https://bluedish.bandcamp.com/album/into-the-blue',
            number: 'PCoT0010'
        },
        {
            name: 'Tubis',
            artist: 'Katarina Mazur',
            image: 'https://f4.bcbits.com/img/a3449292959_16.jpg',
            link: 'https://tandy.bandcamp.com/track/tubis',
            number: 'PCoT0011'
        },
        {
            name: '°‚°‚°‚°‚°‚°⌠ƞɛᶉ𝐌𝐈𝐃𝐈𝐕𝐎𝐗#5…√ƞɛᶉßʃ▼ßʃ°°ɱ‚°‚°‚°‚°‚°‚°',
            artist: 'Jack Hamill',
            image: 'https://f4.bcbits.com/img/a4117248997_16.jpg',
            link: 'https://jack-hamill.bandcamp.com/album/5',
            number: 'PCoT0014'
        },
        {
            name: 'tupping time plus',
            artist: 'Calvin Grad',
            image: 'https://f4.bcbits.com/img/a0245879916_16.jpg',
            link: 'https://tandy.bandcamp.com/album/tupping-time-plus',
            number: 'PCoT0017'
        },
        {
            name: '33rd General MIDI Competition',
            artist: 'Various Artists',
            image: 'https://f4.bcbits.com/img/a2861093553_16.jpg',
            link: 'https://tandy.bandcamp.com/album/33rd-general-midi-competition-the-pcot-2024-metaball-lyke-baron-prime-competition-zrainbow-geometrie-740',
            number: 'PCoT0018'
        },
        {
            name: 'No Sun On Main Street',
            artist: 'elie mcafee-hahn',
            image: 'https://f4.bcbits.com/img/a4226711248_16.jpg',
            link: 'https://31i3.bandcamp.com/album/no-sun-on-main-street',
            number: 'PCoT0020'
        },
        {
            name: 'Ай ну люлі',
            artist: 'Katarina Mazur',
            image: 'https://f4.bcbits.com/img/a0876248695_16.jpg',
            link: 'https://tandy.bandcamp.com/album/--2',
            number: 'PCoT0021'
        },
        {
            name: 'Change Ringing In America',
            artist: 'elie mcafee-hahn',
            image: 'https://f4.bcbits.com/img/a0061725542_16.jpg',
            link: 'https://31i3.bandcamp.com/album/change-ringing-in-america',
            number: 'PCoT0024'
        },
        {
            name: 'Where UFOs fear to tread',
            artist: 'the lentils',
            image: 'https://f4.bcbits.com/img/a0114017125_16.jpg',
            link: 'https://tandy.bandcamp.com/album/where-ufos-fear-to-tread',
            number: 'PCoT0025'
        },
        {
            name: 'Victim of Cars',
            artist: 'frogluv',
            image: 'https://f4.bcbits.com/img/a0700665206_16.jpg',
            link: 'https://tandy.bandcamp.com/album/victim-of-cars',
            number: 'PCoT0029'
        },
        {
            name: 'The Whiff',
            artist: 'Old Maybe',
            image: 'https://f4.bcbits.com/img/a2927081792_16.jpg',
            link: 'https://oldmaybe.bandcamp.com/album/the-whiff',
            number: 'PCoT0031'
        },
        {
            name: 'Two Hundred Inches Of Gentle British Rain',
            artist: 'Nick Bisceglia',
            image: 'https://f4.bcbits.com/img/a3119153045_16.jpg',
            link: 'https://tandy.bandcamp.com/album/two-hundred-inches-of-gentle-british-rain',
            number: 'PCoT0032'
        },
        {
            name: 'Fool',
            artist: 'Talulah Paisley',
            image: 'https://f4.bcbits.com/img/a2939815975_16.jpg',
            link: 'https://tandy.bandcamp.com/album/fool',
            number: 'PCoT0033'
        },      
    ]

    // Calculate album of the day based on date
    // December 8th = first album (index 0), December 9th = second album (index 1), etc.
    function getAlbumOfTheDayIndex() {
        const today = new Date();
        const month = today.getMonth(); // 0-11, where 11 is December
        const day = today.getDate();
        
        // If it's December and day >= 8, calculate index
        if (month === 11 && day >= 8) {
            const index = day - 8;
            // If index exceeds array length, show last album
            return Math.min(index, albums.length - 1);
        }
        // Before December 8th, show first album
        return 0;
    }

    const albumIndex = getAlbumOfTheDayIndex();
    const selectedAlbum = albums[albumIndex];

    albumOfTheDay.innerHTML = `
    <h3>Today's Featured Album!</h3>
    <div class="album-container">
    <img src="${selectedAlbum.image}" alt="${selectedAlbum.name}">
    <div class="album-info">
        <h4>${selectedAlbum.name}</h4>
        <p>by ${selectedAlbum.artist}</p>
    </div>
        <a href="${selectedAlbum.link}" target="_blank">Buy now!</a>
    </div>
    `;
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
    // Press 'c' or 'C' to clear all opened gifts and test mode
    if (event.key === 'c' || event.key === 'C') {
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('gift-') || key === 'test-mode') {
                localStorage.removeItem(key);
            }
        });
        location.reload();
    }
    // Press 't' or 'T' to enable all gifts for testing
    if (event.key === 't' || event.key === 'T') {
        localStorage.setItem('test-mode', 'true');
        location.reload();
    }
});