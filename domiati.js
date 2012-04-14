/**
 * domiati
 * a minimalistic dom ready event listener.
 * 
 * @version 0.1.0
 * @author Mikael Jorhult
 * @license http://mikaeljorhult.mit-license.org MIT
 *
 * Project repository: https://github.com/mikaeljorhult/domiati
 */
domiati = {
	doc: null,
	event_listen: null,
	
	ready: function(func) {
		if(this.doc.readyState === 'complete') {
			func();
			return;
		}
		
		if(this.event_listen) {
			this.doc.addEventListener('DOMContentLoaded', func, false);
		} else {
			this.doc.attachEvent('onreadystatechange', func);
		}
	},
	
	init: function() {
		this.doc = document;
		this.event_listen = (this.doc.addEventListener ? true : false);
		return this;
	}
}.init();