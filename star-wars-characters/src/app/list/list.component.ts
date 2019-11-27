import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from 'app/star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters = [];
  activedRoute: ActivatedRoute;
  swService: StarWarsService;

  constructor(activedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activedRoute = activedRoute;
    this.swService = swService;
   }

  ngOnInit() {
  this.activedRoute.params.subscribe(
    (params) => {
      this.characters = this.swService.getCharacters(params.side);
    }
  )
  }
}
