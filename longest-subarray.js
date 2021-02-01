function longestSubarray(arr) {
    // Write your code here
    let tempArr = []
    let max = 0
    for (let i = 0; i < arr.length-1; i++) {
        if (tempArr.length === 0) {
            tempArr.push(arr[i])            
        } 
        for (let j = 0; j < tempArr.length; j++) {
            if (Math.abs(tempArr[j] - arr[i + 1]) < 2) {
                tempArr.push(arr[i+1])
                max = Math.max(tempArr.length, max)
                break
            } else {
                tempArr = []
            }
        }
    }
    return max
}

arr = [195593459,195593459,195593458,195593457,195593459,195593459,195593458]
longestSubarray(arr)

