'use strict'

var myApp = require('../app/library.js');


describe('Binary Search to traverse an ordered list, effectively', function() {
 
  describe('Get the index of the item with an expected number of loops in array [10, 20 . . . 1000]', function() {

    it('should return {count: /* <= 3 */, index: 3} for 40', function() {
      var search  = tenToOneThousand.search(40);
      expect(search.count).toBeLessThan(4);
      expect(search.index).toBe(3);
    });

    it('should return {count: /* <= 5*/, index: 87} for 800', function() {
      var search  = tenToOneThousand.search(880);
      expect(search.count).toBeLessThan(6);
      expect(search.index).toBe(87);
    });

    it('should return {count: < /* array length */, index: -1} for 10000 ', function () {
      var search = tenToOneThousand.search(10000);
      expect(search.count).toBeLessThan(search.length);
      expect(search.index).toBe(-1);
    });

  });
});

/*
* Block the indexOf Array function

Array.prototype.indexOf = function () {
  throw new Error('You are not allowed to use the indexOf function');
};
var oneToTwenty = [].toTwenty();
var twoToForty = [].toForty();
var tenToOneThousand = [].toOneThousand();
*/

tenToOneThousand = [].search(880);
