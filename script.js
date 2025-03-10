document.getElementById('decorate-btn').addEventListener('click', function() {
    document.getElementById('black-screen').style.display = 'none';
    document.getElementById('room-container').style.display = 'block';
    document.getElementById('bg-music').play();

    startCountdown();
});

document.getElementById('music-toggle').addEventListener('click', function() {
    let music = document.getElementById('bg-music');
    if (music.paused) {
        music.play();
        this.textContent = '🔊';
    } else {
        music.pause();
        this.textContent = '🔇';
    }
});

function startCountdown() {
    let countdown = 5;
    let countdownElement = document.getElementById('countdown');

    let interval = setInterval(() => {
        countdown--;
        countdownElement.innerText = countdown;
        
        if (countdown === 0) {
            clearInterval(interval);
            countdownElement.innerText = "🎂 Blow Now! 🎂";
            
            // Blow out candles
            setTimeout(() => {
                document.getElementById('cake').src = "Blow Candle GIF - Blow Candle Birthday - Discover & Share GIFs.gif";
                startFireworks();
                showBirthdayMessage(); // 🎉 Call the function after fireworks start
            }, 1000);
        }
    }, 1000);
}

function startFireworks() {
    let container = document.getElementById('fireworks-container');
    
    for (let i = 0; i < 50; i++) {
        let firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + "vw";
        firework.style.top = Math.random() * 100 + "vh";
        firework.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;

        container.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 2000);
    }
}

// ✅ This function is now outside and will be called correctly
function showBirthdayMessage() {
    let message = document.createElement('div');
    message.innerHTML = `🎉 Happy Birthday <span style="color: red;">Cherry</span>! 🎉`;
    message.style.position = 'absolute';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '40px';
    message.style.fontWeight = 'bold';
    message.style.color = 'white';
    message.style.background = 'rgba(0, 0, 0, 0.7)';
    message.style.padding = '20px';
    message.style.borderRadius = '10px';

    document.body.appendChild(message);
}
