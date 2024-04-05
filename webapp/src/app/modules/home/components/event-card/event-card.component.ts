import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  mouseover: boolean = false;

  @Input() event: Event;
  @Output() eventClick: EventEmitter<Event> = new EventEmitter<Event>();
}
