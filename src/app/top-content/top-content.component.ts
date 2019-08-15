import {
  Component,
  ElementRef,
  OnInit,
  ViewEncapsulation,
  ViewChild
} from "@angular/core";
import { HostListener } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { Power1 } from "gsap/all";

import * as $ from "jquery";

declare var TweenMax: any;

@Component({
  selector: "app-top-content",
  templateUrl: "./top-content.component.html",
  styleUrls: ["./top-content.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class TopContentComponent implements OnInit {
  @ViewChild("topContent") topContent: ElementRef;
  @ViewChild("content") content: ElementRef;

  screenWidth: boolean = true;
  @HostListener("window:resize", ["$event"])
  getScreenSize() {
    this.screenWidth = window.innerWidth >= 1280;
  }

  constructor(private meta: Meta) {
    this.meta.addTags([
      { name: "description", content: "Front End Developer and Designer" },
      { name: "author", content: "Naveen D B" },
      {
        name: "keywords",
        content:
          "Angular 7, Bootstrap 4, navbar fixed for mobile, burger animation, link animation"
      }
    ]);
  }

  type() {
    const texts = ["  Developer & Designer    "];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    (function type() {
      if (count === texts.length) {
        count = 0;
      }
      currentText = texts[count];
      letter = currentText.slice(0, ++index);
      document.querySelector(".typing").textContent =
        "Curious Front-end" + letter;
      if (letter.length === currentText.length) {
        count++;
        index = 0;
      }
      setTimeout(type, 150);
    })();
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth >= 1280;
    // this.type();
    this.doAnimation();
  }

  doAnimation() {
    TweenMax.from(this.topContent.nativeElement, 3, {
      opacity: 0,
      scale: 0,
      ease: Power1.easeOut,
      onComplete: this.activeTab()
    });
    TweenMax.fromTo(
      this.content.nativeElement,
      2.2,
      { opacity: 0, y: -200 },
      { opacity: 1, y: 0, ease: Power1.easeInOut }
    );
  }

  activeTab() {
    var doc = document.querySelector("#navbarNav");
  }
}
