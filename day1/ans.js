const fs = require("fs");

const all  = fs.readFileSync("day1/input.txt", "utf8");

const lines = all.split("/n");
let ans = 0;
let loop = 0;
let f = true
let a = [];




while(f || loop < 1000){

    lines.forEach(l => {
        ans = eval(ans + l); 
        
        if(a.indexOf(ans)!== -1){
            console.log(ans)
        }else{
            a.push(ans);
            f = false
        }
        
    })
 loop++   
}
console.log('fini');

