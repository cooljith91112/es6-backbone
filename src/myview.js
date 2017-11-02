import Backbone from 'backbone';
import _ from 'lodash';
import $ from 'jquery';
import Mustache from 'mustache';
import axios from 'axios';
import Http from './http';
import template from './views/template.html';

export default class MyView extends Backbone.View {

    constructor() {
        super();
    }

    initialize() {
        this.el = '#myarea';
        console.log(template);
        this.$el = $(this.el);
        this.template = 'Hello';
        Http.service.get('olapa')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        this.render();

    }

    render() {
        this.$el.html(Mustache.render(template,{data:'This is a sample. sdfhd'}));
    }



}
