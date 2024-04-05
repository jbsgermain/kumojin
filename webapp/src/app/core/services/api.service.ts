import { Injectable } from "@angular/core";
import { HttpService } from "../../shared/services/http.service";import { Event } from "../../modules/home/models/event.model";
3


@Injectable({
    providedIn: 'any'
})
  
export class ApiService {
    constructor(
        private http: HttpService
    ) { }

    GetEvents() {
        return this.http.Get(`/api/events`);
    }

    PostEvent(payload: Event) {
        return this.http.Post(`/api/event`, payload);
    }

    GetCountries() {
        return this.http.Get('https://countriesnow.space/api/v0.1/countries');
    }

    GetTimezone(city: string) {
        let uri = `https://api.ipgeolocation.io/timezone?apiKey=be86fef1829245e5bf0d211b6e607518&location=${city}`
        return this.http.Get(uri);
    }
}