'use strict'


var findMissing = function(list1, list2){
	if(list1.length < 1 && list2.length < 1){
		return 0;
	}
	else{
		if(list1.length < list2.length){
			var len = list2.length;
			var indexFound;
			for(var i = 0; i < len; i++){
				indexFound = list1.indexOf(list2[i]);
				if(indexFound !== -1){
					continue; 
				}
				else{
					return list2[i]; //Returns the difference in the two array.
				}
			}
			return 0;		
		}
		else
		{
			len = list1.length; 
			for(var j = 0; j < len; j++){
				indexFound = list2.indexOf(list1[j]);
				if(indexFound !== -1){
					continue; 
				}
				else{
					return list1[j];//Returns the difference in the two array.
				}
			}	
			return 0;
		}
	}
} 


module.exports = {
	findMissing : findMissing
}


//console.log(findMissing([4, 6, 8], [4, 6, 8, 10]));