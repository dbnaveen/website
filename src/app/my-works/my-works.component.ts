import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../shared/dialog/dialog.component';

@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class MyWorksComponent implements OnInit {

  animal: string;
  name: string;


  constructor(public dialog: MatDialog) { }

  openDialog() {
    // const dialogConfig = new MatDialogConfig();
    // const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '80%',
      width: '80%'
    });
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.data = {
    //   id: 1,
    //   title: 'Angular For Beginners'
    // };
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // console.log(result)
    });
  }

  ngOnInit() {

  }


}

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }
