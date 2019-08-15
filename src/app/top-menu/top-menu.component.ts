import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { Power1 } from "gsap/all";

import * as $ from "jquery";

declare var TweenMax: any;

@Component({
  selector: "app-top-menu",
  templateUrl: "./top-menu.component.html",
  styleUrls: ["./top-menu.component.scss"]
})
export class TopMenuComponent implements OnInit {
  @ViewChild("topMenu") topMenu: ElementRef;

  constructor(private meta: Meta) {
    this.meta.addTags([
      {
        name: "description",
        content:
          "Top menu navbar with fixed position and on mobile deives it adds a burger and links  with animation"
      },
      { name: "author", content: "Naveen D B" },
      {
        name: "keywords",
        content:
          "Angular 7, Bootstrap 4, navbar fixed for mobile, burger animation, link animation, "
      }
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
        this.navLinks[
          i
        ].style.animation = `navLinkFade 0.5s ease backwards ${i / 12}s`;
      }
    }
  }

  ngOnInit() {
    this.doIt();
  }

  doIt() {
    TweenMax.from(this.topMenu.nativeElement, 2, {
      opacity: 0,
      y: -200,
      ease: Power1.easeInOut,
      onComplete: this.activeTab()
    });
  }

  activeTab() {
    // var doc = document.querySelector("#navbarNav");
    // $('body').scrollspy({ target: '#navbar-example' })
    var id = $("#navbarNav ul").find("a");
  }
}
