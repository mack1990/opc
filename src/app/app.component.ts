import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Order Processing';
  mobileQuery: MediaQueryList;

  hamburgerMenu: Array<NavInterface>;

  fillerContent = Array(5).fill(0).map(() =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private titleService: Title,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    console.log(this.mobileQuery)
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    console.log(this._mobileQueryListener)
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.hamburgerMenu = [
      {
        state: '',
        adminOnly: false,
        iconClass: 'home',
        menuItemText: 'Home',
        clickAction: null,
        subMenu: false,
        capName: ''
      },
      {
        state: 'OrderManagement',
        adminOnly: false,
        iconClass: 'business_center',
        menuItemText: 'Order Management',
        clickAction: null,
        subMenu: false,
        capName: '014_OP_EXTENDED'
      },
      {
        state: 'OrderExceptions',
        adminOnly: false,
        menuItemText: 'Order Exceptions',
        subMenu: true,
        clickAction: null,
        capName: '014_OP_RESOLV_EXCEPT'
      },
      {
        state: 'SearchOrders',
        adminOnly: false,
        menuItemText: 'Order Inquiry',
        subMenu: true,
        clickAction: null,
        capName: ''
      },
      {
        state: 'WaveRelease',
        adminOnly: true,
        iconClass: 'insert_chart',
        menuItemText: 'Wave Planning',
        clickAction: null,
        subMenu: false,
        capName: '014_OP_MANAGE_WAVE'
      },
      {
        state: 'WaveRelease',
        adminOnly: false,
        menuItemText: 'Wave Release',
        subMenu: true,
        clickAction: null,
        capName: '014_OP_MANAGE_WAVE'
      },
      {
        state: 'ModifyCycleWave',
        adminOnly: false,
        menuItemText: 'Modify Cycle/Wave',
        subMenu: true,
        clickAction: null,
        capName: '014_OP_EDIT_WAVCYCL'
      },
      {
        state: 'AutoRelease',
        adminOnly: false,
        menuItemText: 'Auto Release Config',
        subMenu: true,
        clickAction: null,
        capName: '014_OP_MANAGE_WAVE'
      },
      {
        state: 'OrderProcessingSchedule',
        adminOnly: false,
        menuItemText: 'Order Processing Schedule',
        subMenu: true,
        clickAction: null,
        capName: '014_OP_MANAGE_SCHDL'
      },
      {
        state: 'BatchManagement',
        adminOnly: false,
        menuItemText: 'Batch Management',
        subMenu: true,
        clickAction: null,
        capName: '014_OP_MANAGE_BATCH'
      }
    ];

    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => {
          console.log(event)
          this.title = event['title'];
          if (!this.title) {
            this.title = 'Order Processing';
          }
          this.titleService.setTitle(this.title);
        }
      );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}

interface NavInterface {
  state: string;
  adminOnly: boolean;
  iconClass?: string;
  menuItemText: string;
  clickAction: null;
  subMenu: boolean;
  capName: string;
}
