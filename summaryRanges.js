// You are given a sorted unique integer array nums.

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b
 

// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
 

// Constraints:

// 0 <= nums.length <= 20
// -231 <= nums[i] <= 231 - 1
// All the values of nums are unique.
// nums is sorted in ascending order.

let nums = [0,1,2,4,5,7, 9, 10, 11, 15, 30]; 

 let summaryRanges = function(nums) {

  const result = []; 
  let start = nums[0]; 
  let end = nums[0]; 

  for (let x = 1; x < nums.length; x++){
    const range1 = nums[x]; 
   
    if (range1 - end > 1) {
      //for one it will be a range of only one number 
      if (start === end) result.push(`${start}`); 
      else result.push(`${start}-->${end}`); 
      start = range1; 
    }
    end = nums[x];
  }
  if (end - start === 0) result.push(`${start}`);
  else if (end - start > 0) result.push(`${start}->${end}`);
  
  return result;
    
};

console.log(summaryRanges(nums))