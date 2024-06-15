document.addEventListener('DOMContentLoaded', () => {
    const countries = {
        "Afghanistan": "🇦🇫", "Albania": "🇦🇱", "Algeria": "🇩🇿", "Andorra": "🇦🇩", "Angola": "🇦🇴",
        "Antigua and Barbuda": "🇦🇬", "Argentina": "🇦🇷", "Armenia": "🇦🇲", "Australia": "🇦🇺", "Austria": "🇦🇹",
        "Azerbaijan": "🇦🇿", "Bahamas": "🇧🇸", "Bahrain": "🇧🇭", "Bangladesh": "🇧🇩", "Barbados": "🇧🇧",
        "Belarus": "🇧🇾", "Belgium": "🇧🇪", "Belize": "🇧🇿", "Benin": "🇧🇯", "Bhutan": "🇧🇹",
        "Bolivia": "🇧🇴", "Bosnia and Herzegovina": "🇧🇦", "Botswana": "🇧🇼", "Brazil": "🇧🇷", "Brunei": "🇧🇳",
        "Bulgaria": "🇧🇬", "Burkina Faso": "🇧🇫", "Burundi": "🇧🇮", "Cabo Verde": "🇨🇻", "Cambodia": "🇰🇭",
        "Cameroon": "🇨🇲", "Canada": "🇨🇦", "Central African Republic": "🇨🇫", "Chad": "🇹🇩", "Chile": "🇨🇱",
        "China": "🇨🇳", "Colombia": "🇨🇴", "Comoros": "🇰🇲", "Congo, Democratic Republic of the": "🇨🇩", "Congo, Republic of the": "🇨🇬",
        "Costa Rica": "🇨🇷", "Croatia": "🇭🇷", "Cuba": "🇨🇺", "Cyprus": "🇨🇾", "Czech Republic": "🇨🇿",
        "Denmark": "🇩🇰", "Djibouti": "🇩🇯", "Dominica": "🇩🇲", "Dominican Republic": "🇩🇴", "Ecuador": "🇪🇨",
        "Egypt": "🇪🇬", "El Salvador": "🇸🇻", "Equatorial Guinea": "🇬🇶", "Eritrea": "🇪🇷", "Estonia": "🇪🇪",
        "Eswatini": "🇸🇿", "Ethiopia": "🇪🇹", "Fiji": "🇫🇯", "Finland": "🇫🇮", "France": "🇫🇷",
        "Gabon": "🇬🇦", "Gambia": "🇬🇲", "Georgia": "🇬🇪", "Germany": "🇩🇪", "Ghana": "🇬🇭",
        "Greece": "🇬🇷", "Grenada": "🇬🇩", "Guatemala": "🇬🇹", "Guinea": "🇬🇳", "Guinea-Bissau": "🇬🇼",
        "Guyana": "🇬🇾", "Haiti": "🇭🇹", "Honduras": "🇭🇳", "Hungary": "🇭🇺", "Iceland": "🇮🇸",
        "India": "🇮🇳", "Indonesia": "🇮🇩", "Iran": "🇮🇷", "Iraq": "🇮🇶", "Ireland": "🇮🇪",
        "Israel": "🇮🇱", "Italy": "🇮🇹", "Jamaica": "🇯🇲", "Japan": "🇯🇵", "Jordan": "🇯🇴",
        "Kazakhstan": "🇰🇿", "Kenya": "🇰🇪", "Kiribati": "🇰🇮", "Kuwait": "🇰🇼", "Kyrgyzstan": "🇰🇬",
        "Laos": "🇱🇦", "Latvia": "🇱🇻", "Lebanon": "🇱🇧", "Lesotho": "🇱🇸", "Liberia": "🇱🇷",
        "Libya": "🇱🇾", "Liechtenstein": "🇱🇮", "Lithuania": "🇱🇹", "Luxembourg": "🇱🇺", "Madagascar": "🇲🇬",
        "Malawi": "🇲🇼", "Malaysia": "🇲🇾", "Maldives": "🇲🇻", "Mali": "🇲🇱", "Malta": "🇲🇹",
        "Marshall Islands": "🇲🇭", "Mauritania": "🇲🇷", "Mauritius": "🇲🇺", "Mexico": "🇲🇽", "Micronesia": "🇫🇲",
        "Moldova": "🇲🇩", "Monaco": "🇲🇨", "Mongolia": "🇲🇳", "Montenegro": "🇲🇪", "Morocco": "🇲🇦",
        "Mozambique": "🇲🇿", "Myanmar": "🇲🇲", "Namibia": "🇳🇦", "Nauru": "🇳🇷", "Nepal": "🇳🇵",
        "Netherlands": "🇳🇱", "New Zealand": "🇳🇿", "Nicaragua": "🇳🇮", "Niger": "🇳🇪", "Nigeria": "🇳🇬",
        "North Macedonia": "🇲🇰", "Norway": "🇳🇴", "Oman": "🇴🇲", "Pakistan": "🇵🇰", "Palau": "🇵🇼",
        "Panama": "🇵🇦", "Papua New Guinea": "🇵🇬", "Paraguay": "🇵🇾", "Peru": "🇵🇪", "Philippines": "🇵🇭",
        "Poland": "🇵🇱", "Portugal": "🇵🇹", "Qatar": "🇶🇦", "Romania": "🇷🇴", "Russia": "🇷🇺",
        "Rwanda": "🇷🇼", "Saint Kitts and Nevis": "🇰🇳", "Saint Lucia": "🇱🇨", "Saint Vincent and the Grenadines": "🇻🇨", "Samoa": "🇼🇸",
        "San Marino": "🇸🇲", "Sao Tome and Principe": "🇸🇹", "Saudi Arabia": "🇸🇦", "Senegal": "🇸🇳", "Serbia": "🇷🇸",
        "Seychelles": "🇸🇨", "Sierra Leone": "🇸🇱", "Singapore": "🇸🇬", "Slovakia": "🇸🇰", "Slovenia": "🇸🇮",
        "Solomon Islands": "🇸🇧", "Somalia": "🇸🇴", "South Africa": "🇿🇦", "South Sudan": "🇸🇸", "Spain": "🇪🇸",
        "Sri Lanka": "🇱🇰", "Sudan": "🇸🇩", "Suriname": "🇸🇷", "Sweden": "🇸🇪", "Switzerland": "🇨🇭",
        "Syria": "🇸🇾", "Taiwan": "🇹🇼", "Tajikistan": "🇹🇯", "Tanzania": "🇹🇿", "Thailand": "🇹🇭",
        "Timor-Leste": "🇹🇱", "Togo": "🇹🇬", "Tonga": "🇹🇴", "Trinidad and Tobago": "🇹🇹", "Tunisia": "🇹🇳",
        "Turkey": "🇹🇷", "Turkmenistan": "🇹🇲", "Tuvalu": "🇹🇻", "Uganda": "🇺🇬", "Ukraine": "🇺🇦",
        "United Arab Emirates": "🇦🇪", "United Kingdom": "🇬🇧", "United States": "🇺🇸", "Uruguay": "🇺🇾", "Uzbekistan": "🇺🇿",
        "Vanuatu": "🇻🇺", "Vatican City": "🇻🇦", "Venezuela": "🇻🇪", "Vietnam": "🇻🇳", "Yemen": "🇾🇪",
        "Zambia": "🇿🇲", "Zimbabwe": "🇿🇼"
    };

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let timerElement = document.getElementById('timer');
    let scoreElement = document.getElementById('score');
    let wordInput = document.getElementById('word');
    let highScoreList = document.getElementById('high-score-list');
    let playerNameInput = document.getElementById('player-name');
    let countryFlagSelect = document.getElementById('country-flag');
    let startGameBtn = document.getElementById('start-game-btn');
    let page1 = document.getElementById('page1');
    let page2 = document.getElementById('page2');
    let page3 = document.getElementById('page3');
    let playerDisplay = document.getElementById('player-display');
    let countryDisplay = document.getElementById('country-display');
    let wordListTable = document.getElementById('word-list').querySelector('tbody');
    let finalWordListTable = document.getElementById('final-word-list').querySelector('tbody');
    let totalScoreElement = document.getElementById('total-score');
    let rankElement = document.getElementById('rank');

    let timeLeft = 120;
    let score = 0;
    let highScores = [];
    let gameStarted = false;
    let selectedLetters = [];
    let foundWords = {};

    // Populate country select options
    for (let country in countries) {
        let option = document.createElement('option');
        option.value = country;
        option.textContent = `${countries[country]} ${country}`;
        countryFlagSelect.appendChild(option);
    }

    const generateRandomLetters = () => {
        let letterArray = [];
        for (let i = 0; i < 9; i++) {
            letterArray.push(letters[Math.floor(Math.random() * letters.length)]);
        }
        return letterArray;
    };

    const createBoard = (letters) => {
        let board = document.getElementById('board');
        board.innerHTML = '';
        for (let i = 0; i < 9; i++) {
            let tile = document.createElement('div');
            tile.className = 'tile';
            tile.id = `tile-${i}`;
            tile.textContent = letters[i];
            tile.addEventListener('click', () => {
                if (gameStarted) {
                    selectedLetters.push(tile.textContent);
                    wordInput.value = selectedLetters.join('');
                }
            });
            board.appendChild(tile);
        }
    };

    const startTimer = () => {
        const countdown = setInterval(() => {
            if (!gameStarted) {
                clearInterval(countdown);
                return;
            }

            timeLeft--;
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            timerElement.textContent = `Time: ${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

            if (timeLeft <= 0) {
                clearInterval(countdown);
                endGame();
            }
        }, 1000);
    };

    const endGame = () => {
        gameStarted = false;
        alert(`Time's up! Your score is: ${score}`);
        saveHighScore();
        displayResults();
    };

    const saveHighScore = () => {
        let playerName = playerNameInput.value || 'Anonymous';
        let country = countryFlagSelect.value || 'Unknown';
        highScores.push({ name: playerName, country: country, score: score });
        updateHighScoreList();
    };

    const updateHighScoreList = () => {
        highScoreList.innerHTML = '';
        highScores.sort((a, b) => b.score - a.score);
        highScores.forEach((entry, index) => {
            let li = document.createElement('li');
            li.textContent = `${index + 1}. ${entry.name} (${entry.country}): ${entry.score}`;
            highScoreList.appendChild(li);
        });
    };

    const displayResults = () => {
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
        totalScoreElement.textContent = score;
        // Assume rank calculation
        rankElement.textContent = `#${highScores.findIndex(entry => entry.score === score) + 1}`;
        // Populate final word list
        finalWordListTable.innerHTML = '';
        Object.keys(foundWords).forEach(word => {
            let tr = document.createElement('tr');
            let valid = true; // For simplicity, assume all words are valid
            tr.innerHTML = `<td>${word}</td><td>${valid}</td><td>${foundWords[word].score}</td><td>${foundWords[word].time}</td>`;
            finalWordListTable.appendChild(tr);
        });
    };

    const rotateBoard = () => {
        let board = document.getElementById('board');
        let tiles = Array.from(board.children);
        tiles.unshift(tiles.pop());
        board.innerHTML = '';
        tiles.forEach(tile => board.appendChild(tile));
    };

    const submitWord = () => {
        let word = wordInput.value.toUpperCase();
        if (word.length >= 3 && word.length <= 20 && !foundWords[word]) {
            let wordScore = word.length * 100 * (120 - timeLeft);
            score += wordScore;
            scoreElement.textContent = `Score: ${score}`;
            foundWords[word] = { score: wordScore, time: 120 - timeLeft };
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${word}</td><td>${wordScore}</td><td>${120 - timeLeft}</td>`;
            wordListTable.appendChild(tr);
        }
        wordInput.value = '';
        selectedLetters = [];
    };

    document.getElementById('rotate-btn').addEventListener('click', rotateBoard);
    document.getElementById('submit-word-btn').addEventListener('click', submitWord);
    document.getElementById('backspace-btn').addEventListener('click', () => {
        selectedLetters.pop();
        wordInput.value = selectedLetters.join('');
    });
    document.getElementById('reset-btn').addEventListener('click', () => location.reload());
    document.getElementById('new-game-btn').addEventListener('click', () => location.reload());

    startGameBtn.addEventListener('click', () => {
        let playerName = playerNameInput.value;
        let country = countryFlagSelect.value;
        if (playerName && country) {
            playerDisplay.textContent = playerName;
            countryDisplay.textContent = countries[country];
            page1.classList.add('hidden');
            page2.classList.remove('hidden');
            createBoard(generateRandomLetters());
            gameStarted = true;
            startTimer();
        } else {
            alert('Please enter your name and select your country.');
        }
    });
});
