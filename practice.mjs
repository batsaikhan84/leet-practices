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

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max( ...candies )
    let result = []
    for (let i=0; i<candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            result.push(true)
        } else {
            result.push(false)
        }
    }
    return result
};

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let result = []
    let x = nums.slice(0, n)
    let y = nums.slice(n)
    for (let i=0; i<n; i++) {
        result.push(x[i])
        result.push(y[i])
    }
    return result
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let result = 0
    for (let i=0; i<nums.length; i++) {
        result += nums.filter((num, index) => num === nums[i] && i < index).length
    }
    return result
};

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let result = []
    for (let i=0; i<address.length; i++) {
        if (address[i] === '.') {
            result.push('[.]')
        } else {
            result.push(address[i])
        }
    }
    return result.join('') 
};