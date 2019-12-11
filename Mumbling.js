/* 
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
    // const sArray = s.split('');
    // const newSArray = [];
    // for (let i = 0; i < sArray.length; i++) {
    //     newSArray.push(sArray[i].toUpperCase() + sArray[i].repeat(i));
    // };
    // return newSArray.join('-');

    // refactored
    return s.split('').map((letter, i) =>
        letter.toUpperCase() + letter.toLowerCase().repeat(i)
    ).join('-');
}

console.log(accum("abcd"));