import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { HostListener } from "@angular/core";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from "ngx-gallery";

@Component({
  selector: "app-work-snapshot",
  templateUrl: "./work-snapshot.component.html",
  styleUrls: ["./work-snapshot.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class WorkSnapshotComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  screenWidth: boolean = false;

  constructor() {
    this.getScreenSize();
  }

  @HostListener("window:resize", ["$event"])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth >= 767;
    this.galleryImages;
    this.loadSnapshots();
  }

  loadSnapshots() {
    this.galleryImages = [];
    const data = [
      "IOT/login.png",
      "IOT/dashboard.png",
      "IOT/asset-list.png",
      "IOT/asset-list-map.png",
      "IOT/asset-details.png",
      "IOT/sensor-data.png",
      "IOT/utilization-30.png",
      "IOT/health-summary-30.png",
      "IOT/loc-track-last_known.png",
      "IOT/loc-track-range.png",
      "IOT/select-module.png",
      "IOT/models-list.png",
      "IOT/modal.png",
      "IOT/geo-fence.png",
      "IOT/asset-register.png",
      "IOT/asset-register-manual.png",
      "IOT/asset-register-upload.png"
    ];

    data.forEach(val => {
      this.galleryImages.push({
        small: "assets/img/works/" + val,
        medium: "assets/img/works/" + val,
        big: "assets/img/works/" + val
      });
    });

    this.galleryOptions = [
      {
        // "previewFullscreen": true,
        imageArrowsAutoHide: false,
        // "thumbnailsArrowsAutoHide": false,
        // "preview": true,
        // imagePercent: 60,
        // thumbnailsPercent: 20,
        // previewForceFullscreen: false,
        image: this.screenWidth, //for large screen show, hide for mobile devices
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

  ngOnInit() {
    // this.galleryImages;
    // this.loadSnapshots();
  }
}
