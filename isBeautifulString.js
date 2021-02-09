function isBeautifulString(inputString) {
    let charCount = []
    let uniqChar = []
    for (let i = 0; i < inputString.length; i++) {
        if (uniqChar.length === 0) {
            uniqChar.push(inputString[i])
        }
        if (!uniqChar.includes(inputString[i])) {
            uniqChar.push(inputString[i])
        }
    }
    for (let j = 0; j < uniqChar.length; j++) {
        let count = 0
        for (let k = 0; k < inputString.length; k++) {
            if (uniqChar[j] === inputString[k]) {
                count += 1
            }
        }
        charCount.push(count)
    }
    for (let n = 0; n < charCount.length; n++ ) {
        if (charCount[n+1] > charCount[n]) {
            return false
        }
        return true
    }
}

// let inputString = 'bbbaacdafe'
let inputString = 'aabbb'

console.log(isBeautifulString(inputString))



