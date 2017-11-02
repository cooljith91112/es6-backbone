import Backbone from 'backbone';
import TestView from './view';
import _ from 'underscore';
import Http from './http';

Backbone.history.start();

class Index {
    constructor() {
        Http.config = {
            baseURL: 'http://demo1393194.mockable.io/'
        };
        new TestView(); //MainView

    }
}

new Index();
