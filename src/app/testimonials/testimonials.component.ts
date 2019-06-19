import { Component, OnInit, ViewChild } from "@angular/core";
import { ChangeDetectorRef, ViewEncapsulation } from "@angular/core";
import { NguCarousel, NguCarouselConfig } from "@ngu/carousel";

declare var require: any;
const testimonialsJson = require("../../assets/json/testimonials.json");

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
  styleUrls: ["./testimonials.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class TestimonialsComponent implements OnInit {
  public carouselTileItems: Array<any>;
  name = "Angular";
  slideNo = 0;
  withAnim = true;
  resetAnim = true;
  @ViewChild("myCarousel") myCarousel: NguCarousel<any>;

  constructor(private cdr: ChangeDetectorRef) {}

  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    // interval: {timing: 3000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  };

  carouselItems = testimonialsJson;

  handleLinkedInClick() {
    window.open("https://www.linkedin.com/in/naveen-d-b-0310a693/", "_blank");
  }

  ngOnInit() {
    this.cdr.detectChanges();
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
}
