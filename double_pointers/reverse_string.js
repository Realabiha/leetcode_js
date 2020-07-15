const tools = require('../tools.js');


// 输入：["h","e","l","l","o"]
// 输出：["o","l","l","e","h"]

// 数组reverse
// function reverseStr(s){
//     s.reverse();
// }

// 双指针
function reverseStr(s){
    let i = 0, j = s.length - 1;
    while(i < j){
        tools.exchange(s, i, j);
        i ++;
        j --;
    }
    console.log(s);
}

reverseStr(["h","e","l","l","o"])