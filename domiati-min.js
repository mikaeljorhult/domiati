domiati={doc:null,event_listen:null,ready:function(a){if(this.doc.readyState==="complete"){a();return}if(this.event_listen){this.doc.addEventListener("DOMContentLoaded",a,false)}else{this.doc.attachEvent("onreadystatechange",a)}},init:function(){this.doc=document;this.event_listen=(this.doc.addEventListener?true:false);return this}}.init();