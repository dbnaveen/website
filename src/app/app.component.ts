import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'personal-website1';

  constructor(private meta:Meta){
    this.meta.addTags([
      {name: 'description', content: 'Personal portfolio'},
      {name: 'author', content: 'Naveen D B'},
      {name: 'keywords', content: 'Angular 7, Bootstrap 4, navbar fixed for mobile, burger animation, link animation'}
    ]);
    this.meta.updateTag({ name: 'description', content: 'Angular 4 meta service - updated' });
  }

}
