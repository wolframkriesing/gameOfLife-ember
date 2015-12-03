export default Ember.Route.extend({
  model() {
    return 'NIX';
    //return this.store.query('post', { favorite: true });
  }
});
