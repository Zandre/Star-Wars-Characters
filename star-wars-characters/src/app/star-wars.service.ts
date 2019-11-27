import { LogService } from "./log.service";
import { Injectable } from "@angular/core";

@Injectable()
export class StarWarsService {
  private characters = [
    {
      name: 'Luke Skywalker', side: ''
    },
    {
      name: 'Darth Vader', side: ''
    },
    {
      name: 'Han Solo', side: ''
    },
    {
      name: 'Emperor Palpatine', side: ''
    },
    {
      name: 'Yoda', side: ''
    },
    {
      name: 'Darth Maul', side: ''
    },
    {
      name: 'Obi-Wan Kenobi', side: ''
    },
    {
      name: 'Princess Padme Amidala', side: ''
    },
    {
      name: 'Chewbacka', side: ''
    },
    {
      name: 'Count Dookoo', side: ''
    },
  ];

private logService: LogService;

constructor(logService: LogService){
this.logService = logService;
}

  getCharacters(chosenList) {

    if (chosenList === 'all') {
      return this.characters.slice();
    }

    return this.characters.filter((char) => {
        return char.side === chosenList;
      })
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })

    this.characters[pos].side = charInfo.side;
    this.logService.writeLog('Character: ' + charInfo.name + ' is now ' + charInfo.side);
  }

}
