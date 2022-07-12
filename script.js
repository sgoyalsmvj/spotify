console.log("welcome to spotify");
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let masterSongName = document.getElementById('masterSongName');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    { songName: "WE ROLLIN - SHUBH", filePath: "songs/1.mp3", coverPath: "covers/1.jfif" },
    { songName: "EXCUSES - AP DHILLON", filePath: "songs/2.mp3", coverPath: "covers/2.jfif" },
    { songName: "NOTORIOUS", filePath: "songs/3.mp3", coverPath: "covers/3.jfif" },
    { songName: "DESIRE - AP DHILLON", filePath: "songs/4.mp3", coverPath: "covers/4.jfif" },
    { songName: "ELEVATED - SHUBH", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "SPACESHIP - AP DHILLON ", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "KOLAVERI DI - DHANUSH", filePath: "songs/7.mp3", coverPath: "covers/7.png" },
    { songName: "TOXIC - AP DHILLON ", filePath: "songs/8.mp3", coverPath: "covers/8.jfif" },
]
songitem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

// audioElement.play();
//handle play pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        // gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        // gif.style.opacity = 0;
    }
})
const makeAllPlays = () => {

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-play-circle');

    })
}
//Listen to events
audioElement.addEventListener('timeupdate', () => {

    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100
})
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();

        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        // gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >=9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

