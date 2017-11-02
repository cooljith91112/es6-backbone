import Backbone from 'backbone';
import * as _ from 'underscore';
import $ from 'jquery';
import Mustache from 'mustache';
import MyView from './myview';

import Http from './http';


export default class TestView extends Backbone.View {
    constructor() {
        super();
    }

    initialize() {
        this.el = 'li';
        this.$el = $(this.el);
        this.template = '<div id="myarea"></div>';

        Http.service.get('test1').then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });

        this.render();
    }

    render() {
        console.log(this.el)
        this.$el.html(Mustache.render(this.template));
        new MyView();
    }



}
