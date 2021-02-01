import { Player } from './player.d';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {

  public players : Array<Player> = [];

  private playerCounter = 2;

  constructor() { 
    for (let i = 0; i< this.playerCounter; i++){
      this.players.push(
        {name :'',}
      );
    }
  }

  public updatePalyers(players : Array<Player>):void {
    this.players = players.map((player: Player)=> {
      return Object.assign({}, player);
    });
  }

  public copyPlayers(): Array<Player>{
    const copy: Array<Player> = [];

    for (let player of this.players){
      //pour éviter de faire une référence mémoire 
      //(avec les variables complexes comme les objets et certains arrays)
      //et pour faire une copie
      copy.push(Object.assign({},player));
    }
    return copy;
  }

}