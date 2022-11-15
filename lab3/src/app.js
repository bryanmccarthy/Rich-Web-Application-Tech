import { fromEvent } from 'rxjs';

const button = document.querySelector('button');

fromEvent(button, 'click').subscribe(() => console.log('clicked'));