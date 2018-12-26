import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [MatButtonModule, MatTabsModule, MatDividerModule, MatTooltipModule],
  exports: [MatButtonModule, MatTabsModule, MatDividerModule, MatTooltipModule]
})
export class MaterialModule { }