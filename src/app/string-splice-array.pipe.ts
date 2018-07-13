import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'stringSpliceArray'})
export class StringSpliceArrayPipe implements PipeTransform {
	transform(value: string): string[] {
		return value.split(',');
	}
}