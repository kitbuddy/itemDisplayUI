import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  items: any;

  constructor() { }

  ngOnInit() {

    this.items = [
      {
        label: 'Home', icon: 'pi pi-fw pi-video',
        items: [
          [
            {
              label: 'Video 1',
              items: [{label: 'Video 1.1'}, {label: 'Video 1.2'}]
            }
          ]
        ]
      },
      {
        label: 'Settings', icon: 'pi pi-fw pi-cog',
        items: [
          [
            {
              label: 'Setting 1',
              items: [{label: 'Setting 1.1'}, {label: 'Setting 1.2'}]
            },
            {
              label: 'Setting 2',
              items: [{label: 'Setting 2.1'}, {label: 'Setting 2.2'}]
            },
            {
              label: 'Setting 3',
              items: [{label: 'Setting 3.1'}, {label: 'Setting 3.2'}]
            }
          ],
          [
            {
              label: 'Technology 4',
              items: [{label: 'Setting 4.1'}, {label: 'Setting 4.2'}]
            }
          ]
        ]
      }
    ];
  }

}
