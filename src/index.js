import Backbone from 'backbone';
import TestView from './view';
import _ from 'underscore';

Backbone.history.start();

class Index {
    constructor() {
        new TestView();
    }
}

new Index();
