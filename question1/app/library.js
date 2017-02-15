'use strict'

Array.prototype.toTwenty = require('./totwenty');
Array.prototype.toForty = require('./toforty');
Array.prototype.toOneThousand = require('./toonethousand');

Array.prototype.search = function(itemToSearch){
	var minIndex = 0;
	var maxIndex = this.length - 1;
	var midIndex = 0;
	var search = {
		count : 0,
		index : -1,
		length : this.length
	};
	
	while(maxIndex >= minIndex){
		if( maxIndex < minIndex){
			search.index = -1;
			return search;
		}
		if(itemToSearch === this[minIndex]){
			search.index = minIndex;
			return search;
		}
		if(itemToSearch === this[maxIndex]){
			search.index = maxIndex;
			return search;
		}
		
		else{
			midIndex = Math.floor((minIndex + maxIndex) / 2);
			if(itemToSearch !== this[minIndex] && itemToSearch !== this[maxIndex])
			{
				minIndex++;
				maxIndex--; 
			}
			if(this[midIndex] === itemToSearch){
				search.index = midIndex;
				return search;
				break;
			}
			else{
				if(this[midIndex] > itemToSearch){
					maxIndex = midIndex - 1;
				}
				else{
					minIndex = midIndex + 1;
				}
			}
		}
		search.count++;
	}
	return search;
}

module.exports = Array.prototype.search;