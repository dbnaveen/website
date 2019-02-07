import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { viewParentEl } from '@angular/core/src/view/util';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {
  developerSkills: any;
  constructor() { }

  ngOnInit() {
    this.developerSkills = [
      {
        key: 'Javascript Framework',
        value: 'AnguarJS, Angular 5 & 7, jQuery'
      },
      {
        key: 'UI/Web Framework',
        value: 'Angular-Material, Bootstrap 4, Zurb Foundation, Django'
      },
      {
        key: 'Javascript Transpilers',
        value: 'Typescript'
      },
      {
        key: 'CSS Pre-Processors',
        value: 'SCSS'
      },
      {
        key: 'Data Visualization Tools',
        value: 'Highcharts, D3.JS, Nvd3, jQuery Sparklines, Morris.JS'
      },
      {
        key: 'Javascript Build Tool',
        value: 'Gulp'
      },
      {
        key: 'Version Control',
        value: 'Github'
      },
      {
        key: 'Design Tools',
        value: 'Adobe XD CC, Photoshop'
      },
    ]
  }

}
