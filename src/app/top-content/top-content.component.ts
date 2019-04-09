import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
  styleUrls: ['./top-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopContentComponent implements OnInit {

  constructor(private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: 'Front End Developer and Designer'},
      {name: 'author', content: 'Naveen D B'},
      {name: 'keywords', content: 'Angular 7, Bootstrap 4, navbar fixed for mobile, burger animation, link animation'}
    ]);
  }

  type () {
    const texts = ['  Developer & Designer    '];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
      if(count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      document.querySelector('.typing').textContent = 'Curious Front-end' + letter;
      if(letter.length === currentText.length) {
        count++;
        index = 0;
      }
      setTimeout(type, 250);
    }());
  }

  ngOnInit() {
    // this.type();
  }

}
