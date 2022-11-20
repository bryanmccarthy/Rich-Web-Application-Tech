import { fromEvent, timer } from 'rxjs';

const timerInput = {
  countdownButton: document.querySelector('.countdown-button'),
  hours: document.querySelector('.hours-input'),
  minutes: document.querySelector('.minutes-input'),
  seconds: document.querySelector('.seconds-input'),
}

const timerDisplay = document.querySelector('.timer');

const countdownEvent = fromEvent(timerInput.countdownButton, 'click');
countdownEvent.subscribe(() => countdownTimer(timerInput.hours.value, timerInput.minutes.value, timerInput.seconds.value));

const countdownTimer = (hours, minutes, seconds) => {
  const totalSeconds = (hours * 3600) + (minutes * 60) + Number(seconds);
  timer(0, 1000).subscribe((t) => {
    const totalSecondsRemaining = totalSeconds - t;
    if (totalSecondsRemaining < 0) { return; }
    const remainingHours = Math.floor(totalSecondsRemaining / 3600);
    const remainingMinutes = Math.floor((totalSecondsRemaining % 3600) / 60);
    const remainingSeconds = totalSecondsRemaining % 60;
    const timeRemaining = formatTime(remainingHours, remainingMinutes, remainingSeconds);
    timerDisplay.innerHTML = timeRemaining;
  });
}

const formatTime = (hours, minutes, seconds) => {
  hours = hours === 0 ? '' : (hours < 10 ? `0${hours}:` : `${hours}:`);
  minutes = minutes ===0 && hours === '' ? '' : (minutes < 10 ? `0${minutes}:` : `${minutes}:`);
  seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  
  return `${hours}${minutes}${seconds}`;
}
