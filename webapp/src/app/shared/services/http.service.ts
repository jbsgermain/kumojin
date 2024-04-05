import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'any',
 })
export class HttpService {
  queu:number = 0;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private http: HttpClient
  ) {}

  public Get(uri:string, payload?:any) {
    return this.Request("GET", uri, {params: payload});
  }
  
  public Post(uri:string, payload?:any) {
    return this.Request("POST", uri, {body: payload});
  }

  public Update(uri:string, payload?:any) {
    return this.Request("PUT", uri, {body: payload});
  }

  public Delete(uri:string, payload?:any) {
    return this.Request("DELETE", uri, {body: payload});
  }

  private  Request(method: string, uri:string, payload?:any) {
    this.spinner.show();

    const promise = new Promise<any>((resolve, reject) => {
      this.http.request(method, uri, payload)
        .subscribe(
          {
            next: (res: any) => {
              this.spinner.hide();
              resolve(res); 
            },
            error: (err: HttpErrorResponse ) => {
              if (err.status == 401){
                this.queu = 0;
                this.spinner.hide();
                reject(err);
              }
              else if ([409].includes(err.status))
                reject(err);
              else
                this.router.navigate(['error404'])
            }
          }
        )
    });

    return promise;
  }
}
