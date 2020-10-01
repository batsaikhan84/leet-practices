/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let ans = []
    for (let i = 1; i < nums.length+1; i++) {
        ans.push(nums.slice(0, i).reduce((acc, cur) => acc + cur))
    }
    return ans
};