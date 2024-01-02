
// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

function capitalizeEachLetterOfWord(str) {
    let stringArr = str.split(' ');
    let capitalizeArr = stringArr.map(work => {
        let charArr = work.split('');
        charArr[0] = charArr[0].toUpperCase();
        return charArr.join('');
    });
    return capitalizeArr.join(' ');
}

const result = capitalizeEachLetterOfWord('Hi, good evening guys. This is my bike.');
console.log(result);
