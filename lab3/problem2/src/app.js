import { fromEvent, timer } from 'rxjs';

const countdownButton = document.querySelector('.countdown-button');
const hours = document.querySelector('.hours-input');
const minutes = document.querySelector('.minutes-input');
const seconds = document.querySelector('.seconds-input');

const countdownEvent = fromEvent(countdownButton, 'click');
countdownEvent.subscribe((e) => countdownTimer(hours.value, minutes.value, seconds.value));

const countdownTimer = (hours, minutes, seconds) => {
  const totalSeconds = (hours * 3600) + (minutes * 60) + Number(seconds);
  timer(0, 1000).subscribe((t) => {
    const totalSecondsRemaining = totalSeconds - t;
    const remainingHours = Math.floor(totalSecondsRemaining / 3600);
    const remainingMinutes = Math.floor((totalSecondsRemaining % 3600) / 60);
    const remainingSeconds = totalSecondsRemaining % 60;
    console.log(`${remainingHours}:${remainingMinutes}:${remainingSeconds}`);
  });
}