import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {DataLocation, Prediction, WineProperties} from '../model/models';


const SERVER_URL = 'api/';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {
  }

  public trainModel(dataLocation: DataLocation): Observable<any> {
      return this.http.get(`${SERVER_URL}train`).map((response) => response);
    //return this.http.post(`${SERVER_URL}train`, dataLocation).map((response) => response);
  }

  public predictQuality(wineProperties: WineProperties): Observable<any> {
    return this.http.post(`${SERVER_URL}predict`, wineProperties).map((response) => response);
  }
}
