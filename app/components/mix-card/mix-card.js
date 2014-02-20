(function() {
	// Ran once. Private and static to the element.
	// var foo_ = new Foo();

	// Ran for every instance of the element that's created.
	Polymer('mix-card', {
	    created: function() { },
		ready: function() { },
		attached: function () { },
		detached: function() { },
		attributeChanged: function(attrName, oldVal, newVal) {
			//var newVal = this.getAttribute(attrName);
			console.log(attrName, 'old: ' + oldVal, 'new:', newVal);
		},
		project: "Titel",
		subtitle: "Subtitel",
		shortDescription: "Lorem waddum ipsum dawemun waddu pola hee te vele op dn pottum gezetum",
		url: "http://mixlab.be"
	});
})();