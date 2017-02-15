'use strict'

var toOneThousand = function(){
	var tenToOneThousand = [];
	for(var value = 10; value <= 1000; value += 10){
		tenToOneThousand.push(value);
	}
	return tenToOneThousand;
}

module.exports = toOneThousand;