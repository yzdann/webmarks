import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({

  storage: service(),

  init: function() {
    this._super(...arguments);

    this.storage.on('disconnected', this.handleStorageDisconnect.bind(this));
  },

  handleStorageDisconnect: function() {
    this.storage.deleteTagListCache();

    console.debug('RS disconnected, transition to welcome');
    this.transitionToRoute('welcome');
  }

});
