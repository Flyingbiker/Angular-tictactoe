import { ParamsService } from './../params.service';
import { Player } from './../player';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-param-page',
  templateUrl: './param-page.component.html',
  styleUrls: ['./param-page.component.scss']
})
export class ParamPageComponent implements OnInit {

  public players : Array<Player> = [];
  
  constructor(private paramsService : ParamsService) { 
    this.players = this.paramsService.copyPlayers();
  }

  // et le getter est appelé par le ngFor dans le HTML (d'où le même nom)
  // où le faire comme j'avais l'habitude de le faire 
  // (déclaration varaible + assignation dans le constructeur)
  
  public submit():void{
    this.paramsService.updatePlayers(this.players);
  }

  ngOnInit(): void {
    
  }

}
