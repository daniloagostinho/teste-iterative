import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class EventEmitterService {

  private static emitters: {
    [nomeEvento: string]: EventEmitter<any>
  } = {}


  private static showComicEvent: {
    [evento: string]: EventEmitter<any>
  } = {}

  static get (nomeEvento:string): EventEmitter<any> {
    if (!this.emitters[nomeEvento])
        this.emitters[nomeEvento] = new EventEmitter<any>();
    return this.emitters[nomeEvento];
}

  static showComics(evento: string): EventEmitter<any>{
    if (!this.showComicEvent[evento])
    this.showComicEvent[evento] = new EventEmitter<any>();
      return this.showComicEvent[evento];
  }

  constructor() { }

}
