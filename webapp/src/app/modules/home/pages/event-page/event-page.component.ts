import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core/services/api.service';
import { Event } from '../../models/event.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EventDialogComponent } from '../../components/event-dialog/event-dialog.component';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrl: './event-page.component.scss'
})
export class EventPageComponent implements OnInit{
  events: Event[] = [];

  constructor(
    private api: ApiService,
    private dialog: MatDialog
  ) {
    this.api.GetEvents()
      .then((res: Event[] ) => {
        this.events = res;
      })
  }

  ngOnInit(): void {
    
  }

  onEventClicked (event?: Event) {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = "100vw",
    dialogConfig.maxWidth = "100vw"
    
    this.dialog.open(EventDialogComponent, {data: event})
  }
  
}
