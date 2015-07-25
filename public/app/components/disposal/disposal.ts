/// <reference path="../../../../typings/angular2/angular2.d.ts" />
import {Component, View, NgFor} from 'angular2/angular2';

import {NamesList} from '../../services/NameList';

@Component({
  selector: 'component-2'
})
@View({
  templateUrl: './components/disposal/disposal.jade?v=<%= VERSION %>',
  directives: [NgFor]
})
export class Disposal {
  constructor(public list: NamesList) {
  }
  addName(newname) {
    this.list.add(newname.value);
    newname.value = '';
  }
}