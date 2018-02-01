import {Component, Inject, OnInit} from '@angular/core';
import {WaveReleaseService} from './wave-release.service';

import * as moment from 'moment';
import {MatDialog} from '@angular/material';
import {DialogComponent} from './dialog/dialog.component';
@Component({
  selector: 'app-wave-release',
  templateUrl: './wave-release.component.html',
  styleUrls: ['./wave-release.component.scss']
})
export class WaveReleaseComponent implements OnInit {

  subCenters: any = [];
  currentDate: any = moment().format('MM/DD/YYYY');
  orgUnit: any;
  cycleWaves: any = [];
  // [{
  //     'cycle_nbr': '465 ',
  //     'wave_nbr': '808 ',
  //     'whpk': 1,
  //     'orders': 1,
  //     'stores': 1,
  //     'status': ''
  //   }, {'cycle_nbr': '513 ', 'wave_nbr': '249 ', 'whpk': 2, 'orders': 1, 'stores': 1, 'status': ''}, {
  //     'cycle_nbr': '171 ',
  //     'wave_nbr': '150 ',
  //     'whpk': 4,
  //     'orders': 1,
  //     'stores': 1,
  //     'status': ''
  //   }, {'cycle_nbr': '959 ', 'wave_nbr': '684 ', 'whpk': 4, 'orders': 1, 'stores': 1, 'status': ''}, {
  //     'cycle_nbr': '510 ',
  //     'wave_nbr': '494 ',
  //     'whpk': 3,
  //     'orders': 1,
  //     'stores': 1,
  //     'status': ''
  //   }, {'cycle_nbr': '432 ', 'wave_nbr': '714 ', 'whpk': 3, 'orders': 1, 'stores': 1, 'status': ''}, {
  //     'cycle_nbr': '541 ',
  //     'wave_nbr': '627 ',
  //     'whpk': 5,
  //     'orders': 1,
  //     'stores': 1,
  //     'status': ''
  //   }, {'cycle_nbr': '952 ', 'wave_nbr': '045 ', 'whpk': 1, 'orders': 1, 'stores': 1, 'status': ''}, {
  //     'cycle_nbr': '563 ',
  //     'wave_nbr': '429 ',
  //     'whpk': 1,
  //     'orders': 1,
  //     'stores': 1,
  //     'status': ''
  //   }, {'cycle_nbr': '645 ', 'wave_nbr': '857 ', 'whpk': 2, 'orders': 1, 'stores': 1, 'status': ''}];

  constructor(private service: WaveReleaseService, public dialog: MatDialog) {
  }

  ngOnInit() {

    this.getDistributionCenter().then(res => {
      console.log(res);
      const distCenterId = res[0].id;
      return Promise.resolve(distCenterId);
    }).then(result => {
      this.getSubCenter(result).then(res => {
        this.subCenters = res;
        for (let i = 0; i < this.subCenters.length; i++) {
          if (this.subCenters[i].attributes.length > 0 && this.subCenters[i].attributes[0].key === 'primary_subc_ind' && this.subCenters[i].attributes[0].value === 'Y') {
            this.orgUnit = this.subCenters[i];
            console.log(this.orgUnit.id);
            this.getCycleWave(this.orgUnit.id);
          }
        }

      });
    }).catch(err => {
      console.log(err);
    });
  }

  getDistributionCenter() {
    const promise = new Promise((resolve, reject) => {
      this.service.getDistributionCenterApi()
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
    return promise;
  }

  getSubCenter(id) {
    const promise = new Promise((resolve, reject) => {
      this.service.getSubCenterApi(id)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
    return promise;
  }

  getCycleWave(orgId, date?) {
    const queryParams = {
      'orgUnitId': orgId,
      'effectiveReleaseDate': moment(date).format('YYYY-MM-DD')
    };
    this.service.getCycleWaveApi(queryParams)
      .then((res: any) => {
        console.log(res);
        if(!!res) {
          this.cycleWaves = res.releasewave;
        }
        console.log(this.cycleWaves);
      }).catch(err => {
        console.log(err);
    });
  }

  // onDateChange

  onDateChange() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '100%',
      maxWidth: '100%',
      data: { subCenters: this.subCenters }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
      this.getCycleWave(result.selectedSubCenter.id, result.selectedDate);
    });
  }

}


