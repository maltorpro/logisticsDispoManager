//import 'reflect-metadata';
/// <reference path="typings/_custom.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';


import {Disposal} from './components/disposal/disposal';
import {NamesList} from './services/NameList';

// Annotation section
@Component({
  selector: 'app'
})
@RouteConfig([
  { path: '/disposal', component: Disposal, as: 'disposal' }
])
@View({
  template: '<h1>Hello {{ name }}</h1>'
})
// Component controller
class MyAppComponent {
  name: string;
  
  constructor() {
    this.name = 'Alice';
  }
}

bootstrap(MyAppComponent, [routerInjectables]);