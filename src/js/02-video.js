import  Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const localStorageKey = "videoplayer-current-time";

player.on("timeupdate", throttle(onPlay, 1000));


function onPlay({ seconds }) {
  localStorage.setItem(localStorageKey, seconds);
}



setCurrentTime();

function setCurrentTime() {
    if (localStorage.getItem(localStorageKey)) {
      player.setCurrentTime(localStorage.getItem(localStorageKey));
    }
  }
