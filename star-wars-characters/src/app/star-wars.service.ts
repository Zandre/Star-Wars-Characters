import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable()
export class StarWarsService {
  private characters = [
    {
      name: "Luke Skywalker",
      side: "",
      lightsaber: ""
    },
    {
      name: "Darth Vader",
      side: "",
      lightsaber: ""
    },
    {
      name: "Han Solo",
      side: "",
      lightsaber: ""
    },
    {
      name: "Emperor Palpatine",
      side: "",
      lightsaber: ""
    },
    {
      name: "Yoda",
      side: "",
      lightsaber: ""
    },
    {
      name: "Darth Maul",
      side: "",
      lightsaber: ""
    },
    {
      name: "Obi-Wan Kenobi",
      side: "",
      lightsaber: ""
    },
    {
      name: "Princess Padme Amidala",
      side: "",
      lightsaber: ""
    },
    {
      name: "Chewbacka",
      side: "",
      lightsaber: ""
    },
    {
      name: "Count Dookoo",
      side: "",
      lightsaber: ""
    }
  ];

  private logService: LogService;
  http: Http;
  charactersChanged = new Subject<void>();

  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
  }

  fetchCharacters() {
    this.http
      .get("https://swapi.co/api/people/")
      .map((response: Response) => {
        const data = response.json();
        const extractedChars = data.results;
        const chars = extractedChars.map(char => {
          return { name: char.name, side: "" };
        });
        return chars;
      })
      .subscribe(data => {
        console.log(data);
        this.characters = data;
        this.charactersChanged.next();
      });
  }

  getCharacters(chosenList) {
    if (chosenList === "all") {
      return this.characters.slice();
    }

    return this.characters.filter(char => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex(char => {
      return char.name === charInfo.name;
    });

    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next();

    if(charInfo.side === 'dark') {
      console.error("This is probably something a test analyst should log for dev")
    }
  }

  onSaberChosen(charInfo) {
    const pos = this.characters.findIndex(char => {
      return char.name === charInfo.name;
    });

    this.characters[pos].lightsaber = charInfo.saber;
    this.charactersChanged.next();
  }

  addCharacter(name, side, saber) {
    const pos = this.characters.findIndex(char => {
      return char.name === name;
    });

    if (pos !== -1) {
      return;
    }

    const newChar = { name: name, side: side, lightsaber: saber };
    this.characters.push(newChar);
  }
}
