import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from './../../../../environments/environment';

@Injectable()
export class WaveReleaseService {

  constructor(private http: HttpClient) { }

  getDistributionCenterApi() {
    const data = {
      types: ['Distribution Center'],
      names: [environment.siteNumber]
    };
    const promise = new Promise((resolve, reject) => {
      this.http.post(`${environment.locationUrl}?fields=default,attributes`, data)
        .toPromise()
        .then(res => {
          resolve(res);
        }, error => {
          reject(error);
        });
    });
    return promise;
  }

  getSubCenterApi(id) {
    const data = {
      types: ['Sub Center'],
      parentIds: [id]
    };
    const promise = new Promise((resolve, reject) => {
      this.http.post(`${environment.locationUrl}?fields=default,attributes`, data)
        .toPromise()
        .then(res => resolve(res), err => reject(err));
    });
    return promise;
  }

  getCycleWaveApi(params) {
    const promise = new Promise((resolve, reject) => {
      this.http.get(`${environment.cycleWaveUrl}`, {params: params})
        .toPromise()
        .then(res => resolve(res), err => reject(err));
    });
    return promise;
  }

}
