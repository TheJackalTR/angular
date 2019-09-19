import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StartcheckinComponent } from './components/startcheckin/startcheckin.component';
import { CheckinComponent } from './components/checkin/checkin.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRouteModule } from './routing.module';
import { CheckinService } from './services/checkin.service';

@NgModule({
  declarations: [
    AppComponent,
    StartcheckinComponent,
    CheckinComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouteModule,
    FormsModule
  ],
  providers: [CheckinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
