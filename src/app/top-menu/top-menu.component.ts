import { Component, OnInit } from "@angular/core";
import { Meta } from '@angular/platform-browser';

@Component({
  selector: "app-top-menu",
  templateUrl: "./top-menu.component.html",
  styleUrls: ["./top-menu.component.scss"]
})
export class TopMenuComponent implements OnInit {
  
  constructor(private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: 'Top menu navbar with fixed position and on mobile deives it adds a burger and links  with animation'},
      {name: 'author', content: 'Naveen D B'},
      {name: 'keywords', content: 'Angular 7, Bootstrap 4, navbar fixed for mobile, burger animation, link animation, '}
    ]);
  }
  
  navLinks: any;

  toggleBurger() {
    const burger = document.querySelector(".burger");
    this.navLinks = document.querySelectorAll(".navbar-nav button");
    burger.classList.toggle("toggle");

    for (var i = 0; i < this.navLinks.length; i++) {
      if (this.navLinks[i].style.animation) {
        this.navLinks[i].style.animation = "";
      } else {
        this.navLinks[i].style.animation = `navLinkFade 0.5s ease backwards ${i / 12}s`;
      }
    }
  }

  ngOnInit() {}
}
