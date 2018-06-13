import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,
         MatToolbarModule,
         MatDatepickerModule,
         MatFormFieldModule,
         MatCardModule,
         MatIconModule,
         MatButtonModule,
         MatCheckboxModule,
         MatButtonToggleModule
                                 } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MatMomentDateModule,
    FlexLayoutModule,
    MatInputModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule
  ],
  declarations: []
})
export class SharedMaterialModule { }
