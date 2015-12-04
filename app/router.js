import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('index', {path: '/'});
  this.route('preset', function() {
    this.route('new');
  });
  this.route('preset', {path: '/preset/:kind'});
});

export default Router;
