'use strict'

var toForty = function(){
	var twoToForty = [];
	for(var value = 2; value <= 40; value += 2){
		twoToForty.push(value);
	}
	return twoToForty;
}

module.exports = toForty;