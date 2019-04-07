import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-top-menu",
  templateUrl: "./top-menu.component.html",
  styleUrls: ["./top-menu.component.scss"]
})
export class TopMenuComponent implements OnInit {
  constructor() {}
  navLinks: any;

  toggleBurger() {
    const burger = document.querySelector(".burger");
    this.navLinks = document.querySelectorAll(".navbar-nav button");
    burger.classList.toggle("toggle");

    for (var i = 0; i < this.navLinks.length; i++) {
      if (this.navLinks[i].style.animation) {
        this.navLinks[i].style.animation = "";
      } else {
        this.navLinks[i].style.animation = `navLinkFade 0.5s ease backwards ${i / 5}s`;
      }
    }
  }

  ngOnInit() {}
}
