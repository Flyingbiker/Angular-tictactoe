import { ParamsService } from './../params.service';
import { Cell } from './../cell.d';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  public grid : Array<Cell> = [];

  private gridSize = 9;

  constructor( private paramsService :ParamsService) { 
    for (let i = 0 ; i < this.gridSize ; i++){
      this.grid.push({
        empty: true,
        cross: false,
        circle: false,
      });
    }
  }

  ngOnInit(): void {
  }

  public clickOnCell(cellule : Cell): void {
    cellule.empty = false;
    cellule.cross= true;
  }
}
