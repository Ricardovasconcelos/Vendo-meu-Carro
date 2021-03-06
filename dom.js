(function (doc){
	'use strict';

	function DOM(elements){
		if(!(this instanceof DOM))
			return new DOM(elements);

		this.element = doc.querySelectorAll(elements);
}

	DOM.isArray = function isArray( param ) {
	return Object.prototype.toString.call( param ) === '[Object Array';
};

	DOM.isObject = function isObject( param ) {
	return Object.prototype.toString.call( param ) === '[Object Object';
};

	DOM.isFunction = function isFunction( param ) {
	return Object.prototype.toString.call( param ) === '[Object Function';
};

	DOM.isNumber = function isNumber( param ) {
	return Object.prototype.toString.call( param ) === '[Object Number';
};

	DOM.isString = function isString( param ) {
	return Object.prototype.toString.call( param ) === '[Object String';
};

	DOM.isBoolean = function isBoolean( param ) {
	return Object.prototype.toString.call( param ) === '[Object Boolean';
};

	DOM.isNull = function isNull( param ) {
	return Object.prototype.toString.call( param ) === '[Object Null' 
	|| Object.prototype.toString.call( param ) === '[Object Undefined';
};

DOM.prototype.on = function on(eventType, callback){
	Array.prototype.forEach.call(this.element, function(element){
		element.addEventListener(eventType, callback, false);
	});
};

DOM.prototype.off = function off(eventType, callback){
	Array.prototype.forEach.call(this.element, function(element){
		element.removeEventListener(eventType, callback, false);
	});
};

DOM.prototype.get = function get(index){
	if (!index)
		return this.element[0];

	return this.element[index];



	

};

DOM.prototype.forEach = function forEach(){
	return Array.prototype.forEach.apply(this.element, arguments);
};

DOM.prototype.map = function map(){
	return Array.prototype.map.apply(this.element, arguments);
};

DOM.prototype.filter = function filter(){
	return Array.prototype.filter.apply(this.element, arguments);
};

DOM.prototype.reduce = function reduce(){
	return Array.prototype.reduce.apply(this.element, arguments);
};

DOM.prototype.reduceRight = function reduceRight(){
	return Array.prototype.reduceRight.apply(this.element, arguments);
};

DOM.prototype.every = function every(){
	return Array.prototype.every.apply(this.element, arguments);
};

DOM.prototype.some = function some(){
	return Array.prototype.some.apply(this.element, arguments);
};



window.DOM = DOM;

})(document);