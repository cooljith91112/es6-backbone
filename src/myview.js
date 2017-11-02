import Backbone from 'backbone';
import * as _ from 'underscore';
import $ from 'jquery';
import Mustache from 'mustache';


export default class MyView extends Backbone.View {
    constructor() {
        super();
    }

    initialize() {
        this.el = '#myarea';
        this.$el = $(this.el);
        this.template = 'Hello';
        this.render();
    }

    render() {
        console.log(this.el)
        this.$el.html(Mustache.render(this.template));
    }



}
