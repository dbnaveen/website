import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {
  modalTitle: string;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    // this.modalTitle = data.title;
  }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
    this.galleryImages = [
      {
        small: 'assets/img/works/login.png',
        medium: 'assets/img/works/login.png',
        big: 'assets/img/works/login.png'
      },
      {
        small: 'assets/img/works/dashboard.PNG',
        medium: 'assets/img/works/dashboard.PNG',
        big: 'assets/img/works/dashboard.PNG'
      },
      {
        small: 'assets/img/works/asset-list.png',
        medium: 'assets/img/works/asset-list.png',
        big: 'assets/img/works/asset-list.png'
      },
      {
        small: 'assets/img/works/sensor.png',
        medium: 'assets/img/works/sensor.png',
        big: 'assets/img/works/sensor.png'
      },
      {
        small: 'assets/img/works/health-summary-30days.png',
        medium: 'assets/img/works/health-summary-30days.png',
        big: 'assets/img/works/health-summary-30days.png'
      },
      {
        small: 'assets/img/works/geo-fence.png',
        medium: 'assets/img/works/geo-fence.png',
        big: 'assets/img/works/geo-fence.png'
      },
    ];
  }

}
