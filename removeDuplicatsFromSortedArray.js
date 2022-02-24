
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.


// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
nums = [0,0,1,1,1,2,2,3,3,4];
var removeDuplicates = function(nums) {
  let newArray = []; 
  console.log(nums)
  for (let x = 0; x < nums.length; x++) {
      if(!nums[x] === newArray) {
        newArray++; 
        newArray = nums;
      }
      return newArray;
    }
console.log(newArray);
    
};

removeDuplicates(nums);
