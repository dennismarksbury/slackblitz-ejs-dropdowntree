import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  listfields: any;
  mode = 'Delimiter';
  treeSettings: any = {
    expandOn: 'Auto',
    loadOnDemand: true,
    autoCheck: true,
  };

  ngOnInit() {
    const items = [];
    for (let i = 0; i < 10; i++) {
      const topLevelId = this.getRandomId();
      items.push({
        id: topLevelId,
        name: 'Top Level Item ' + topLevelId,
        hasChild: true,
      });

      for (let c = 0; c < 3; c++) {
        const childId = this.getRandomId();
        items.push({
          id: childId,
          pid: topLevelId,
          name: 'Second Level Item ' + childId,
          hasChild: true,
        });

        for (let cc = 0; cc < 3; cc++) {
          const subChildId = this.getRandomId();
          items.push({
            id: subChildId,
            pid: childId,
            name: 'Third Level Item ' + subChildId,
            hasChild: false,
          });
        }
      }
    }

    console.log('Total items', items.length);

    this.listfields = {
      dataSource: items,
      value: 'id',
      parentValue: 'pid',
      text: 'name',
      hasChildren: 'hasChild',
    };
  }

  onCreated() {
    console.log('Created');
  }

  onBeforeOpen() {
    console.log('Opening');
  }

  onOpen() {
    console.log('Opened');
  }

  onDataBound(event) {
    console.log('Databound');
    this.treeSettings.autoCheck = true;
  }

  getRandomId() {
    const min = Math.ceil(0);
    const max = Math.floor(9999999);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
