import { Player } from './../player';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-param-page',
  templateUrl: './param-page.component.html',
  styleUrls: ['./param-page.component.scss']
})
export class ParamPageComponent implements OnInit {

  public players : Array<Player> = [];

  private playerCounter = 2;

  constructor() { 
    for (let i = 0; i< this.playerCounter; i++){
      this.players.push(
        {name :'',}
      );
    }
  }

  public submit(){
    
  }

  ngOnInit(): void {
  }

  

}
