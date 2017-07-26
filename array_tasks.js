var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		var newArr = arr.map(function(item){
			return item * item;
		})
		return newArr;
	},

	sum: function (arr) {
		var total = arr.reduce(function(sum, value){
			return sum + value;
		}, 0)
		return total;
	},

	findDuplicates: function (arr) {
		var duplicates = [];
		var sortedArray = arr.sort().map(function(number, index){
			if (arr.indexOf(number, index + 1) > -1 && duplicates.indexOf(number) === -1){
					duplicates.push(item);
			};
		})
		return duplicates;
	},

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter(function(item){
			return item !== valueToRemove;
		})
	},

	findIndexesOf: function (arr, itemToFind) {
		var allIndices =[];
		var all = arr.indexOf(itemToFind);
		while (all != -1){
			allIndices.push(all);
			all = arr.indexOf(itemToFind, all + 1);
		}
		return allIndices;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var workingArr = arr.filter(function(item){return item % 2 === 0;}).map(function(item){return item});
		return this.sum(this.square(workingArr));
	}

}

module.exports = arrayTasks
