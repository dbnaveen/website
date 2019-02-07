import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { MatSnackBar } from '@angular/material';

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

  closeModal() {
    this.dialogRef.close();
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogComponent>, public snackBar: MatSnackBar) { }

  openSnackBar() {
    this.snackBar.open('Note: Screens where are developmed by myself', 'close', {
      duration: 4000,
      panelClass: ['msg-snackbar']
    });
  }

  tabClick(event) {
    if (event.index === 1) {
      this.openSnackBar();
    }
  }

  ngOnInit() {

    this.galleryImages = [];
    this.data['screenshots'].forEach(val => {
      this.galleryImages.push({
        small: 'assets/img/works/' + val,
        medium: 'assets/img/works/' + val,
        big: 'assets/img/works/' + val
      });
    });
    this.galleryOptions = [
      {
        // "previewFullscreen": true,
        "imageArrowsAutoHide": false,
        // "thumbnailsArrowsAutoHide": false,
        // "preview": true,
        // imagePercent: 60,
        // thumbnailsPercent: 20,
        // previewForceFullscreen: false,
        // width: '600px',
        height: '343px',
        // thumbnailsColumns: 4,
        imageSwipe: true, previewSwipe: true,
        thumbnailsMoveSize:4,
        imageAutoPlay: false, imageAutoPlayPauseOnHover: true, previewAutoPlay: false, previewAutoPlayPauseOnHover: true,
        previewCloseOnClick: true, previewCloseOnEsc: true,
        arrowNextIcon: 'fa fa-chevron-right',
        arrowPrevIcon: 'fa fa-chevron-left',
        closeIcon: 'fa fa-times',
        imageAnimation: NgxGalleryAnimation.Slide
      },
      { "breakpoint": 500, "width": "300px", height: "300px", "thumbnailsColumns": 3 },
      { breakpoint: 500, width: '100%', height: '700px' },
    ];

  }

}
