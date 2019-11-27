import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { StarWarsService } from "app/star-wars.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit, OnDestroy {
  characters = [];
  activedRoute: ActivatedRoute;
  swService: StarWarsService;
  loadedSide = "all";
  subscription: Subscription;

  constructor(activedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activedRoute = activedRoute;
    this.swService = swService;
  }

  ngOnInit() {
    this.activedRoute.params.subscribe(params => {
      this.characters = this.swService.getCharacters(params.side);
      this.loadedSide = params.side;
    });

    this.subscription = this.swService.charactersChanged.subscribe(() => {
      this.characters = this.swService.getCharacters(this.loadedSide);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
