import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchstockComponent } from './searchstock/searchstock.component';

import {MatFormFieldModule,MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [SearchstockComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule,
    MatGridListModule,
  ],
  exports: [SearchstockComponent]
})
export class BuysellModule { }
