import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function () {
      this.transitionTo('home');
  },
  // TODO: Get this working!!!
  // model() {
  //   return Ember.RSVP.hash({
  //     allTestmodels: this.store.findAll('testmodel')
  //   });
  // },
  //
  // setupController(controller, hash) {
  //   controller.setProperties(hash);
  // }
});
