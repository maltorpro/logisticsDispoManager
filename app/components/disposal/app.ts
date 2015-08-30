/// <reference path="../../typings/_custom.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, routerInjectables} from 'angular2/router';

import {Home} from '../home/home';
import {About} from '../about/about';
import {NamesList} from '../../services/NameList';

@Component({
  selector: 'app',
  viewInjector: [NamesList]
})
@RouteConfig([
  { path: '/', component: Home, as: 'home' },
  { path: '/about', component: About, as: 'about' }
])
@View({
  templateUrl: '/app.jade?v=<%= VERSION %>',
  directives: [RouterOutlet, RouterLink]
})
class App {}


bootstrap(App, [routerInjectables]);
