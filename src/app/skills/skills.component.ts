import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { viewParentEl } from '@angular/core/src/view/util';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
