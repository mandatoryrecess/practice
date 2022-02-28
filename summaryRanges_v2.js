let nums = [0,1,2,4,5,7, 9, 10, 11, 15, 30]; 
var summaryRanges = function(nums) {

  const result = []

  for (let i = 0; i < nums.length; i ++){
    let end = i; 
    while(nums[end  + 1] === nums[end] + 1){
      end += 1 
    }
    if (end > i) {
      result.push(`${nums[i]}-->${nums[end]}`)
    } else {
      result.push(`${nums[i]}`)
    }
    i = end; 
  }
  return result; 
}
console.log(summaryRanges(nums))