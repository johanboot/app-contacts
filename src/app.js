import {Router} from 'aurelia-router';
import {WebAPI} from './web-api';

export class App {
  static inject = [Router, WebAPI];
  constructor(router, api) {
    this.router = router;
    this.api = api;

    this.router.configure(config => {
      config.title = 'Contacts';
      config.map([
        { route: '',              moduleId: 'no-selection',   title: 'Select'},
        { route: 'contacts/:id',  moduleId: 'contact-detail' }
      ]);
    });
  }
}
