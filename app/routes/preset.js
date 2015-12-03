export default Ember.Route.extend({
  model(params) {
    return JSON.stringify(params);
  }
});
