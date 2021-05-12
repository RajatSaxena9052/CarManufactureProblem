const data = require("../data");
const fn = require("../problem4");
let d = data.inventory

const result = fn(d)

if(typeof result == 'object'){
    if(result.length == 0){
        console.log(result);
    }
    else{
    console.log(result);
    }
}
