import { NgModule } from '@angular/core';
import { MatNativeDateModule, DateAdapter, NativeDateAdapter, MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { EventPageComponent } from './pages/event-page/event-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { EventCardComponent } from './components/event-card/event-card.component';
import { SharedModule } from '../../shared/shared.module';
import { EventDialogComponent } from './components/event-dialog/event-dialog.component';

@NgModule({
  declarations: [
    EventPageComponent,
    EventCardComponent,
    EventDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' }
  ]
})
export class HomeModule { }
