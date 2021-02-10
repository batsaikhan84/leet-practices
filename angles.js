const solution = (angles) => {
    let anglesArr = angles.split('')
    for (let i = 0; i < angles.length; i++) {
        if (angles[i] === '>' && i === 0) {
            anglesArr.unshift('<')
        }
        if (angles[i] === '<' && angles[i+1] ) {
            anglesArr.push('>')
        }
    }
    return anglesArr.join('')
 };

 angles = '<<>'

 console.log(solution(angles))