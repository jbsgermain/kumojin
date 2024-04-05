import { Component, OnInit } from '@angular/core';

// ANGULAR IMPORTS
import { Inject} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Event } from '../../models/event.model';
import { ApiService } from '../../../../core/services/api.service';

import {FormControl, FormGroup} from '@angular/forms';
import { Country } from '../../models/country.model';

export interface User {
  name: string;
}

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrl: './event-dialog.component.scss',
})
export class EventDialogComponent implements OnInit{
  tz: string;
  countries: Country[] = [];
  cities: string [] = []; 
  selectedCountry: Country;
  selectedCity: string;

  event: Event;

  form = new FormGroup({
    id: new FormControl<number | null>(null),
    name: new FormControl<string | null>(null),
    image: new FormControl<string | null>(null),
    country: new FormControl<string | null>(null),
    city: new FormControl<string | null>(null),
    description: new FormControl<string | null>(null),
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
  });

  constructor(
    public api: ApiService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Event
  ) {
    if (!data) 
      return;

      
    this.form.setValue(data);
    this.event = data;
  }

  ngOnInit() {
    this.api.GetCountries().then(res => {
      this.countries = res.data;

      this.selectedCountry = this.countries.find(
        x => x.country == this.form.get('country').value)

      if(this.selectedCountry)
        this.cities = this.selectedCountry.cities;
    })
  }

  onCountryChanged(country: string) {
    this.selectedCountry = this.countries.find(
      x => x.country == country)

    this.cities = this.selectedCountry.cities;
  } 

  onCityChanged(city: string){

  } 

  post() {
    this.api.PostEvent(this.form.value as Event)
      .then(res => {
        window.location.reload();
      })
  }
}
