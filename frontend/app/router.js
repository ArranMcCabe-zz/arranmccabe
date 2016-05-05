import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', { path: '/' });
  this.route('experience', { path: '/experience' });
  this.route('contact', { path: '/contact' });
});

export default Router;
