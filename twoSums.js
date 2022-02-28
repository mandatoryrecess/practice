// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]
let nums = [2,2,4]; 
let target = 6;
let result = 0; 
let twoSum = function(nums, target) {

  for(let x = 0; x < nums.length; x++) {
    let tmp = target - nums[x]
   for(let y = 0; y < nums.length; y++){
     if(tmp === nums[y]){
       return [x, y]
     }   
   }
  }
};

console.log(twoSum(nums, target));