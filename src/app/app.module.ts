import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomSwitchComponent } from './custom-switch/custom-switch.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { CustomTagComponent } from './custom-tag/custom-tag.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CustomSwitchComponent,
    CustomButtonComponent,
    CustomTagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzTagModule,
    NzSwitchModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
