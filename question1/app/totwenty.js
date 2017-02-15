'use strict'

var toTwenty =  function(){
	var oneToTwenty = [];
	for(var value = 1; value <= 20; value++){
		oneToTwenty.push(value);
	}
	return oneToTwenty;
}

module.exports = toTwenty;