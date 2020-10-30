var xorOperation = function(n, start) {
    let nums = []
    for(let i=0; i<n; i++) {
        nums.push(start + 2 * i)
    }
    let b = 0
    for(let i=0; i<nums.length; i++) {
      b = b ^ nums[i] 
    }
    return b
};