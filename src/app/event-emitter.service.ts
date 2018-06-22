import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class EventEmitterService {

  private static emitters: {
    [nomeEvento: string]: EventEmitter<any>
  } = {}


  private static showComicEvent: {
    [comicEvent: string]: EventEmitter<any>
  }

  static get (nomeEvento:string): EventEmitter<any> {
    if (!this.emitters[nomeEvento])
        this.emitters[nomeEvento] = new EventEmitter<any>();
    return this.emitters[nomeEvento];
}

  static showComics(removeComic: string) {
    if (!this.showComicEvent[removeComic])
    this.emitters[removeComic] = new EventEmitter<any>();
      return this.emitters[removeComic];
  }

  constructor() { }

}
