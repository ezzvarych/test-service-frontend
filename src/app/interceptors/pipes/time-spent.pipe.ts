import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeSpent'
})
export class TimeSpentPipe implements PipeTransform {

  transform(timeMilliSpent: number, ...args: unknown[]): string {
    const normalizeTime = (time: string): string => (time.length === 1) ? time.padStart(2, '0') : time;

    let seconds: string = (timeMilliSpent / 1000).toFixed(0);
    let minutes: string = Math.floor(parseInt(seconds, 10) / 60).toString();
    let hours = '';
    if (parseInt(minutes, 10) > 59) {
      hours = normalizeTime(Math.floor(parseInt(minutes, 10) / 60).toString());
      minutes = normalizeTime((parseInt(minutes, 10) - (parseInt(hours, 10) * 60)).toString());
    }
    seconds = normalizeTime(Math.floor(parseInt(seconds, 10) % 60).toString());

    if (hours !== '') {
      return `${hours}:${minutes}:${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

}
