//Write a programe to find palindrom words in words array 
//['Madam', 'Rajender', radar, 'Kayak', 'Mom', 'sunny'];

const stringArray = ['Madam', 'Rajender', 'radar', 'Kayak', 'Mom', 'sunny'];
function findPalindrom(strArr){
    let palindromWords=[];
    for(let word of strArr){
        let reversWord = word.split('').reverse().join('');
        if(word.toLowerCase()===reversWord.toLowerCase()){
            palindromWords.push(word);
        }
    }
    return palindromWords;
}

console.log(findPalindrom(stringArray));