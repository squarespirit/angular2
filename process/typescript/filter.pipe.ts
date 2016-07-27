import {Pipe, PipeTransform} from 'angular2/core';
import {Artist} from './artist';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(artistList: Artist[], args: any[]) {
    let query: string = args[0];
    return artistList.filter(artist => {
      return artist['name'].toLowerCase().includes(query.toLowerCase()) ||
          artist['reknown'].toLowerCase().includes(query.toLowerCase());
    });
  }
}