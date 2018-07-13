import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'timeMinutes'})
export class TimeMinutesPipe implements PipeTransform {
	transform(time: string): number {
		let disPlayLength: string;
    	let timeStr: string[] = time.split(":");
    	let len: number = parseInt(timeStr[0])*60 + parseInt(timeStr[1]);
    	return len;
	}
}