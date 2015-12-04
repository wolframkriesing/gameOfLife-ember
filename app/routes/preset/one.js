export default Ember.Route.extend({
  model(params) {
    return [
      [0,0,0,0,0],
      [0,0,0,0,0],
      [0,0,1,0,0],
      [0,0,0,0,0],
      [0,0,0,0,0]
    ];
  }
});
