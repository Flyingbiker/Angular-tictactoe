import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  public grid : Array<any> = [];

  private gridSize = 9;

  constructor() { 
    for (let i = 0 ; i < this.gridSize ; i++){
      this.grid.push(null);
    }
  }

  ngOnInit(): void {
  }

}
