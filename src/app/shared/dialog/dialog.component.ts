import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
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

  closeModal(){
    this.dialogRef.close();
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogComponent>) {
    // this.modalTitle = data.title;
  }

  ngOnInit() {
    this.galleryOptions = [
      {
        // "previewFullscreen": false,
        "imageArrowsAutoHide": true,
        // "thumbnailsArrowsAutoHide": false,
        // "preview": true,
        // imagePercent: 60,
        // thumbnailsPercent: 20,
        // previewCloseOnEsc: true,
        // previewForceFullscreen: false,
        // width: '600px',
        height: '343px',
        // thumbnailsColumns: 4,
        arrowNextIcon:'fa fa-chevron-right',
        arrowPrevIcon:'fa fa-chevron-left',
        closeIcon:'fa fa-times',
        imageAnimation: NgxGalleryAnimation.Slide
      },
      { "breakpoint": 500, "width": "300px", height: "300px", "thumbnailsColumns": 3 },
      { breakpoint: 500, width: '100%', height: '700px' },
      // { breakpoint: 400}
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
