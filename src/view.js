import Backbone from 'backbone';
import * as _ from 'underscore';
import $ from 'jquery';
import Mustache from 'mustache';
import MyView from './myview';


export default class TestView extends Backbone.View {
    constructor() {
        super();
    }

    initialize() {
        this.el = 'li';
        this.$el = $(this.el);
        this.template = '<div id="myarea"></div>'
        this.render();
    }

    render() {
        console.log(this.el)
        this.$el.html(Mustache.render(this.template));
        new MyView();
    }



}
