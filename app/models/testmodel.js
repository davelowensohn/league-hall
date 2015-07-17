import DS from 'ember-data';

export default DS.Model.extend({
  // Attributes can use normal transforms
  title: DS.attr('string'),
  body: DS.attr('string'),
  // Or there are special transforms for some data-types
  avatar: DS.attr('parse-file'),
  // There is a parse-date transform, but sometimes dates are just strings
  updatedAt: DS.attr('date'),
  // ALWAYS refer to relationships as async, for now.
  user: DS.belongsTo('user', {async: true})
});
