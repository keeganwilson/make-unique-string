// Write your solution below:
const uniqueStr = str => {
    let strArr = str.split('');
    let unique = []
    for (let i = 0; i < strArr.length; i++) {
        if (unique.includes(strArr[i]) === false) {
            unique.push(strArr[i])
        }
    }
    return unique.join('')
}
console.log(uniqueStr('helloworld'))
console.log(uniqueStr('iwanttoclimbamountain'))
