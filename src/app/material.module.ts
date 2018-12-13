import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  imports: [MatButtonModule, MatTabsModule, MatDividerModule],
  exports: [MatButtonModule, MatTabsModule, MatDividerModule]
})
export class MaterialModule { }