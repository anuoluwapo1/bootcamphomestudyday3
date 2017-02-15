'use strict'

Array.prototype.toTwenty =  function(){
	this.listToSearch = [];
	for(var value = 1; value <= 20; value++){
		this.listToSearch.push(value);
	}
	return this.listToSearch;
}


Array.prototype.toForty = function(){
	var twoToForty = [];
	for(var value = 2; value <= 40; value += 2){
		twoToForty.push(value);
	}
	return twoToForty;
}

Array.prototype.toOneThousand = function(){
	var toOneThousand = [];
	for(var value = 10; value <= 1000; value += 10){
		toOneThousand.push(value);
	}
	return toOneThousand;
}

Array.prototype.search = function(itemToSearch){
	this.listToSearch = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
	this.minIndex = 0;
	this.maxIndex = this.listToSearch.length - 1;
	this.midIndex = 0;
	this.listLength = this.listToSearch.length;
	this.count = 0
	while(this.maxIndex >= this.minIndex){
		this.count++;
		if( this.maxIndex < this.minIndex){
			this.index = -1;
		}
		else{
			this.midIndex = Math.floor((this.minIndex + this.maxIndex) / 2);
			if(this.listToSearch[this.midIndex] === itemToSearch){
				this.index = this.midIndex;
				break;
			}
			else{
				if(this.listToSearch[this.midIndex] > itemToSearch){
					this.maxIndex = this.midIndex - 1;
				}
				else{
					this.minIndex = this.midIndex + 1;
				}
			}
		}
	}
}

/*
const outcome = {};
outcome.oneToTwenty  = [].toTwenty();
outcome.twoToForty  = [].toForty();
outcome.tenToOneThousand  = [].toOneThousand();
*/
module.exports = Array.prototype.search;