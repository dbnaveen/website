import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [MatButtonModule, MatTabsModule, MatDividerModule, MatTooltipModule, MatSnackBarModule],
  exports: [MatButtonModule, MatTabsModule, MatDividerModule, MatTooltipModule, MatSnackBarModule]
})
export class MaterialModule { }