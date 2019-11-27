import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters = [
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

  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {

    if (this.chosenList === 'all') {
      return this.characters.slice();
    }

    return this.characters.filter((char) => {
        return char.side === this.chosenList;
      })
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    })

    this.characters[pos].side = charInfo.side;
  }
}
