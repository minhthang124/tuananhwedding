export const audio = (() => {

    let music = null;
    let audio = null;

    // Danh sách nhạc
    const musicList = [
        './assets/music/sound.mp3',
        './assets/music/sound1.mp3',
        './assets/music/sound2.mp3',
        './assets/music/sound3.mp3',
        './assets/music/sound4.mp3'
    ];

    const init = () => {
        music = document.getElementById('button-music');
        
        // Chọn ngẫu nhiên một bài nhạc từ danh sách
        const randomIndex = Math.floor(Math.random() * musicList.length);
        const randomSong = musicList[randomIndex];

        // Tạo đối tượng Audio với bài nhạc ngẫu nhiên
        audio = new Audio(randomSong);
        audio.currentTime = 0;
        audio.autoplay = false;
        audio.muted = false;
        audio.loop = true;
        audio.volume = 1;
        audio.controls = false;
        audio.preload = 'auto';
    };

    const button = async (button) => {
        if (button.getAttribute('data-status') !== 'true') {
            await audio.play();
            button.setAttribute('data-status', 'true');
            button.innerHTML = '<i class="fa-solid fa-circle-pause spin-button"></i>';
            return;
        }

        button.setAttribute('data-status', 'false');
        audio.pause();
        button.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
    };

    const showButton = () => {
        music.style.display = 'block';
    };

    return {
        init,
        play: () => audio.play(),
        button,
        showButton,
    };
})();
