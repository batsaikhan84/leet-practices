const findNumber = (arr) => {
    newArr = arr.sort((a,b) => a - b)
    for (let i = 0; i < newArr.length-1; i++) {
        if (newArr[i] + 1 !== newArr[i+1]) {
            console.log(newArr[i] + 1)
        }
    }

}

// arr = [3,7,1,2,8,4,5]
arr = [2,3,4,6,7,8,9]

findNumber(arr)

