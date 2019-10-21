import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
    config: service(),

    tagName: '',

    didInsertElement() {
        let iframe = document.querySelector('#site-frame');
        if (iframe) {
            iframe.src = `${this.config.get('blogUrl').replace('https:', '').replace('http:', '')}/`;
        }
    },

    didReceiveAttrs() {
        // reset the src attribute each time the guid changes - allows for
        // a click on the navigation item to reset back to the homepage
        if (this.guid !== this._lastGuid) {
            let iframe = document.querySelector('#site-frame');
            if (iframe) {
                iframe.src = `${this.config.get('blogUrl').replace('https:', '').replace('http:', '')}/`;
            }
        }
        this._lastGuid = this.guid;
    }
});
