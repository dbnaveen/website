import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { HostListener, Input } from "@angular/core";
import { NgxGalleryOptions, NgxGalleryImage } from "ngx-gallery";
import { NgxGalleryAnimation } from "ngx-gallery";

declare var require: any;
const workSnapshotJson = require("../../../assets/json/work-snapshot.json");

@Component({
  selector: "app-work-snapshot",
  templateUrl: "./work-snapshot.component.html",
  styleUrls: ["./work-snapshot.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class WorkSnapshotComponent implements OnInit {
  @Input() data: any;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  screenWidth: boolean = false;

  constructor() {
    this.getScreenSize();
  }

  setGalleryOptions() {
    this.galleryOptions = [
      {
        // "previewFullscreen": true,
        // imagePercent: 60,
        // thumbnailsPercent: 20,
        // previewForceFullscreen: false,
        // "thumbnailsArrowsAutoHide": false,
        imageArrowsAutoHide: false,
        preview: false,
        image: this.screenWidth,
        width: "85%",
        height: "90%",
        imageSwipe: true,
        previewSwipe: true,
        thumbnailsMoveSize: 4,
        imageAutoPlay: false,
        imageAutoPlayPauseOnHover: true,
        previewAutoPlay: false,
        previewAutoPlayPauseOnHover: true,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        arrowNextIcon: "fa fa-chevron-circle-right",
        arrowPrevIcon: "fa fa-chevron-circle-left",
        closeIcon: "fa fa-times",
        imageAnimation: NgxGalleryAnimation.Slide
      },
      {
        breakpoint: 500,
        width: "300px",
        height: "300px",
        thumbnailsColumns: 3
      },
      { breakpoint: 500, width: "100%", height: "700px" }
    ];
  }

  @HostListener("window:resize", ["$event"])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth >= 767;
    this.galleryImages;
    this.getWorkSnapshot(this.data, workSnapshotJson);
  }

  loadSnapshots(key, list) {
    this.galleryImages = [];
    for (var i = 0, j = list.length; i < j; i++) {
      this.galleryImages.push({
        small: "assets/img/works/" + key + "/" + list[i],
        medium: "assets/img/works/" + key + "/" + list[i],
        big: "assets/img/works/" + key + "/" + list[i]
      });
    }
    this.setGalleryOptions();
  }

  getWorkSnapshot(data, obj) {
    if (data !== undefined) {
      let key = data["key"];
      let list = obj[key];
      this.loadSnapshots(key, list);
    }
  }

  ngOnChanges() {
    this.getWorkSnapshot(this.data, workSnapshotJson);
  }

  ngOnInit() {}
}
