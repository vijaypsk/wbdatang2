import { Injectable } from '@angular/core';
import { Http, Response, Headers,RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  private dataUrl = 'http://localhost:8000/definitions';
  private indicatordataUrl = 'http://localhost:8000/data/';  // URL to web API
  //private dataUrl = 'http://localhost:8000/data/2012';  // URL to web API

  constructor(private http: Http) { }
  getData(): Observable<any> {
    return this.http.get(this.dataUrl)
      .map(this.extractData)
      .catch(this.handleError);

  }
  
  getResultData(icode: string,year: string): Observable<any> {
    var url = this.indicatordataUrl+year+'/'+icode;
      console.log("DataService url "+url);

    return this.http.get(url)
                     .map(this.extractData)
                     .catch(this.handleError);

  }


  private extractData(res: Response) {
    //console.log(res.json());
    return res.json();
  }
  
  private handleError(error: any) {

    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
