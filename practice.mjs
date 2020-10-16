// Running Sum of 1d Array
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
// Kids With the Greatest Number of Candies 
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
// Shuffle the Array
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
// Number of Good Pairs
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
// Defanging an IP Address
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
// Number of Steps to Reduce a Number to Zero
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let counter = 0
    while (num > 0) {
        if (num % 2 === 0 ) {
            num = num/2
            counter += 1
        } else {
            num = num-1
            counter += 1
        }
    }
    return counter
};
// Maximum Nesting Depth of the Parentheses
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let counter = 0
    let max = 0
    for (let char of s) {
        if (char === '(') {
            counter++
            max = Math.max(max, counter)
        }
        if (char === ')') {
            counter--
        }
    }
    return max
};
// Shuffle String
/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let obj = {}
    for(let i=0; i<indices.length; i++) {
        obj[indices[i]] = s[i]
    }
    return Object.values(obj).join('')
};
// How Many Numbers Are Smaller Than the Current Number
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result = []
    for(let c of nums) {
        let counter = 0
        nums.map(e => {
            if (c > e) {
                counter++
            }
        })
        result.push(counter)
    }
    return result
};
// Subtract the Product and Sum of Digits of an Integer
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let p = 1
    let s = 0
    for (let c of n.toString().split('')) {
        c = parseInt(c)
        p = p * c
        s = s + c
    }
    return p - s
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = []
    for(let i=0; i<nums.length-1; i += 2) {
        let times = parseInt(nums[i])
        let char = nums[i+1].toString()
        result.push(...Array(times).fill(char))
    }
    return result
};