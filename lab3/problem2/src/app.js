import { fromEvent } from 'rxjs';

const countdownButton = document.querySelector('.countdown-button');
const hours = document.querySelector('.hours-input');
const minutes = document.querySelector('.minutes-input');
const seconds = document.querySelector('.seconds-input');

const countdownEvent = fromEvent(countdownButton, 'click');
countdownEvent.subscribe((e) => console.log(`${hours.value}:${minutes.value}:${seconds.value}`));
